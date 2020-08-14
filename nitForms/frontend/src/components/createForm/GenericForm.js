import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getFormView } from "../../actions/CreateForm";
import TextareaAutosize from "react-textarea-autosize";
import { Card, Button } from "react-bootstrap";
import { formSubmit } from "../../actions/SubmitPage";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FileUpload from "./FileUpload";
import { deleteSharedUsers } from "../../actions/common";
import Popup from "reactjs-popup";

export class GenericForm extends Component {
  state = {};
  created_by = "";
  toShareWith = "";
  arr = [];
  fname = "";
  id = null;
  flag = false;
  status = false;
  toggleshare = true;
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
        this.status = f1.activationStatus;
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
    console.log(this.status);
    return (
      <Fragment>
        {this.status === true || this.props.username === this.created_by ? (
          <Fragment>
            <div></div>
            <div
              style={{
                fontSize: "2rem",
                justifyContent: "center",
              }}
            >
              Title: {this.props.title}
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
                position: "relative",
                width: "50vw",
                justifyContent: "center",
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: "1vw",
                backgroundImage:
                  "linear-gradient(to right,rgba(0, 153, 153, 0.5),rgba(0, 231, 231, 0.5)",
                // backgroundColor: "#00a3a3",
                boxShadow: ".3vw .3vw .5vw grey",
                borderRadius: "1vw",
                paddingRight: "1vw",
              }}
            >
              <Link to={"/accepted/" + this.props.title}>
                <Button
                  style={{
                    color: "#009999",
                    // padding: "0.4vw",
                    borderRadius: ".3vw",
                    border: "0.06vw solid #009999",
                    marginBottom: "1.5vw",
                    marginRight: "1vw",
                    fontSize: "1vw",
                    // float: "right",
                    position: "relative",
                    backgroundColor: "white",
                    // boxShadow: ".1vw .1vw .1vw .1vw silver",
                  }}
                >
                  Accepted responses
                </Button>
              </Link>{" "}
              <Link to={`/response/${this.props.title}`}>
                <Button
                  style={{
                    fontSize: "1vw",
                    // float: "right",
                    // position: "relative",
                    background: "white",
                    color: "#009999",
                    marginBottom: "1.5vw",
                    // padding: "0.4vw",
                    marginRight: "1vw",
                    borderRadius: ".3vw",
                    borderColor: "#009999",
                    borderWidth: "0.06vw",
                    width: "10vw",
                    // boxShadow: ".1vw .1vw .1vw .1vw silver",
                  }}
                >
                  Responses
                </Button>
              </Link>
              {this.props.username == this.created_by ? (
                <Popup
                  contentStyle={{
                    width: "20%",
                    height: "65%",
                    border: ".1vw solid grey",
                  }}
                  modal
                  trigger={
                    <Button
                      style={{
                        fontSize: "1vw",
                        // float: "right",
                        // position: "relative",
                        backgroundColor: "white",
                        color: "#009999",

                        paddingBottom: ".01vw",
                        marginRight: "1vw",
                        borderRadius: ".3vw",
                        border: ".01vw solid #009999",
                        width: "10vw",
                        marginBottom: "1.5vw",
                        // boxShadow: ".1vw .1vw .1vw .1vw silver",
                      }}
                    >
                      <span class="material-icons">share</span>
                    </Button>
                  }
                  position="right center"
                >
                  {this.toggleshare === true ? (
                    <form>
                      <input
                        type="text"
                        name={this.toShareWith}
                        onChange={this.onChangeUser}
                      />
                      <Button onClick={this.onSubmitUser}>Submit</Button>
                    </form>
                  ) : (
                    "NO PERMISSION TO SHARE"
                  )}{" "}
                </Popup>
              ) : (
                "NO PERMISSION TO SHARE"
              )}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
                marginBottom: "4vw",
                backgroundColor: "#EEEEEE",
                boxShadow: ".3vw .3vw .5vw silver",
                borderRadius: "1vw",
                //  border: ".2vw solid silver",

                width: "50vw",
                marginLeft: "auto",

                marginRight: "auto",
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
                            borderWidth: 0,
                            // border: ".2vw solid #ed6a5a",
                            marginTop: "2vw",
                            width: "40.33vw",
                            color: "#009999",
                            marginLeft: "auto",
                            marginRight: "auto",
                            height: "auto",
                            boxShadow: ".5vw .5vw .5vw  silver",
                          }}
                        >
                          <div>
                            <Card.Header
                              style={{
                                backgroundColor: "white",
                                borderRadius: ".75vw .75vw 0 0",
                                width: "40vw",
                                height: "2.5vw",
                                fontSize: "1.2vw",
                                color: "#009999",
                                margin: 0,
                                padding: "0.6vw",
                              }}
                            >
                              <strong>{form.question}</strong>
                            </Card.Header>
                            <Card.Body
                              style={{
                                backgroundColor: "white",
                                borderRadius: " 0 0 .75vw .75vw",
                                width: "40vw",
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
                                  color: "black",
                                }}
                              >
                                {form.question}
                              </Card.Title> */}
                              <Card.Text>
                                <TextareaAutosize
                                  name={form.question}
                                  style={{
                                    width: "37vw",
                                    borderColor: "white",
                                  }}
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
                                {/* <TextareaAutosize
                                  name={form.question}
                                  style={{
                                    width: "37vw",
                                    borderColor: "white",
                                  }}
                                  onChange={this.onChange}
                                  placeholder="write in DD/MM/YYYY fromat"
                                  //still to apply length limit and numbers only restriction
                                ></TextareaAutosize> */}
                                <DatePicker
                                  // selected={this.state.startDate}
                                  name={form.question}
                                  onChange={this.onChange}
                                />
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
                                  style={{
                                    width: "37vw",
                                    borderColor: "white",
                                  }}
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
                      background: "#009999",
                      color: "#fff",
                      padding: ".4rem",
                      borderRadius: ".3rem",
                      borderColor: "black",
                      borderWidth: "0rem",
                      width: "12rem",
                      marginBottom: "2vw",
                      boxShadow: ".1vw .1vw .1vw .1vw silver",
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
        ) : (
          <div style={{ textAlign: "center" }}>
            <h3>
              Owner has stopped accepting responses.
              <br />
              Contact
              <h2 style={{ color: "red" }}>
                {this.created_by}
                <br />
                mail id{" "}
              </h2>{" "}
              for more Details
            </h3>
          </div>
        )}
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
