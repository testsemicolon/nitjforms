import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addAccepted } from "../../actions/AcceptedResponse";
import { Button } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import { Card } from "react-bootstrap";
import DisplayEditor from "./DisplayEditor";

export class ViewIndividualResponse extends Component {
  state = {
    content: "",
    toggleforward: false,
  };
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  onclick2 = (e) => {
    e.preventDefault();
    console.log(this.state.toggleforward);
    this.setState({ toggleforward: !this.state.toggleforward });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  onClick = () => {
    let value1 = this.props.match.params.value;
    let title1 = this.props.match.params.title;
    const quest = {};
    var comm = "";
    var comm1 = "";
    var comm2 = "";
    {
      Object.entries(this.props.Forms).map(([key, value]) => {
        if (key === value1) {
          Object.entries(value).map(([question, answer]) => {
            if (question !== "id") {
              quest[question] = answer;
            }
          });
        }
      });
    }
    console.log(this.state.content);
    quest["comment"] = this.state.content;
    this.props.addAccepted(quest, title1);
  };

  render() {
    let value1 = this.props.match.params.value;
    const { content } = this.state.content;
    return (
      <div>
        <div
          style={{
            float: "right",
            postion: "relative",
            width: "35vw",
            border: ".12vw solid lightgrey",
          }}
        >
          <Fragment>
            {Object.entries(this.props.Forms).map(([key, value]) => {
              if (key === value1)
                return (
                  <Fragment key={key}>
                    {Object.entries(value).map(([question, answer]) => {
                      return (
                        <Fragment key={question}>
                          <Card
                            style={{
                              borderRadius: ".95vw",
                              borderWidth: ".2vw",
                              borderColor: "lightgrey",
                              marginBottom: "2vw",
                              width: "40.37vw",
                              marginLeft: "auto",
                              marginRight: "auto",
                              height: "auto",
                            }}
                          >
                            <div>
                              <Card.Header
                                style={{
                                  backgroundColor: "#A2B8FB ",
                                  borderRadius: ".75vw .75vw 0 0",
                                  width: "40vw",
                                  height: "2.5vw",
                                  fontSize: "1vw",

                                  margin: 0,
                                  padding: "0.6vw",
                                }}
                              >
                                QUESTION
                              </Card.Header>
                              <Card.Body
                                style={{
                                  backgroundColor: "#EEF0F7 ",
                                  borderRadius: " 0 0 .75vw .75vw",
                                  width: "40vw",
                                  fontSize: "0.93vw",
                                  height: "auto",
                                  padding: "0.6vw",
                                  margin: 0,
                                }}
                              >
                                <Card.Title
                                  style={{
                                    fontSize: ".93vw",
                                    marginBottom: ".5vw",
                                  }}
                                >
                                  <strong> {question.toUpperCase()}</strong>
                                </Card.Title>
                                <Card.Text>
                                  <TextareaAutosize
                                    name={question}
                                    value={answer}
                                    style={{
                                      width: "37vw",
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
                    })}
                  </Fragment>
                );
            })}
          </Fragment>
        </div>
        <div
          style={{
            float: "left",
            postion: "relative",
            width: "35vw",
            border: ".12vw solid lightgrey",
          }}
        >
          <DisplayEditor />

          <Button onClick={this.onclick2}>Forward to</Button>

          {this.state.toggleforward === true ? (
            <div>
              <form>
                <input type="text" placeholder="Enter Username" />
                <Button>Forward</Button>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Forms: state.Forms.Forms,
  created_by1: state.Auth.user.username,
});

export default connect(mapStateToProps, { addAccepted })(
  ViewIndividualResponse
);
