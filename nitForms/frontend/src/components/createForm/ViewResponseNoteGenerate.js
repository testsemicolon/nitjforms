import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import { Card } from "react-bootstrap";
import DisplayEditor from "./DisplayEditor";

import NotingIndivdiual from "./NotingIndivdiual";

export class ViewResponseNoteGenerate extends Component {
  state = {
    content: "",
    toggleforward: false,
  };
  constructor(props) {
    super(props);
  }
  onclick2 = (e) => {
    e.preventDefault();

    this.setState({ toggleforward: !this.state.toggleforward });
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
      <div>
        <div
          style={{
            position: "relative",
            width: "36vw",
            float: "right",
            marginBottom: "1vw",
          }}
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
                "linear-gradient(rgba(81, 214, 255, .5),rgba(141, 158, 198, 0.5))",
              boxShadow: ".3vw .3vw .5vw grey",
              borderRadius: ".3vw",
              paddingRight: "1vw",
            }}
          >
            <h4 style={{ color: "black" }}> Accepted Responses</h4>
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
              {Object.entries(this.props.AcceptedResponse).map(
                ([key, value]) => {
                  if (key === value1)
                    return (
                      <Fragment key={key}>
                        {Object.entries(value).map(([question, answer]) => {
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
                        })}
                      </Fragment>
                    );
                }
              )}
            </Fragment>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            width: "34vw",
            float: "left",
            marginBottom: "1vw",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "34vw",
              float: "left",
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
            <NotingIndivdiual title={this.props.match.params.title} />
            <br />

            <Button
              style={{
                marginBottom: "2vw",
                marginRight: "2vw",
                backgroundColor: "white",
                color: "#009999",
                border: " 0.06vw solid #009999",
                boxShadow: ".1vw .1vw .1vw .1vw silver",
              }}
              onClick={this.onclick2}
            >
              Forward to
            </Button>
            {this.state.toggleforward === true ? (
              <div style={{ textAlign: "center" }}>
                <form>
                  <input type="text" placeholder="Enter Username" />
                  <Button
                    style={{
                      marginRight: "2vw",
                      backgroundColor: "white",
                      color: "#009999",
                      border: " 0.06vw solid #009999",
                      boxShadow: ".1vw .1vw .1vw .1vw silver",
                    }}
                  >
                    Forward
                  </Button>
                </form>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  AcceptedResponse: state.AcceptedResponse.AcceptedResponse,
  created_by1: state.Auth.user.username,
  FormName: state.FormName.FormName,
});

export default connect(mapStateToProps)(ViewResponseNoteGenerate);
