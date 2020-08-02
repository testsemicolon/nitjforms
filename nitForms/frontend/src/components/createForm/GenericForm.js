import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getFormView } from "../../actions/CreateForm";
import TextareaAutosize from "react-textarea-autosize";
import { Card, Button } from "react-bootstrap";
import { formSubmit } from "../../actions/SubmitPage";
import GenericResponses from "./GenericResponses";
import { Link } from "react-router-dom";
import { FormName } from "./FormName";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { tokenConfig } from "../../actions/Auth";
import axios from "axios";
import FileUpload from "./FileUpload";

export class GenericForm extends Component {
  state = {};

  componentDidMount() {
    this.props.getFormView(this.props.title);
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChangeFile = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };
  fileNameHandler = (obj) => {
    console.log(obj);
    // this.setState({ [e.target.name]: obj });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const quest = this.state;
    function renameKey(obj, old_key, new_key) {
      if (old_key !== new_key) {
        Object.defineProperty(
          obj,
          new_key,

          Object.getOwnPropertyDescriptor(obj, old_key)
        );
        delete obj[old_key];
      }
    }

    Object.keys(quest).map((obj) =>
      renameKey(quest, obj, obj.replace(/[ ]/g, "_"))
    );
    console.log(quest);
    this.props.formSubmit(quest, this.props.title);
  };

  render() {
    return (
      <Fragment>
        <div
          style={{
            fontSize: "2rem",
            justifyContent: "center",
          }}
        >
          Title: {this.props.title}
          <Link to={`/response/${this.props.title}`}>
            <Button
              style={{
                fontSize: "1vw",
                float: "right",
                position: "relative",
                background: "#3f51b5",
                color: "#fff",
                padding: "0.4vw",
                borderRadius: ".3vw",
                borderColor: "black",
                borderWidth: "0.08vw",
                width: "12vw",
              }}
            >
              Responses
            </Button>
          </Link>
          <Button
            style={{
              backgroundColor: "transparent",
              float: "right",
              position: "relative",
              borderWidth: 0,
            }}
          >
            {" "}
          </Button>
          <Link to={"/accepted/" + this.props.title}>
            <Button
              style={{
                background: "#3f51b5",
                color: "#fff",
                padding: "0.4vw",
                borderRadius: ".3vw",
                borderColor: "black",
                borderWidth: "0.08vw",
                width: "12vw",
                fontSize: "1vw",
                float: "right",
                position: "relative",
              }}
            >
              Accepted responses
            </Button>{" "}
          </Link>
          <div
            style={{
              fontSize: "1rem",
              justifyContent: "center",
              color: "grey",
            }}
          >
            <hr />
          </div>
          <h5>Description: {this.props.description}</h5>
          <hr />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <form onSubmit={this.onSubmit}>
            {this.props.Forms.map((form) => {
              if (form.inputType === "Short Answer") {
                return (
                  <div
                    key={form.id}
                    style={{
                      borderRadius: "5rem",
                      borderWidth: ".5rem",
                      borderColor: "grey",
                      marginTop: "2rem",
                    }}
                  >
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
                            {form.question}
                          </Card.Title>
                          <Card.Text>
                            <TextareaAutosize
                              name={form.question}
                              style={{ width: "37vw", borderColor: "white" }}
                              onChange={this.onChange}
                              placeholder="Write your answer here..."
                            ></TextareaAutosize>
                          </Card.Text>
                        </Card.Body>
                      </div>
                    </Card>
                  </div>
                );
              }
              if (form.inputType == "File Upload") {
                console.log("adsfasd");
                return (
                  <div
                    key={form.id}
                    style={{
                      borderRadius: "5rem",
                      borderWidth: ".5rem",
                      borderColor: "grey",
                      marginTop: "2rem",
                    }}
                  >
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
                            {form.question}
                          </Card.Title>
                          <Card.Text>
                            <FileUpload
                              name={form.question}
                              fileNameHandler={this.fileNameHandler}
                            />
                          </Card.Text>
                        </Card.Body>
                      </div>
                    </Card>
                  </div>
                );
              }
              if (form.inputType == "Date") {
                return (
                  <div
                    key={form.id}
                    style={{
                      borderRadius: "5rem",
                      borderWidth: ".5rem",
                      borderColor: "grey",
                      marginTop: "2rem",
                    }}
                  >
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
                            {form.question}
                          </Card.Title>
                          <Card.Text>
                            <TextareaAutosize
                              name={form.question}
                              style={{ width: "37vw", borderColor: "white" }}
                              onChange={this.onChange}
                              placeholder="write in DD/MM/YYYY fromat"
                              //still to apply length limit and numbers only restriction
                            ></TextareaAutosize>
                          </Card.Text>
                        </Card.Body>
                      </div>
                    </Card>
                  </div>
                );
              }
              if (form.inputType == "Paragraph") {
                return (
                  <div
                    key={form.id}
                    style={{
                      borderRadius: "5rem",
                      borderWidth: ".5rem",
                      borderColor: "grey",
                      marginTop: "2rem",
                    }}
                  >
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
                            {form.question}
                          </Card.Title>
                          <Card.Text>
                            <TextareaAutosize
                              name={form.question}
                              style={{ width: "37vw", borderColor: "white" }}
                              onChange={this.onChange}
                              placeholder="Write your answer paragraph.."
                            ></TextareaAutosize>
                          </Card.Text>
                        </Card.Body>
                      </div>
                    </Card>
                  </div>
                );
              }
            })}
            <div style={{ alignItem: "center", textAlign: "center" }}>
              <Button
                type="submit"
                style={{
                  marginTop: "1.5rem",
                  background: "#3f51b5",
                  color: "#fff",
                  padding: ".4rem",
                  borderRadius: ".3rem",
                  borderColor: "black",
                  borderWidth: "0rem",
                  width: "12rem",

                  // marginLeft: "auto",
                  // marginRight: "auto",
                }}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  Forms: state.Forms.Forms,
});

export default connect(mapStateToProps, { formSubmit, getFormView })(
  GenericForm
);
