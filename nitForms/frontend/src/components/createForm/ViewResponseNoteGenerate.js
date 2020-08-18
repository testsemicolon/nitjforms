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
import { putAccepted } from "../../actions/AcceptedResponse";
import { CombinedView } from "./CombinedView";
import { withRouter } from "react-router-dom";
import store from "../../store";
import { createMessage } from "../../actions/Messages";

export class ViewResponseNoteGenerate extends Component {
  state = {
    obj1: {},
    content: "",
    toggleforward: false,
    forwardTo: "",
  };
  username = "";
  description = "";
  obj = {};
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  componentDidMount() {
    {
      Object.entries(this.props.AcceptedResponse).map(([key, value]) => {
        if (key === this.props.match.params.value) {
          this.obj = value;
          this.setState({ obj1: value });
        }
      });
    }
    this.props.FormName.map((a) => {
      if (a.formName === this.props.match.params.title) {
        this.username = a.username;
        this.description = a.description;
      }
    });
  }
  onclick2 = (e) => {
    e.preventDefault();

    this.setState({ toggleforward: !this.state.toggleforward });
  };

  onClick3 = () => {
    var quest = {};
    quest = this.obj;
    var arr = quest["forwardTo"];
    const name = { [this.props.created_by1]: this.state.forwardTo };
    arr.push(name);
    quest["forwardTo"] = arr;
    console.log(quest);
    var notify = [];
    notify = quest["notification"];
    var notifyCmnt = `${this.props.created_by1} FORWARD TO ${this.state.forwardTo}`;
    notify.push(notifyCmnt);
    quest["notification"] = notify;
    this.props.putAccepted(
      this.props.match.params.id,
      this.props.match.params.title,
      quest
    );
    store.dispatch(
      createMessage({
        forwardMessage: `${this.props.created_by1} FORWARD NOTING TO ${this.state.forwardTo}`,
      })
    );

    this.props.history.push(this.props.match.url);
    console.log(this.props.match.url);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
  //   console.log(this.state.content);
  //   quest["comment"] = this.state.content;
  //   this.props.addAccepted(quest, title1);
  // };

  render() {
    let value1 = this.props.match.params.value;
    const { content } = this.state.content;

    return (
      <Fragment>
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
          <Tabs
            style={{
              margin: "1vw",
            }}
            defaultActiveKey="Accepted Responses"
            id="uncontrolled-tab-example"
          >
            <Tab
              eventKey="Accepted Responses"
              style={{ color: "blue" }}
              title="Accepted Responses"
            >
              <div
                style={{
                  position: "relative",
                  width: "36vw",
                  float: "right",
                  justifyContent: "center",
                  textAlign: "center",

                  paddingTop: "1vw",
                  marginBottom: "1.5vw",
                  // backgroundColor: "#009999",
                  // backgroundImage: "linear-gradient(to right,#009999,#00e7e7",
                  // backgroundImage:
                  //   "linear-gradient(to right,rgba(0, 153, 153, 0.5),rgba(0, 231, 231, 0.5)",
                  backgroundImage:
                    "linear-gradient(to right,rgba(0, 153, 153, 0.5),rgba(0, 231, 231, 0.5)",
                  boxShadow: ".3vw .3vw .5vw grey",
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
                  boxShadow: ".3vw .3vw .5vw grey",
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
            </Tab>
            <Tab
              eventKey="Linked Notings"
              style={{ color: "blue" }}
              title="Linked Notings"
            >
              <div>
                <div
                  style={{
                    width: "34vw",

                    justifyContent: "center",
                    textAlign: "center",
                    //backgroundImage: "linear-gradient(to right,#009999,#00e7e7",
                    backgroundImage:
                      "linear-gradient(to right,rgba(0, 153, 153, 0.5),rgba(0, 231, 231, 0.5)",
                    paddingTop: "1vw",
                    marginBottom: "1.5vw",
                    // backgroundColor: "#00a3a3",
                    boxShadow: ".3vw .3vw .5vw grey",
                    borderRadius: ".3vw",
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
                    boxShadow: ".3vw .3vw .5vw grey",
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
            </Tab>
            <Tab
              eventKey="Forward To"
              style={{ color: "blue" }}
              title="Forward To"
            >
              <div>
                <Button
                  style={{
                    marginBottom: "2vw",
                    marginRight: "2vw",
                    backgroundColor: "white",
                    color: "#009999",
                    border: " 0.06vw solid #009999",
                    boxShadow: ".1vw .1vw .1vw .1vw silver",
                  }}
                >
                  Forward to
                </Button>

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
                      boxShadow: ".1vw .1vw .1vw .1vw silver",
                      marginBottom: "1vw",
                    }}
                    onClick={this.onClick3}
                  >
                    Forward
                  </Button>
                </div>

                {/* 
            <Link to={"/combine/" + this.props.match.params.id}>
              <Button
                style={{
                  marginBottom: "2vw",
                  marginRight: "2vw",
                  backgroundColor: "white",
                  color: "#009999",
                  border: " 0.06vw solid #009999",
                  boxShadow: ".1vw .1vw .1vw .1vw silver",
                }}
              >
                View timeline
              </Button>
            </Link> */}
              </div>
            </Tab>
          </Tabs>
        </div>
        <div
          style={{
            position: "relative",
            width: "30vw",
            float: "left",
            marginBottom: "1vw",
            marginTop: "4vw",
            marginLeft: "1vw",
            marginRight: "7vw",
          }}
        >
          <CombinedView
            id={this.props.match.params.id}
            AcceptedResponse={this.props.AcceptedResponse}
          />
        </div>
        <div>
          {console.log(
            this.username,
            this.description,
            this.props.match.params.title
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  AcceptedResponse: state.AcceptedResponse.AcceptedResponse,
  created_by1: state.Auth.user.username,
  FormName: state.FormName.FormName,
});

export default withRouter(
  connect(mapStateToProps, { putAccepted })(ViewResponseNoteGenerate)
);
