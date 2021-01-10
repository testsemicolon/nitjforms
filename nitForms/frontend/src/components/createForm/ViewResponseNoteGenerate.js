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
import { getUserHistory } from "../../actions/FormStatus";
import { postMessage, getMessage } from "../../actions/ChatActions";
import MessageList from "./ChatSystem/MessageList";
import SendMessage from "./ChatSystem/SendMessage";
import axios from "axios";
import {
  getDeptDetails,
  putDeptDetails,
} from "../../actions/DirectorDashboardActions";

export class ViewResponseNoteGenerate extends Component {
  name = "";
  description = "";
  time = "";
  obj = {};
  data = "";
  lastSenderNotification = "";
  allowAccessFlag = false;
  id = "";
  messageList = [];

  constructor(props) {
    super(props);
    this.state = {
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
      userHistory: false,
      sendChatSystem: false,
      messages: null,
    };
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
          this.id = value.acceptedResponseID;
          this.setState({ accepted: value });
        }
      });
    }
    getMessage(this.id).then((res) => {
      console.log(res);
      res.map((ress) => {
        if (ress.acceptedResponseID === this.id) {
          this.setState({ messages: ress.chatRoom }, () => {
            console.log(this.state.messages);
            this.render();
          });
        }
      });
    });
    // console.log("mai yha hu ", response);
    // this.props.getMessage(this.id);
    this.props.getUserHistory(this.name);
    this.props.FormName.map((a) => {
      if (a.title === this.props.match.params.title) {
        if (this.props.username === a.created_by) {
          this.allowAccessFlag = true;
        }
      }
    });
    // {
    //   Object.entries(this.obj.forwardTo).map(([key, value]) => {
    //     Object.entries(value).map(([key1, value1]) => {
    //       console.log(value1, this.props.username);
    //       if (value1 === this.props.username) {
    //         this.allowAccessFlag = true;
    //       }
    //     });
    //   });
    // }

    this.props.DepartmentDetail.map((deta) => {
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
          this.id = value.acceptedResponseID;
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

  onClick2 = (e) => {
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

    var notifyCmnt = `${this.props.username} FORWARD TO ${this.state.forwardTo} `;
    notify.push([notifyCmnt, date]);
    quest["notification"] = notify;
    this.props.putAccepted(
      this.props.match.params.id,
      this.props.match.params.title,
      quest
    );

    store.dispatch(
      createMessage({
        forwardMessage: `${this.props.username} FORWARD NOTING TO ${this.state.forwardTo} `, //message dispatched as an alert to user
      })
    );

    const questNotify = {};
    questNotify["sender"] = `${this.props.username}`;
    questNotify["reciever"] = `${this.state.forwardTo}`;
    questNotify["notify"] = notifyCmnt;
    questNotify["linkToPage"] = `${this.props.location.pathname}`;
    questNotify["acceptedResponseID"] = `${acceptedResponseID}`;
    questNotify["formName"] = `${this.props.match.params.title}Accepted`;
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

    var notifyCmnt = `${this.props.username} accepted the response sent by ${this.lastSenderNotification}`; //putting in notification object and sending for timeline
    notify.push([notifyCmnt, date]);
    quest["notification"] = notify;
    this.props.putAccepted(
      this.props.match.params.id,
      this.props.match.params.title,
      quest
    );
    var acceptedResponseID = quest["acceptedResponseID"];
    const questNotify = {};
    var notifyCmnt = `${this.props.username} accepted the response forwarded by you `;
    questNotify["sender"] = `${this.props.username}`;
    questNotify["reciever"] = `${this.lastSenderNotification}`;
    questNotify["notify"] = notifyCmnt;
    questNotify["linkToPage"] = `${this.props.location.pathname}`;
    questNotify["acceptedResponseID"] = `${acceptedResponseID}`;
    questNotify["formName"] = `${this.props.match.params.title}Accepted`;
    this.props.postNotification(questNotify);
    store.dispatch(
      createMessage({
        acceptMessage: `${this.props.username} accepted the response `,
      })
    );
  };

  acceptRejectNotificationSender = (e) => {
    //for sending notification to users
    var forwardToTemp;
    this.props.AcceptedResponse.map((a) => {
      forwardToTemp = a.forwardTo;
    });

    Object.entries(forwardToTemp).map(([key, value]) => {
      Object.entries(value).map(([key1, value1]) => {
        if (value1 === this.props.username) {
          this.lastSenderNotification = key1;
        }
      });
    });
  };

  onClickRejectResponse = () => {
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

    var notifyCmnt = `${this.props.username} rejected the response sent by ${this.lastSenderNotification}`; //putting in notification object and sending for timeline
    notify.push([notifyCmnt, date]);
    quest["notification"] = notify;
    this.props.putAccepted(
      this.props.match.params.id,
      this.props.match.params.title,
      quest
    );
    var acceptedResponseID = quest["acceptedResponseID"];
    const questNotify = {};
    var notifyCmnt = `${this.props.username} rejected the response forwarded by you `;
    questNotify["sender"] = `${this.props.username}`;
    questNotify["reciever"] = `${this.lastSenderNotification}`;
    questNotify["notify"] = notifyCmnt;
    questNotify["linkToPage"] = `${this.props.location.pathname}`;
    questNotify["acceptedResponseID"] = `${acceptedResponseID}`;
    questNotify["formName"] = `${this.props.match.params.title}Accepted`;
    this.props.postNotification(questNotify);
    store.dispatch(
      createMessage({
        rejectMessage: `${this.props.username} rejected the response `,
      })
    );
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

  sendMessage = (text) => {
    var messages = this.state.messages;
    var userResponse = null;
    if (messages !== null) {
      messages.map((mes) => {
        if (mes.acceptedResponseID === this.id) {
          userResponse = mes;
        }
      });
    }
    if (userResponse === null) {
      userResponse = {};
      userResponse["chatRoom"] = [];
    }
    var date = new Date();
    date = JSON.stringify(date);
    var arr = userResponse["chatRoom"];
    if (arr === null) {
      arr = [];
    }
    arr.push([this.props.username, text, date]);

    console.log(userResponse, this.state.messages);
    if (this.state.messages === null) {
      console.log("if");
      var arrr = [arr];
      this.setState({ messages: arrr }, () => {
        console.log(this.state.messages, "dealersOverallTotal1");
        var quest = {};
        quest["chatRoom"] = this.state.messages;
        quest["formName"] = this.name;
        quest["acceptedResponseID"] = this.id;
        console.log(quest);
        this.props.postMessage(quest);
        this.render();
      });
    } else {
      console.log("else");
      this.setState({ messages: [...this.state.messages, arr] }, () => {
        console.log(this.state.messages, "dealersOverallTotal1");
        var quest = {};
        quest["chatRoom"] = this.state.messages;
        quest["formName"] = this.name;
        quest["acceptedResponseID"] = this.id;
        console.log(quest);
        this.props.postMessage(quest);
        this.render();
      });
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
                backgroundColor: "#E0777D",
                marginTop: "1vw",

                minHeight: "3vw",
                borderRadius: ".3vw",
                padding: "1vw",
                color: "white",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: "1.2vw",
              }}
            >
              <table style={{ margin: "auto" }}>
                <tr>
                  <td style={{ paddingLeft: "2vw", paddingRight: "2vw" }}>
                    NAME:
                    {this.name}{" "}
                  </td>
                  <td style={{ paddingLeft: "2vw", paddingRight: "2vw" }}>
                    TITLE:
                    {this.props.match.params.title}
                  </td>
                  <td style={{ paddingLeft: "2vw", paddingRight: "2vw" }}>
                    DESCRIPTION:
                    {this.description}
                  </td>
                  <td>
                    {" "}
                    TIME:
                    {this.time}
                  </td>
                </tr>
              </table>
              <div
                style={{
                  marginTop: "1vw",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {/* <tr>
                  <td> */}
                <Button
                  onClick={() => {
                    this.setState({ showresponse: true });
                    this.setState({ linkednotings: false });
                    this.setState({ forwardtoggle: false });
                    this.setState({ acceptreject: false });
                    this.setState({ amountcommit: false });
                    this.setState({ userHistory: false });
                    this.setState({ sendChatSystem: false });
                  }}
                  style={{
                    backgroundColor: "white",
                    color: "#009999",
                    borderWidth: 0,
                    boxShadow: ".2VW .2VW .2VW #282c35",
                    fontFamily: "Times New Roman",
                    width: "10.5vw",
                    fontSize: "1vw",
                    paddingLeft: ".1vw",
                    paddingRight: ".1vw",
                    marginTop: "1vw",
                  }}
                >
                  Show Response
                </Button>
                {/* </td>
                  <td> */}
                <Button
                  onClick={() => {
                    this.setState({ showresponse: false });
                    this.setState({ linkednotings: true });
                    this.setState({ forwardtoggle: false });
                    this.setState({ acceptreject: false });
                    this.setState({ amountcommit: false });
                    this.setState({ userHistory: false });
                    this.setState({ sendChatSystem: false });
                  }}
                  style={{
                    backgroundColor: "white",
                    color: "#009999",
                    borderWidth: 0,
                    fontFamily: "Times New Roman",
                    boxShadow: ".2VW .2VW .2VW #282c35",
                    width: "10.5vw",
                    fontSize: "1vw",
                    paddingLeft: ".1vw",
                    paddingRight: ".1vw",
                    marginTop: "1vw",
                  }}
                >
                  Linked Notings
                </Button>
                {/* </td>
                  <td> */}
                <Button
                  onClick={() => {
                    this.setState({ showresponse: false });
                    this.setState({ linkednotings: false });
                    this.setState({ forwardtoggle: true });
                    this.setState({ acceptreject: false });
                    this.setState({ amountcommit: false });
                    this.setState({ userHistory: false });
                    this.setState({ sendChatSystem: false });
                  }}
                  style={{
                    backgroundColor: "white",
                    color: "#009999",
                    borderWidth: 0,
                    boxShadow: ".2VW .2VW .2VW #282c35",
                    fontFamily: "Times New Roman",
                    width: "10.5vw",
                    fontSize: "1vw",
                    paddingLeft: ".1vw",
                    paddingRight: ".1vw",
                    marginTop: "1vw",
                  }}
                >
                  Forward to
                </Button>
                {/* </td>
                  <td> */}
                <Button
                  onClick={() => {
                    this.setState({ showresponse: false });
                    this.setState({ linkednotings: false });
                    this.setState({ forwardtoggle: false });
                    this.setState({ acceptreject: true });
                    this.setState({ amountcommit: false });
                    this.setState({ userHistory: false });
                    this.setState({ sendChatSystem: false });
                  }}
                  style={{
                    backgroundColor: "white",
                    color: "#009999",
                    borderWidth: 0,
                    marginTop: "1vw",
                    boxShadow: ".2VW .2VW .2VW #282c35",
                    fontFamily: "Times New Roman",
                    width: "10.5vw",
                    fontSize: "1vw",
                    paddingLeft: ".1vw",
                    paddingRight: ".1vw",
                  }}
                >
                  Accept/Reject Form
                </Button>
                {/* </td>
                  <td> */}
                <Button
                  onClick={() => {
                    this.setState({ showresponse: false });
                    this.setState({ linkednotings: false });
                    this.setState({ forwardtoggle: false });
                    this.setState({ acceptreject: false });
                    this.setState({ amountcommit: true });
                    this.setState({ userHistory: false });
                    this.setState({ sendChatSystem: false });
                  }}
                  style={{
                    backgroundColor: "white",
                    color: "#009999",
                    borderWidth: 0,
                    boxShadow: ".2VW .2VW .2VW #282c35",
                    fontFamily: "Times New Roman",
                    width: "10.5vw",
                    fontSize: "1vw",
                    paddingLeft: ".1vw",
                    paddingRight: ".1vw",
                    marginTop: "1vw",
                  }}
                >
                  Amount Recommend
                </Button>
                {/* </td>
                  <td> */}
                <Button
                  onClick={() => {
                    this.setState({ showresponse: false });
                    this.setState({ linkednotings: false });
                    this.setState({ forwardtoggle: false });
                    this.setState({ acceptreject: false });
                    this.setState({ amountcommit: false });
                    this.setState({ userHistory: true });
                    this.setState({ sendChatSystem: false });
                  }}
                  style={{
                    backgroundColor: "white",
                    color: "#009999",
                    borderWidth: 0,
                    boxShadow: ".2VW .2VW .2VW #282c35",
                    fontFamily: "Times New Roman",
                    width: "10.5vw",
                    fontSize: "1vw",
                    paddingLeft: ".1vw",
                    paddingRight: ".1vw",
                    marginTop: "1vw",
                  }}
                >
                  User History
                </Button>
                {/* </td>
                  <td> */}
                <Button
                  onClick={() => {
                    this.setState({ showresponse: false });
                    this.setState({ linkednotings: false });
                    this.setState({ forwardtoggle: false });
                    this.setState({ acceptreject: false });
                    this.setState({ amountcommit: false });
                    this.setState({ userHistory: false });
                    this.setState({ sendChatSystem: true });
                  }}
                  style={{
                    backgroundColor: "white",
                    color: "#009999",
                    borderWidth: 0,
                    boxShadow: ".2VW .2VW .2VW #282c35",
                    fontFamily: "Times New Roman",

                    width: "10.5vw",
                    fontSize: "1vw",
                    paddingLeft: ".1vw",
                    paddingRight: ".1vw",
                    marginTop: "1vw",
                  }}
                >
                  Send Chat To User
                </Button>
                {/* </td>
                </tr> */}
              </div>
            </div>
            <div
            //style={{ backgroundColor: "white", width: "38", margin: "auto" }}
            >
              <div
                style={{
                  width: "40vw",
                  float: "right",
                  marginBottom: "1vw",
                  marginTop: "2vw",
                  marginLeft: "auto",
                  marginRight: "auto",
                  backgroundColor: "white",
                  boxShadow:
                    "lightgrey 0.4vw 0.4vw 0.5vw, rgba(0, 0, 0, 0.1) 0px 0px 0.1vw inset",
                  borderRadius: ".5vw",
                }}
              >
                {this.state.showresponse ? (
                  <div>
                    <div style={{ backgroundColor: "white" }}>
                      <div
                        style={{
                          width: "36vw",

                          justifyContent: "center",
                          textAlign: "center",
                          paddingBottom: ".3vw",
                          paddingTop: "1vw",
                          marginTop: "1vw",
                          marginBottom: "1.5vw",
                          marginLeft: "auto",
                          marginRight: "auto",

                          backgroundColor: "#6B9997",
                          boxShadow: ".3vw .3vw .3vw silver",
                          borderRadius: ".3vw",
                          paddingRight: "1vw",
                        }}
                      >
                        <h4 style={{ color: "white" }}> Accepted Responses</h4>
                      </div>
                      <div
                        style={{
                          width: "36vw",
                          paddingLeft: "2vw",
                          paddingRight: "2vw",
                          // display: "flex",
                          // justifyContent: "center",
                          paddingTop: "1vw",
                          paddingBottom: "1vw",
                          marginBottom: "4vw",
                          backgroundColor: "#eeeeee",
                          boxShadow: ".3vw .3vw .3vw silver",
                          borderRadius: ".3vw",
                          marginLeft: "auto",
                          marginRight: "auto",
                          //  border: ".2vw solid silver",
                        }}
                      >
                        <Fragment>
                          {Object.entries(this.obj).map(
                            ([question, answer]) => {
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
                                        // boxShadow: ".5vw .5vw .5vw  silver",
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
                                          <strong>
                                            {" "}
                                            {question.toUpperCase()}
                                          </strong>
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
                            }
                          )}
                        </Fragment>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                {this.state.linkednotings ? (
                  <div>
                    <div
                      style={{
                        width: "36vw",

                        justifyContent: "center",
                        textAlign: "center",
                        //backgroundImage: "linear-gradient(to right,#009999,#00e7e7",
                        backgroundColor: "#6B9997",
                        paddingTop: "1vw",
                        marginBottom: "1.5vw",
                        // backgroundColor: "#00a3a3",
                        marginTop: "1vw",
                        marginLeft: "auto",
                        marginRight: "auto",
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
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "36vw",

                        textAlign: "center",

                        paddingLeft: "2vw",
                        paddingRight: "2vw",

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
                        width: "36vw",

                        justifyContent: "center",
                        textAlign: "center",
                        //backgroundImage: "linear-gradient(to right,#009999,#00e7e7",
                        backgroundColor: "#6B9997",
                        paddingTop: "1vw",
                        marginBottom: "1.5vw",
                        marginTop: "1vw",
                        marginLeft: "auto",
                        // backgroundCol,or: "#00a3a3",
                        marginRight: "auto",
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
                        //float: "left",
                        //postion: "relative",
                        width: "36vw",

                        textAlign: "center",

                        paddingLeft: "2vw",
                        paddingRight: "2vw",
                        // display: "flex",
                        // justifyContent: "center",
                        paddingTop: "1vw",
                        paddingBottom: "1vw",
                        marginBottom: "4vw",
                        marginLeft: "auto",
                        marginRight: "auto",
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
                          style={{ borderRadius: ".5vw" }}
                        />{" "}
                        <Button
                          style={{
                            marginRight: "2vw",
                            backgroundColor: "#E0777D",
                            color: "white",
                            border: " 0.06vw solid #E0777D",
                            boxShadow: ".1vw .1vw .1vw .1vw lightgray",
                            //marginBottom: "1vw",
                            fontFamily: "Times New Roman",
                            fontSize: "1.1vw",
                            padding: ".3vw",
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
                    <div
                      style={{
                        width: "36vw",

                        justifyContent: "center",
                        textAlign: "center",
                        //backgroundImage: "linear-gradient(to right,#009999,#00e7e7",
                        backgroundColor: "#6B9997",
                        paddingTop: "1vw",
                        marginBottom: "1.5vw",
                        marginTop: "1vw",
                        marginLeft: "auto",
                        // backgroundCol,or: "#00a3a3",
                        marginRight: "auto",
                        boxShadow: ".3vw .3vw .5vw silver",
                        borderRadius: ".3vw",
                        color: "white",
                        paddingBottom: ".3vw",
                        paddingRight: "1vw",
                        // paddingBottom: "1vw",
                      }}
                    >
                      <h4 style={{ color: "white" }}>Accept/Reject Form</h4>
                    </div>
                    <div
                      style={{
                        //float: "left",
                        //postion: "relative",
                        width: "36vw",

                        textAlign: "center",

                        paddingLeft: "2vw",
                        paddingRight: "2vw",
                        // display: "flex",
                        // justifyContent: "center",
                        paddingTop: "1vw",
                        paddingBottom: "1vw",
                        marginBottom: "2vw",
                        marginLeft: "auto",
                        marginRight: "auto",
                        backgroundColor: "#EEEEEE",
                        boxShadow: ".3vw .3vw .5vw silver",
                        borderRadius: ".3vw",
                      }}
                    >
                      <h4>
                        Do you want to accept this form or Reject this response?
                      </h4>
                      <br />
                      <Button
                        onClick={this.onclickAcceptResponse}
                        style={{
                          //marginRight: "2vw",
                          backgroundColor: "#E0777D",
                          color: "white",
                          border: " 0.06vw solid #E0777D",
                          boxShadow: ".1vw .1vw .1vw .1vw lightgray",
                          //marginBottom: "1vw",
                          fontFamily: "Times New Roman",
                          fontSize: "1.1vw",
                          padding: ".75vw",
                        }}
                      >
                        Accept Response{" "}
                      </Button>
                      <Button
                        onClick={this.onClickRejectResponse}
                        style={{
                          marginRight: "2vw",
                          backgroundColor: "white",
                          color: "#E0777D",
                          border: " 0.06vw solid #E0777D",
                          boxShadow: ".1vw .1vw .1vw .1vw lightgray",
                          //marginBottom: "1vw",
                          fontFamily: "Times New Roman",
                          fontSize: "1.1vw",
                          padding: ".75vw",
                        }}
                      >
                        Reject Response{" "}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                {this.state.amountcommit ? (
                  <div>
                    <div
                      style={{
                        width: "36vw",

                        justifyContent: "center",
                        textAlign: "center",
                        //backgroundImage: "linear-gradient(to right,#009999,#00e7e7",
                        backgroundColor: "#6B9997",
                        paddingTop: "1vw",
                        marginBottom: "1.5vw",
                        marginTop: "1vw",
                        marginLeft: "auto",
                        // backgroundCol,or: "#00a3a3",
                        marginRight: "auto",
                        boxShadow: ".3vw .3vw .5vw silver",
                        borderRadius: ".3vw",
                        color: "white",
                        paddingBottom: ".3vw",
                        paddingRight: "1vw",
                        // paddingBottom: "1vw",
                      }}
                    >
                      <h4 style={{ color: "white" }}> Amount Recommended</h4>
                    </div>
                    <div
                      style={{
                        //float: "left",
                        //postion: "relative",
                        width: "36vw",

                        textAlign: "center",

                        paddingLeft: "2vw",
                        paddingRight: "2vw",
                        // display: "flex",
                        // justifyContent: "center",
                        paddingTop: "1vw",
                        paddingBottom: "1vw",
                        marginBottom: "4vw",
                        marginLeft: "auto",
                        marginRight: "auto",
                        backgroundColor: "#EEEEEE",
                        boxShadow: ".3vw .3vw .5vw silver",
                        borderRadius: ".3vw",
                      }}
                    >
                      <h4>Amount left in the budget that can be committed </h4>
                      {/* {this.state.availAmount} */}
                      <h3>Budget value</h3>
                      <h4>Enter the amount that needs to be recomended</h4>
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
                            backgroundColor: "#e0777d",
                            color: "white",
                            border: " 0.06vw solid #e0777d",
                            boxShadow: ".1vw .1vw .1vw .1vw lightgray",
                            //  marginBottom: "1vw",
                            fontFamily: "Times New Roman",
                          }}
                          onClick={this.onClickRecommend}
                        >
                          Commit Ammount
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
                {this.state.userHistory ? (
                  <div>
                    <div
                      style={{
                        width: "36vw",

                        justifyContent: "center",
                        textAlign: "center",
                        //backgroundImage: "linear-gradient(to right,#009999,#00e7e7",
                        backgroundColor: "#6B9997",
                        paddingTop: "1vw",
                        marginBottom: "1.5vw",
                        marginTop: "1vw",
                        marginLeft: "auto",
                        // backgroundCol,or: "#00a3a3",
                        marginRight: "auto",
                        boxShadow: ".3vw .3vw .5vw silver",
                        borderRadius: ".3vw",
                        color: "white",
                        paddingBottom: ".3vw",
                        paddingRight: "1vw",
                        // paddingBottom: "1vw",
                      }}
                    >
                      <h4 style={{ color: "white" }}>User History</h4>
                    </div>
                    <div>
                      {this.props.UserHistory.map((outerLoop) => {
                        return outerLoop.map((innerLoop) => {
                          return (
                            <div
                              key={innerLoop.acceptedResponseID}
                              style={{
                                width: "36vw",
                                textAlign: "center",
                                paddingLeft: "2vw",
                                paddingRight: "2vw",
                                paddingTop: "1vw",
                                paddingBottom: "1vw",
                                marginBottom: "1vw",
                                marginLeft: "auto",
                                marginRight: "auto",
                                backgroundColor: "#EEEEEE",
                                boxShadow: ".3vw .3vw .5vw silver",
                                borderRadius: ".3vw",
                              }}
                            >
                              <table
                                style={{
                                  marginLeft: "auto",
                                  marginRight: "auto",
                                }}
                              >
                                <tr>
                                  <td>Form Name:</td>
                                  <td>{innerLoop.formName}</td>
                                </tr>
                                <tr>
                                  <td>Committed Amount : </td>
                                  <td> {innerLoop.committedAmount}</td>
                                </tr>
                                <tr>
                                  <td>Recommended Amount :</td>
                                  <td>{innerLoop.recommendedAmount}</td>
                                </tr>
                              </table>

                              {/* <Link to={innerLoop.} */}
                            </div>
                          );
                        });
                      })}
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
                {this.state.sendChatSystem ? (
                  <div>
                    <div
                      style={{
                        width: "36vw",

                        justifyContent: "center",
                        textAlign: "center",
                        //backgroundImage: "linear-gradient(to right,#009999,#00e7e7",
                        backgroundColor: "#6B9997",
                        paddingTop: "1vw",
                        marginBottom: "1.5vw",
                        marginTop: "1vw",
                        marginLeft: "auto",
                        // backgroundCol,or: "#00a3a3",
                        marginRight: "auto",
                        boxShadow: ".3vw .3vw .5vw silver",
                        borderRadius: ".3vw",
                        color: "white",
                        paddingBottom: ".3vw",
                        paddingRight: "1vw",
                        // paddingBottom: "1vw",
                      }}
                    >
                      <h4 style={{ color: "white" }}>Chat with {this.name}</h4>
                    </div>
                    <div
                      style={{
                        width: "36vw",
                        textAlign: "center",
                        paddingLeft: "2vw",
                        paddingRight: "2vw",
                        paddingTop: "1vw",
                        paddingBottom: "1vw",
                        marginBottom: "1vw",

                        // marginLeft: "auto",
                        // marginRight: "auto",
                        backgroundColor: "#EEEEEE",
                        boxShadow: ".3vw .3vw .5vw silver",
                        borderRadius: ".3vw",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "white",
                          borderWidth: ".2vw .2vw 0 .2vw ",

                          borderStyle: "solid",
                          borderColor: "#0A5C5A",
                          borderRadius: ".7vw .7vw 0 0",
                          paddingBottom: "1.5vw",
                          overflowY: "scroll",

                          maxHeight: "18vw",
                        }}
                      >
                        <MessageList
                          messages={this.state.messages}
                          loggedInUser={this.props.username}
                        />
                      </div>
                      <div>
                        <SendMessage sendMessage={this.sendMessage} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div
              style={{
                width: "40vw",
                float: "left",
                marginBottom: "1vw",
                marginTop: "2vw",
                marginLeft: "auto",
                marginRight: "auto",
                backgroundColor: "white",
                boxShadow:
                  "lightgrey 0.4vw 0.4vw 0.5vw, rgba(0, 0, 0, 0.1) 0px 0px 0.1vw inset",
                borderRadius: ".5vw",
              }}
            >
              <div
                style={{
                  width: "36vw",

                  justifyContent: "center",
                  textAlign: "center",
                  //marginLeft: "5vw",
                  paddingBottom: ".3vw",
                  paddingTop: "1vw",
                  marginBottom: "1.5vw",
                  marginTop: "1vw",
                  marginLeft: "auto",
                  marginRight: "auto",
                  // backgroundColor: "rgba(0, 153, 153, 0.5)",
                  backgroundColor: "#6B9997",
                  boxShadow: ".3vw .3vw .5vw silver",
                  borderRadius: ".3vw",
                }}
              >
                <h4 style={{ color: "white" }}>Timeline</h4>
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
  UserHistory: state.FormStatus.UserHistory,
  Chats: state.Chats.Chats,
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
    getUserHistory,
    getMessage,
    postMessage,
  })(ViewResponseNoteGenerate)
);
