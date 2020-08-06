import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getFormView } from "../../actions/CreateForm";
import TextareaAutosize from "react-textarea-autosize";
import { Card, Button } from "react-bootstrap";
import { formSubmit } from "../../actions/SubmitPage";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import FileUpload from "./FileUpload";
import { deleteSharedUsers } from "../../actions/common";

export class GenericForm extends Component {
  state = {};
  created_by = "";
  toShareWith = "";
  arr = [];
  fname = "";
  id = null;
  flag = false;
  componentDidMount() {
    this.props.getFormView(this.props.title);
    this.props.SharedUsers.map((a) => {
      if (a.formName === this.props.title) {
        this.id = a.id;
        this.fname = this.props.title;
        a.userName.map((a1) => {
          this.arr.push(a1);
          if (a1 === this.props.username) {
            this.flag = true;
            console.log("sahi hai");
          }
        });
      }
    });

    this.props.FormName.map((f1) => {
      if (f1.title === this.props.title) {
        this.created_by = f1.created_by;
      }
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  fileNameHandler = (obj1, obj2) => {
    this.setState({ [obj2]: obj1 });
  };

  onChangeUser = (e) => {
    console.log(e.target.value);
    this.toShareWith = e.target.value;
  };

  onSubmitUser = (e) => {
    e.preventDefault();

    var arr1 = [];
    this.arr.push(this.toShareWith);
    this.arr.map((ar) => arr1.push(ar));
    const quest = {};
    console.log(arr1);
    quest["formName"] = this.fname;
    quest["userName"] = arr1;
    console.log(quest);
    this.props.deleteSharedUsers(this.id, quest);
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
        {this.props.username == this.created_by ? (
          <div>
            <form>
              <input
                type="text"
                name={this.toShareWith}
                onChange={this.onChangeUser}
              />
              <button onClick={this.onSubmitUser}>Submit</button>
            </form>
          </div>
        ) : (
          "hello"
        )}
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
  SharedUsers: state.SharedUsers.SharedUsers,
  username: state.Auth.user.username,
  FormName: state.FormName.FormName,
});

export default connect(mapStateToProps, {
  formSubmit,
  getFormView,
  deleteSharedUsers,
})(GenericForm);
