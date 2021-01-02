import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addAccepted, putResponse } from "../../actions/AcceptedResponse";
import { Button } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import { Card } from "react-bootstrap";
import { responseReject } from "../../actions/SubmitPage";
import { sendMail } from "../../actions/Email";
import { postNotification } from "../../actions/Notification";
import { putFormStatus } from "../../actions/FormStatus";

export class ViewIndividualResponse extends Component {
  state = {
    content: "",
  };
  responseID = "";
  responseObject = {};
  responseStatusCheckFlag = true;
  indexResponse = {};
  constructor(props) {
    super(props);
    let responseID = "";
    console.log(this.props);
    {
      Object.entries(this.props.Forms).map(([key, value]) => {
        if (key === this.props.match.params.value) {
          this.responseObject = value;
          Object.entries(value).map(([question, answer]) => {
            if (question === "responseStatus") {
              this.responseStatusCheckFlag = answer;
            }
            if (question === "responseID") {
              console.log("responseID", answer);
              this.responseID = answer;
              responseID = answer;
            }
          });
        }
      });
    }
    this.props.FormStatus.map((form) => {
      if (form.responseID === responseID) {
        this.indexResponse = form;
      }
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = () => {
    this.responseStatusCheckFlag = true;
    var reciever = "";
    var responseObject = this.responseObject;
    let id1 = "";
    let value1 = this.props.match.params.value;
    let title1 = this.props.match.params.title;
    var acceptedResponseID = "";
    const quest = {};
    const questMail = {};
    var recieverMail = "";
    {
      Object.entries(this.props.Forms).map(([key, value]) => {
        if (key === value1) {
          Object.entries(value).map(([question, answer]) => {
            console.log(question);
            if (question === "id") {
              id1 = answer;
            }
            if (question === "responseID") {
              acceptedResponseID = answer;
            }
            if (question === "userName") {
              reciever = answer;
            }
            if (question === "userMail") {
              recieverMail = answer;
            }
            if (question !== "id") {
              quest[question] = answer;
            }
          });
        }
      });
    }
    responseObject["responseStatus"] = this.responseStatusCheckFlag;
    console.log(responseObject);
    this.props.putResponse(id1, title1, responseObject);
    questMail["senderEmail"] = this.props.email;
    questMail["recieverEmail"] = recieverMail;
    questMail["content"] = "Your response has been accepted.";
    // console.log(this.state.content);
    // quest["commentAccepted"] = this.state.content;

    quest["acceptedResponseID"] = acceptedResponseID;
    quest["commentByAuthor"] = this.state.content;

    this.props.addAccepted(quest, title1);

    this.props.sendMail(questMail);
    const questNotify = {};
    var notifyCmnt = "Your response has been accepted.";
    questNotify["sender"] = `${this.props.created_by1}`;
    questNotify["reciever"] = `${reciever}`;
    questNotify["notify"] = notifyCmnt;
    this.props.postNotification(questNotify);
    var indexResponse = this.indexResponse;
    indexResponse["commentByAuthor"] = this.state.content;
    indexResponse["responseAcceptedStatus"] = "Accepted";
    this.props.putFormStatus(indexResponse, indexResponse.id);
  };

  onClickReject = () => {
    var responseObject = this.responseObject;
    this.responseStatusCheckFlag = true;
    let value1 = this.props.match.params.value;
    let title1 = this.props.match.params.title;
    var id = "";
    var reciever = "";
    const quest = {};
    {
      Object.entries(this.props.Forms).map(([key, value]) => {
        if (key === value1) {
          Object.entries(value).map(([question, answer]) => {
            if (question === "userName") {
              reciever = answer;
            }

            if (question !== "id") {
              quest[question] = answer;
            } else if (question === "id") {
              id = answer;
            }
          });
        }
      });
    }
    quest["commentRejected"] = this.state.content;
    console.log(quest);
    this.props.responseReject(quest, title1, id);
    const questNotify = {};
    var notifyCmnt = "Your response has been rejected.";
    questNotify["sender"] = `${this.props.created_by1}`;
    questNotify["reciever"] = `${reciever}`;
    questNotify["notify"] = notifyCmnt;
    this.props.postNotification(questNotify);
    responseObject["responseStatus"] = this.responseStatusCheckFlag;
    this.props.putResponse(id, title1, responseObject);
    var indexResponse = this.indexResponse;
    indexResponse["commentByAuthor"] = this.state.content;
    indexResponse["responseAcceptedStatus"] = "Rejected";
    this.props.putFormStatus(indexResponse, indexResponse.id);
  };

  render() {
    let value1 = this.props.match.params.value;
    const { content } = this.state.content;
    return (
      <Fragment>
        {Object.entries(this.props.Forms).map(([key, value]) => {
          if (key === value1)
            return (
              <Fragment key={key}>
                {Object.entries(value).map(([question, answer]) => {
                  if (
                    (question !== "responseTime") &
                    (question !== "responseStatus") &
                    (question !== "commentRejected") &
                    (question !== "userName")
                  ) {
                    return (
                      <Fragment key={question}>
                        <Card
                          style={{
                            borderRadius: ".95vw",
                            borderWidth: 0,
                            // border: ".2vw solid #ed6a5a",
                            marginBottom: "2vw",
                            width: "40vw",
                            color: "#009999",
                            marginLeft: "auto",
                            marginRight: "auto",
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
                              <Card.Text>
                                <TextareaAutosize
                                  name={question}
                                  value={answer}
                                  style={{
                                    width: "33vw",
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
            );
        })}
        {this.responseStatusCheckFlag ? (
          <div>
            <h1>Response has been handled</h1>
          </div>
        ) : (
          <div style={{ alignItem: "center", textAlign: "center" }}>
            <br />
            <Button
              style={{
                backgroundColor: "green",
                width: "10vw",
                fontSize: ".95vw",
                fontFamily: "Times New Roman",
              }}
              onClick={this.onClick}
            >
              Accept Response
            </Button>
            {"  "}{" "}
            <Button
              variant="danger"
              style={{
                width: "10vw",
                fontSize: ".95vw",
                fontFamily: "Times New Roman",
              }}
              onClick={this.onClickReject}
            >
              Reject Response
            </Button>
            <br />
            <br />
            <br />
            <div
              style={{
                position: "relative",
                marginLeft: "auto",
                marginRight: "auto",
                width: "35vw",
              }}
            >
              <h3>Comment</h3>

              <TextareaAutosize
                name="content"
                value={content}
                style={{
                  width: "37vw",
                  borderColor: "white",
                  fontSize: "1vw",
                }}
                onChange={this.onChange}
              >
                Enter comment
              </TextareaAutosize>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  Forms: state.Forms.Forms,
  created_by1: state.Auth.user.username,
  email: state.Auth.user.email,
  FormStatus: state.FormStatus.FormStatus,
});

export default connect(mapStateToProps, {
  addAccepted,
  responseReject,
  sendMail,
  postNotification,
  putResponse,
  putFormStatus,
})(ViewIndividualResponse);
