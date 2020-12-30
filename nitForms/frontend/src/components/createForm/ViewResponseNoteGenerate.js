import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import { Card } from "react-bootstrap";
import DisplayEditor from "./DisplayEditor";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";
import NotingIndivdiual from "./NotingIndivdiual";
import { putAccepted, getAccepted } from "../../actions/AcceptedResponse";
import { CombinedView } from "./CombinedView";
import { withRouter } from "react-router-dom";
import store from "../../store";
import { createMessage } from "../../actions/Messages";
import { postNotification, getNotification } from "../../actions/Notification";
import { getNotingTemplate } from "../../actions/NotingTemplate";
import {
  getDeptDetails,
  putDeptDetails,
} from "../../actions/DirectorDashboardActions";

export class ViewResponseNoteGenerate extends Component {
  state = {
    obj1: {},
    content: "",
    toggleforward: false,
    forwardTo: "",
    showresponse: true,
    linkednotings: false,
    acceptreject: false,
    amountcommit: false,
    forwardtoggle: false,
    accepted: [],
    recommendAmount: 0,
    availAmount: 0,
  };
  name = "";
  description = "";
  time = "";
  obj = {};
  data = "";
  lastsendernotification = "";
  allowAccessFlag = false;
  constructor(props) {
    super(props);
    this.props.getDeptDetails();
    this.props.getAccepted(this.props.match.params.title);
    this.props.getNotification(this.props.username);
    this.props.getNotingTemplate();
    {
      Object.entries(this.props.AcceptedResponse).map(([key, value]) => {
        if (key === this.props.match.params.value) {
          this.obj = value;
          this.name = value.userName;
          this.time = value.responseTime;
          this.setState({ accepted: value });
        }
      });
    }

    this.props.FormName.map((a) => {
      if (a.title === this.props.match.params.title) {
        if (this.props.username === a.created_by) {
          this.allowAccessFlag = true;
        }
      }
    });
    console.log("hedf", this.props.DepartmentDetail);
    this.props.DepartmentDetail.map((deta) => {
      console.log(deta);
      if (deta.deptName === this.props.department) {
        this.setState({ availAmount: deta.availableAmount });
      }
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.AcceptedResponse !== this.props.AcceptedResponse) {
      Object.entries(this.props.AcceptedResponse).map(([key, value]) => {
        if (key === this.props.match.params.value) {
          this.obj = value;
          this.name = value.userName;
          this.time = value.responseTime;
          this.data = this.setState({ obj1: value });
        }
      });
      this.props.FormName.map((a) => {
        if (a.formName === this.props.match.params.title) {
          this.description = a.description;
        }
      });
      {
        Object.entries(this.obj.forwardTo).map(([key, value]) => {
          Object.entries(value).map(([key1, value1]) => {
            if (value1 === this.props.username) {
              this.allowAccessFlag = true;
            }
          });
        });
      }
      this.setState({ accepted: this.props.AcceptedResponse });
    }
  }

  onclick2 = (e) => {
    e.preventDefault();
    this.setState({ toggleforward: !this.state.toggleforward });
  };
  onClickForward = () => {
    var quest = {};
    quest = this.obj;
    var arr = quest["forwardTo"];
    const name = { [this.props.username]: this.state.forwardTo };
    arr.push(name);
    quest["forwardTo"] = arr;
    var acceptedResponseID = quest["acceptedResponseID"];
    var notify = quest["notification"];
    if (notify === null) {
      notify = [];
    }

    var date = new Date();
    date = JSON.stringify(date);
    date = date.split("T")[0];
    date = date.split('"')[1];

    var notifyCmnt = `${this.props.username} FORWARD TO ${this.state.forwardTo}`;
    notify.push([notifyCmnt, date]);
    quest["notification"] = notify;
    this.props.putAccepted(
      this.props.match.params.id,
      this.props.match.params.title,
      quest
    );

    store.dispatch(
      createMessage({
        forwardMessage: `${this.props.username} FORWARD NOTING TO ${this.state.forwardTo}`, //message dispatched as an alert to user
      })
    );

    const questNotify = {};
    questNotify["sender"] = `${this.props.username}`;
    questNotify["reciever"] = `${this.state.forwardTo}`;
    questNotify["notify"] = notifyCmnt;
    questNotify["linkToPage"] = `${this.props.location.pathname}`;
    questNotify["acceptedResponseID"] = `${acceptedResponseID}`;
    questNotify["formName"] = `${this.props.match.params.title}Accepted`;
    console.log(questNotify);
    this.props.postNotification(questNotify);
    this.setState({ accepted: quest });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onclickAcceptResponse = () => {
    this.acceptRejectNotificationSender();
    var quest = {};
    quest = this.obj;

    var notify = quest["notification"]; //checking if notification is null or not
    if (notify === null) {
      notify = [];
    }

    var date = new Date(); //assigning and calling date
    date = JSON.stringify(date);
    date = date.split("T")[0];
    date = date.split('"')[1];

    var notifyCmnt = `${this.props.username} accepted the response sent by ${this.lastsendernotification}`; //putting in notification object and sending for timeline
    notify.push([notifyCmnt, date]);
    quest["notification"] = notify;
    this.props.putAccepted(
      this.props.match.params.id,
      this.props.match.params.title,
      quest
    );

    console.log(this.lastsendernotification, "checking sender");
    const questNotify = {};
    var notifyCmnt = `${this.props.username} accepted  ${this.lastsendernotification}`;
    questNotify["sender"] = `${this.props.username}`;
    questNotify["reciever"] = `${this.lastsendernotification}`;
    questNotify["notify"] = notifyCmnt;
    questNotify["linkToPage"] = `${this.props.location.pathname}`;
    this.props.postNotification(questNotify);
  };

  acceptRejectNotificationSender = (e) => {
    //for sending notification to users
    var forwardtotemp;
    this.props.AcceptedResponse.map((a) => {
      forwardtotemp = a.forwardTo;
    });

    Object.entries(forwardtotemp).map(([key, value]) => {
      Object.entries(value).map(([key1, value1]) => {
        if (value1 === this.props.username) {
          this.lastsendernotification = key1;
        }
      });
    });
  };

  onclickRejecttResponse = () => {
    this.acceptRejectNotificationSender();
    var quest = {};
    quest = this.obj;

    var notify = quest["notification"]; //checking if notification is null or not
    if (notify === null) {
      notify = [];
    }

    var date = new Date(); //assigning and calling date
    date = JSON.stringify(date);
    date = date.split("T")[0];
    date = date.split('"')[1];

    var notifyCmnt = `${this.props.username} rejected the response sent by ${this.lastsendernotification}`; //putting in notification object and sending for timeline
    notify.push([notifyCmnt, date]);
    quest["notification"] = notify;
    this.props.putAccepted(
      this.props.match.params.id,
      this.props.match.params.title,
      quest
    );

    console.log(this.lastsendernotification, "checking sender");
    const questNotify = {};
    var notifyCmnt = `${this.props.username} rejected  ${this.lastsendernotification}`;
    questNotify["sender"] = `${this.props.username}`;
    questNotify["reciever"] = `${this.lastsendernotification}`;
    questNotify["notify"] = notifyCmnt;
    questNotify["linkToPage"] = `${this.props.location.pathname}`;
    this.props.postNotification(questNotify);
  };
  // onClick = () => {
  //   let value1 = this.props.match.params.value;
  //   let title1 = this.props.match.params.title;
  //   const quest = {};
  //   var comm = "";
  //   var comm1 = "";
  //   var comm2 = "";
  //   {
  //     Object.entries(this.props.Forms).map(([key, value]) => {
  //       if (key === value1) {
  //         Object.entries(value).map(([question, answer]) => {
  //           if (question !== "id") {
  //             quest[question] = answer;
  //           }
  //         });
  //       }
  //     });
  //   }
  //   quest["comment"] = this.state.content;
  //   this.props.addAccepted(quest, title1);
  // };

  onClickRecommend = () => {
    var quest = {};
    quest = this.obj;
    var questDept = {};
    var availaAmount = 0;
    this.props.DepartmentDetail.map((deta) => {
      if (deta.deptName === this.props.department) {
        questDept = deta;
        console.log(questDept);
        availaAmount = deta.availableAmount;
      }
    });
    console.log(this.state.recommendAmount, availaAmount, "hnnnnn");
    if (this.state.recommendAmount <= availaAmount / 2) {
      var intRecommendAmount = parseInt(this.state.recommendAmount);
      quest["recommendedAmount"] = parseInt(intRecommendAmount);
      this.props.putAccepted(
        this.props.match.params.id,
        this.props.match.params.title,
        quest
      );
      questDept["recommendedAmount"] =
        parseInt(questDept["recommendedAmount"]) +
        parseInt(this.state.recommendAmount);
      this.props.putDeptDetails(questDept);
      store.dispatch(
        createMessage({
          recommendMessage: `The amount of Rs ${this.state.recommendAmount} is now recommended`, //message dispatched as an alert to user
        })
      );
    } else {
      store.dispatch(
        createMessage({
          notRecommendMessage: `The amount of Rs ${this.state.recommendAmount} is not availabel for recommendation`, //message dispatched as an alert to user
        })
      );
    }
  };

  render() {
    let value1 = this.props.match.params.value;
    const { content } = this.state.content;
    if (this.obj === null) {
      this.render();
    } else {
      if (this.allowAccessFlag) {
        return (
          <Fragment>
            <div
              style={{
                // backgroundColor: "#ffb266",
                backgroundColor: "rgba(0, 153, 153, 0.5)",
                marginTop: "1vw",

                minHeight: "3vw",
                borderRadius: ".3vw",
                padding: "1vw",
                color: "white",
                marginLeft: "5vw",
                marginRight: "5vw",
                fontSize: "1.2vw",
              }}
            >
              <table style={{ paddingLeft: "2vw", paddingRight: "2vw" }}>
                <tr>
                  <td style={{ paddingLeft: "2vw", paddingRight: "2vw" }}>
                    <font style={{ color: "black" }}>NAME:</font>
                    {this.name}{" "}
                  </td>
                  <td style={{ paddingLeft: "2vw", paddingRight: "2vw" }}>
                    <font style={{ color: "black" }}>TITLE:</font>
                    {this.props.match.params.title}
                  </td>
                  <td style={{ paddingLeft: "2vw", paddingRight: "2vw" }}>
                    <font style={{ color: "black" }}>DESCRIPTION:</font>

                    {this.description}
                  </td>
                  <td>
                    {" "}
                    <font style={{ color: "black" }}>TIME:</font>
                    {this.time}
                  </td>
                </tr>
              </table>
            </div>
            <div
              style={{
                position: "relative",
                width: "36vw",
                float: "right",
                marginBottom: "1vw",
                marginTop: "2vw",
                marginRight: "7vw",
              }}
            >
              {this.state.showresponse ? (
                <div>
                  <div
                    style={{
                      position: "relative",
                      width: "36vw",
                      float: "right",
                      justifyContent: "center",
                      textAlign: "center",
                      paddingBottom: ".3vw",
                      paddingTop: "1vw",
                      marginBottom: "1.5vw",
                      // backgroundColor: "#009999",
                      // backgroundImage: "linear-gradient(to right,#009999,#00e7e7",
                      // backgroundImage:
                      //   "linear-gradient(to right,rgba(0, 153, 153, 0.5),rgba(0, 231, 231, 0.5)",
                      backgroundColor: "rgba(0, 153, 153, 0.5)",
                      boxShadow: ".3vw .3vw .3vw silver",
                      borderRadius: ".3vw",
                      paddingRight: "1vw",
                    }}
                  >
                    <h4 style={{ color: "white" }}> Accepted Responses</h4>
                  </div>
                  <div
                    style={{
                      float: "right",
                      postion: "relative",
                      width: "36vw",
                      paddingLeft: "2vw",
                      paddingRight: "2vw",
                      // display: "flex",
                      // justifyContent: "center",
                      paddingTop: "1vw",
                      paddingBottom: "1vw",
                      marginBottom: "4vw",
                      backgroundColor: "#EEEEEE",
                      boxShadow: ".3vw .3vw .3vw silver",
                      borderRadius: ".3vw",
                      //  border: ".2vw solid silver",
                    }}
                  >
                    <Fragment>
                      {Object.entries(this.obj).map(([question, answer]) => {
                        if (
                          (question !== "comment") &
                          (question !== "forwardTo") &
                          (question !== "responseTime") &
                          (question !== "commentAccepted") &
                          (question !== "notification")
                        ) {
                          return (
                            <Fragment key={question}>
                              <Card
                                style={{
                                  borderRadius: ".95vw",
                                  borderWidth: 0,
                                  // border: ".2vw solid #ed6a5a",
                                  marginBottom: "2vw",
                                  width: "25",
                                  color: "#009999",

                                  // height: "auto",
                                  boxShadow: ".5vw .5vw .5vw  silver",
                                }}
                              >
                                <div>
                                  <Card.Header
                                    style={{
                                      backgroundColor: "white",
                                      borderRadius: ".75vw .75vw 0 0",
                                      // width: "25vw",
                                      height: "2.5vw",
                                      fontSize: "1vw",
                                      color: "#009999",
                                      margin: 0,
                                      padding: "0.6vw",
                                    }}
                                  >
                                    <strong> {question.toUpperCase()}</strong>
                                  </Card.Header>
                                  <Card.Body
                                    style={{
                                      backgroundColor: "white",
                                      borderRadius: " 0 0 .75vw .75vw",
                                      // width: "25vw",
                                      fontSize: "0.93vw",
                                      height: "auto",
                                      padding: "0.6vw",
                                      margin: 0,
                                    }}
                                  >
                                    {/* <Card.Title
                                  style={{
                                    fontSize: ".93vw",
                                    marginBottom: ".5vw",
                                  }}
                                >
                                
                                </Card.Title> */}
                                    <Card.Text>
                                      <TextareaAutosize
                                        name={question}
                                        value={answer}
                                        style={{
                                          width: "25vw",
                                          borderColor: "white",
                                          fontSize: "1vw",
                                        }}
                                      >
                                        {answer}
                                      </TextareaAutosize>
                                    </Card.Text>
                                  </Card.Body>
                                </div>
                              </Card>
                            </Fragment>
                          );
                        }
                      })}
                    </Fragment>
                  </div>
                </div>
              ) : (
                <div></div>
              )}

              {this.state.linkednotings ? (
                <div>
                  <div
                    style={{
                      width: "34vw",

                      justifyContent: "center",
                      textAlign: "center",
                      //backgroundImage: "linear-gradient(to right,#009999,#00e7e7",
                      backgroundColor: "rgba(0, 153, 153, 0.5)",
                      paddingTop: "1vw",
                      marginBottom: "1.5vw",
                      // backgroundColor: "#00a3a3",
                      boxShadow: ".3vw .3vw .5vw silver",
                      borderRadius: ".3vw",
                      paddingBottom: ".3vw",
                      paddingRight: "1vw",
                    }}
                  >
                    <h4 style={{ color: "white" }}> Linked Notings</h4>
                  </div>
                  <div
                    style={{
                      float: "left",
                      postion: "relative",
                      width: "34vw",

                      textAlign: "center",

                      paddingLeft: "2vw",
                      paddingRight: "2vw",
                      // display: "flex",
                      // justifyContent: "center",
                      paddingTop: "1vw",
                      paddingBottom: "1vw",
                      marginBottom: "4vw",
                      backgroundColor: "#EEEEEE",
                      boxShadow: ".3vw .3vw .5vw silver",
                      borderRadius: ".3vw",
                    }}
                  >
                    <NotingIndivdiual
                      title={this.props.match.params.title}
                      value={this.props.match.params.value}
                      id={this.props.match.params.id}
                    />
                    <br />
                  </div>
                </div>
              ) : (
                <div></div>
              )}

              {this.state.forwardtoggle ? (
                <div>
                  <div
                    style={{
                      width: "34vw",

                      justifyContent: "center",
                      textAlign: "center",
                      //backgroundImage: "linear-gradient(to right,#009999,#00e7e7",
                      backgroundColor: "rgba(0, 153, 153, 0.5)",
                      paddingTop: "1vw",
                      marginBottom: "1.5vw",
                      // backgroundColor: "#00a3a3",
                      boxShadow: ".3vw .3vw .5vw silver",
                      borderRadius: ".3vw",
                      color: "white",
                      paddingBottom: ".3vw",
                      paddingRight: "1vw",
                      // paddingBottom: "1vw",
                    }}
                  >
                    <h4 style={{ color: "white" }}> Enter UserName</h4>
                  </div>

                  <div
                    style={{
                      float: "left",
                      postion: "relative",
                      width: "34vw",

                      textAlign: "center",

                      paddingLeft: "2vw",
                      paddingRight: "2vw",
                      // display: "flex",
                      // justifyContent: "center",
                      paddingTop: "1vw",
                      paddingBottom: "1vw",
                      marginBottom: "4vw",
                      backgroundColor: "#EEEEEE",
                      boxShadow: ".3vw .3vw .5vw silver",
                      borderRadius: ".3vw",
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <input
                        name="forwardTo"
                        value={this.state.forwardTo}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Enter Username"
                      />{" "}
                      <Button
                        style={{
                          marginRight: "2vw",
                          backgroundColor: "white",
                          color: "#009999",
                          border: " 0.06vw solid #009999",
                          boxShadow: ".1vw .1vw .1vw .1vw lightgray",
                          marginBottom: "1vw",
                          fontFamily: "Times New Roman",
                        }}
                        onClick={this.onClickForward}
                      >
                        Forward
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}

              {this.state.acceptreject ? (
                <div>
                  Do you want to accept this form or Reject this response
                  <br />
                  <Button onClick={this.onclickAcceptResponse}>
                    Accept Response{" "}
                  </Button>
                  <br />
                  <Button onClick={this.onclickRejecttResponse}>
                    Reject Response{" "}
                  </Button>
                </div>
              ) : (
                <div></div>
              )}
              {this.state.amountcommit ? (
                <div>
                  <div>
                    Amount left in the budget that can be committed{" "}
                    {/* {this.state.availAmount} */}
                    <h1>Budget value</h1>
                  </div>

                  <div>Enter the amount that needs to be recomended</div>
                  <div style={{ textAlign: "center" }}>
                    <input
                      name="recommendAmount"
                      onChange={this.onChange}
                      type="text"
                      placeholder="Enter amount"
                    />{" "}
                    <Button
                      style={{
                        marginRight: "2vw",
                        backgroundColor: "white",
                        color: "#009999",
                        border: " 0.06vw solid #009999",
                        boxShadow: ".1vw .1vw .1vw .1vw lightgray",
                        marginBottom: "1vw",
                        fontFamily: "Times New Roman",
                      }}
                      onClick={this.onClickRecommend}
                    >
                      Commit Ammount
                    </Button>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <div
              style={{
                position: "relative",
                width: "30vw",
                float: "left",
                marginBottom: "1vw",
                marginTop: "2vw",
                marginLeft: "1vw",
                marginRight: "7vw",
              }}
            >
              <div
                style={{
                  width: "35vw",

                  justifyContent: "center",
                  textAlign: "center",
                  marginLeft: "5vw",
                  paddingBottom: ".3vw",
                  paddingTop: "1vw",
                  marginBottom: "1.5vw",
                  // backgroundColor: "#009999",
                  // backgroundImage: "linear-gradient(to right,#009999,#00e7e7",
                  // backgroundImage:
                  //   "linear-gradient(to right,rgba(0, 153, 153, 0.5),rgba(0, 231, 231, 0.5)",
                  backgroundColor: "rgba(0, 153, 153, 0.5)",
                  boxShadow: ".3vw .3vw .5vw silver",
                  borderRadius: ".3vw",
                }}
              >
                <h4 style={{ color: "white" }}>Timeline</h4>
              </div>
              <div
                style={{
                  width: "35vw",

                  justifyContent: "center",
                  textAlign: "center",
                  marginLeft: "5vw",
                  paddingBottom: "1vw",
                  paddingTop: "1vw",
                  marginBottom: "1.5vw",
                  // backgroundColor: "#009999",
                  // backgroundImage: "linear-gradient(to right,#009999,#00e7e7",
                  // backgroundImage:
                  //   "linear-gradient(to right,rgba(0, 153, 153, 0.5),rgba(0, 231, 231, 0.5)",
                  backgroundColor: "rgba(0, 153, 153, 0.5)",
                  boxShadow: ".3vw .3vw .5vw silver",
                  borderRadius: ".3vw",
                }}
              >
                <Button
                  onClick={() => {
                    this.setState({ showresponse: true });
                    this.setState({ linkednotings: false });
                    this.setState({ forwardtoggle: false });
                    this.setState({ acceptreject: false });
                    this.setState({ amountcommit: false });
                  }}
                  style={{
                    backgroundColor: "white",
                    color: "#009999",
                    borderWidth: 0,
                    boxShadow: ".3VW .3VW .3VW lightgray",
                    fontFamily: "Times New Roman",
                  }}
                >
                  Show Response
                </Button>
                <Button
                  onClick={() => {
                    this.setState({ showresponse: false });
                    this.setState({ linkednotings: true });
                    this.setState({ forwardtoggle: false });
                    this.setState({ acceptreject: false });
                    this.setState({ amountcommit: false });
                  }}
                  style={{
                    backgroundColor: "white",
                    color: "#009999",
                    borderWidth: 0,
                    fontFamily: "Times New Roman",
                    boxShadow: ".3VW .3VW .3VW lightgray",
                  }}
                >
                  Linked Notings
                </Button>
                <Button
                  onClick={() => {
                    this.setState({ showresponse: false });
                    this.setState({ linkednotings: false });
                    this.setState({ forwardtoggle: true });
                    this.setState({ acceptreject: false });
                    this.setState({ amountcommit: false });
                  }}
                  style={{
                    backgroundColor: "white",
                    color: "#009999",
                    borderWidth: 0,
                    boxShadow: ".3VW .3VW .3VW lightgray",
                    fontFamily: "Times New Roman",
                  }}
                >
                  Forward to
                </Button>
                <Button
                  onClick={() => {
                    this.setState({ showresponse: false });
                    this.setState({ linkednotings: false });
                    this.setState({ forwardtoggle: false });
                    this.setState({ acceptreject: true });
                    this.setState({ amountcommit: false });
                  }}
                  style={{
                    backgroundColor: "white",
                    color: "#009999",
                    borderWidth: 0,
                    boxShadow: ".3VW .3VW .3VW lightgray",
                    fontFamily: "Times New Roman",
                  }}
                >
                  Accept/Reject Form
                </Button>
                <Button
                  onClick={() => {
                    this.setState({ showresponse: false });
                    this.setState({ linkednotings: false });
                    this.setState({ forwardtoggle: false });
                    this.setState({ acceptreject: false });
                    this.setState({ amountcommit: true });
                  }}
                  style={{
                    backgroundColor: "white",
                    color: "#009999",
                    borderWidth: 0,
                    boxShadow: ".3VW .3VW .3VW lightgray",
                    fontFamily: "Times New Roman",
                  }}
                >
                  Ammount Commit
                </Button>
              </div>

              <CombinedView
                id={this.props.match.params.id}
                AcceptedResponse={this.props.AcceptedResponse}
                time2={this.time}
                user={this.name}
              />
            </div>
          </Fragment>
        );
      } else {
        return (
          <div>
            Not authorized, PLEASE CONTACT ADMIN (otherwise legal action can be
            taken)
          </div>
        );
      }
    }
  }
}

const mapStateToProps = (state) => ({
  AcceptedResponse: state.AcceptedResponse.AcceptedResponse,
  username: state.Auth.user.username,
  FormName: state.FormName.FormName,
  department: state.Auth.user.department,
  DepartmentDetail: state.DepartmentDetail.DepartmentDetail,
});

export default withRouter(
  connect(mapStateToProps, {
    putAccepted,
    postNotification,
    getNotification,
    getAccepted,
    getNotingTemplate,
    getDeptDetails,
    putDeptDetails,
  })(ViewResponseNoteGenerate)
);
