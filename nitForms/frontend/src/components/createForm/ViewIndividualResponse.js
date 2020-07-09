import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addAccepted } from "../../actions/AcceptedResponse";
import { Button } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import { Card } from "react-bootstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";
import ReactHtmlParser from "react-html-parser";

export class ViewIndividualResponse extends Component {
  state = {
    content: "",
  };
  constructor(props) {
    super(props);
    console.log(this.props);
  }

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
                          marginTop: "2vw",
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
        <div style={{ alignItem: "center", textAlign: "center" }}>
          <br />
          <Button
            style={{
              backgroundColor: "green",
              width: "10vw",
              fontSize: ".95vw",
            }}
            onClick={this.onClick}
          >
            Accept Response
          </Button>
          {"  "}{" "}
          <Button variant="danger" style={{ width: "10vw", fontSize: ".95vw" }}>
            Reject Response
          </Button>
          <br />
          <br />
          <br />
          <div
            style={{
              position: "relative",
              marginLeft: "18vw",
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
      </Fragment>
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
