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
import { withRouter } from "react-router-dom";
import styled from "@emotion/styled";

import {
  putSharedUser,
  postSharedUser,
  deleteSharedUsers,
  getSharedUser,
} from "../../actions/common";
import { postFormStatus, putFormStatus } from "../../actions/FormStatus";
import Popup from "reactjs-popup";
import ShareForm from "./ShareForm";
import Select from "react-dropdown-select";

const options = [
  {
    id: 1,
    name: "Create Form",
    username: "Create Form",
  },
  {
    id: 2,
    name: "Choose/Create Noting",
    username: "Choose/Create Noting",
  },
];

export class GenericForm extends Component {
  state = {};
  created_by = "";
  toShareWith = "";
  arr = [];
  fname = this.props.title;
  id = null;
  flag = false;
  status = false;
  toggleshare = true;
  constructor(props) {
    super(props);
    this.state = {
      multi: true,
      selectValues: [],
      handle: true,
      addPlaceholder: "+ click to add",
      labelField: "username",
      valueField: "name",
      color: "#0074D9",
      keepSelectedInList: false,
      closeOnSelect: true,
    };
  }

  setValues = (selectValues) => this.setState({ selectValues });

  componentDidMount() {
    this.props.getSharedUser();
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

  onChange1 = (name) => {
    console.log(name);
  };
  fileNameHandler = (obj1, obj2) => {
    this.setState({ [obj2]: obj1 });
  };

  onChangeUser = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.toShareWith = e.target.value;
  };

  onSubmitUser = () => {
    console.log("adsas");
    var arr1 = [];
    this.arr.push(this.toShareWith);
    this.arr.map((ar) => arr1.push(ar));
    const quest = {};
    console.log(arr1);
    quest["formName"] = this.fname;
    quest["userName"] = arr1;
    console.log(quest);
    console.log(this.id);
    if (this.id === null) {
      console.log("post");
      this.props.postSharedUser(quest);
    } else {
      console.log("put");
      this.props.putSharedUser(this.id, quest);
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    var flag = false;
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
    quest["userName"] = this.props.username;
    var title = this.props.title;
    var mail = this.props.email;
    console.log(mail);
    quest["userMail"] = mail;
    this.props.formSubmit(quest, title);
    this.props.FormStatus.map((a) => {
      if (a.userName === this.props.username) {
        var arr = a["formName"];
        arr.push(this.props.title);
        a["formName"] = arr;
        a["userName"] = this.props.username;
        this.props.putFormStatus(a, a.id);
        flag = true;
        console.log("put");
      }
    });
    if (flag === false) {
      console.log("post");
      var arr = [];
      arr.push(this.props.title);
      const a = {};
      a["formName"] = arr;
      a["userName"] = this.props.username;
      this.props.postFormStatus(a);
    }
    this.props.history.push(`/${this.props.title}`);
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
            {this.flag === true || this.props.username === this.created_by ? (
              <div
                style={{
                  position: "relative",
                  width: "50vw",
                  justifyContent: "center",
                  textAlign: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingTop: "1vw",
                  //backgroundImage:
                  //"linear-gradient(to right,rgba(0, 153, 153, 0.5),rgba(0, 231, 231, 0.5)",
                  backgroundColor: "#e0777d",
                  boxShadow: ".3vw .3vw .3vw silver",
                  borderRadius: "1vw",
                  paddingRight: "1vw",
                }}
              >
                <Link to={"/accepted/" + this.props.title}>
                  <Button
                    style={{
                      color: "#e0777d",
                      // padding: "0.4vw",
                      borderRadius: ".3vw",
                      //border: "0.06vw solid #e0777d",
                      borderWidth: 0,
                      marginBottom: "1.5vw",
                      marginRight: "1vw",
                      fontSize: "1vw",
                      // float: "right",
                      position: "relative",
                      backgroundColor: "white",
                      boxShadow: ".1vw .1vw .1vw lightgray",
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
                      color: "#e0777d",
                      marginBottom: "1.5vw",
                      // padding: "0.4vw",
                      marginRight: "1vw",
                      borderRadius: ".3vw",
                      //borderColor: "#e0777d",
                      borderWidth: 0,
                      width: "10vw",
                      boxShadow: ".1vw .1vw .1vw lightgray",
                      fontFamily: "Times New Roman",
                      // boxShadow: ".1vw .1vw .1vw .1vw silver",
                    }}
                  >
                    Responses
                  </Button>
                </Link>
                {this.props.username === this.created_by ? (
                  <Popup
                    contentStyle={{
                      width: "20%",
                      height: "%",
                      border: ".1vw solid grey",
                      borderRadius: ".5vw",
                    }}
                    modal
                    trigger={
                      <Button
                        style={{
                          fontSize: "1vw",
                          // float: "right",
                          // position: "relative",
                          backgroundColor: "white",
                          color: "#e0777d",

                          paddingBottom: ".01vw",
                          marginRight: "1vw",
                          borderRadius: ".3vw",
                          //border: "0 solid #e0777d",
                          borderWidth: 0,
                          width: "10vw",
                          marginBottom: "1.5vw",
                          boxShadow: ".1vw .1vw .1vw lightgray",
                          fontFamily: "Times New Roman",
                        }}
                      >
                        <span class="material-icons">share</span>
                      </Button>
                    }
                    position="right center"
                  >
                    {this.toggleshare === true ? (
                      <div style={{ borderRadius: ".3vw" }}>
                        <h4>Share with</h4>

                        <form>
                          <input
                            type="text"
                            name={this.toShareWith}
                            onChange={this.onChangeUser}
                            placeholder="Add people"
                            style={{
                              borderRadius: ".5vw",
                              border: ".05vw solid grey",
                              padding: ".4vw",
                            }}
                            // values={[
                            //   options.find(
                            //     (opt) => opt.username === "Create Form"
                            //   ),
                            // ]}
                          />
                          <Button
                            style={{
                              background: "#e0777d",
                              color: "#fff",
                              paddingTop: ".2vw",
                              paddingBottom: ".1vw",
                              marginLeft: ".6vw",
                              borderRadius: ".3rem",
                              borderColor: "black",
                              borderWidth: "0rem",
                              boxShadow: ".3vw .3vw .3vw lightgray",
                              fontFamily: "Times New Roman",
                            }}
                            onClick={this.onSubmitUser}
                          >
                            <h5>Done</h5>
                          </Button>
                        </form>
                        {/* <ShareForm /> */}
                        {/* <StyledSelect
                          placeholder="Select steps"
                          multi={this.state.multi}
                          labelField={this.state.labelField}
                          valueField={this.state.valueField}
                          options={options}
                          dropdownGap={5}
                          name={this.toShareWith}
                          onChange={this.onChangeUser}
                          keepSelectedInList={this.state.keepSelectedInList}
                          // onChange={(values) => this.setValues(values)}
                        /> */}
                      </div>
                    ) : (
                      "NO PERMISSION TO SHARE"
                    )}{" "}
                  </Popup>
                ) : (
                  "NO PERMISSION TO SHARE"
                )}
              </div>
            ) : (
              <Fragment />
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
                marginBottom: "4vw",
                backgroundColor: "#EEEEEE",
                boxShadow: ".3vw .3vw .3vw silver",
                borderRadius: "1vw",
                border: "0 solid silver",

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
                            boxShadow: ".3vw .3vw .3vw  silver",
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
                            borderWidth: 0,
                            // border: ".2vw solid #ed6a5a",
                            marginTop: "2vw",
                            width: "40.33vw",
                            color: "#009999",
                            marginLeft: "auto",
                            marginRight: "auto",
                            height: "auto",
                            boxShadow: ".3vw .3vw .3vw  silver",
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
                            borderWidth: 0,
                            // border: ".2vw solid #ed6a5a",
                            marginTop: "2vw",
                            width: "40.33vw",
                            color: "#009999",
                            marginLeft: "auto",
                            marginRight: "auto",
                            height: "auto",
                            boxShadow: ".3vw .3vw .3vw  silver",
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
                                  onSelect={this.onChange1(form.question)}
                                  style={{ borderWidth: 0 }}
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
                            borderWidth: 0,
                            // border: ".2vw solid #ed6a5a",
                            marginTop: "2vw",
                            width: "40.33vw",
                            color: "#009999",
                            marginLeft: "auto",
                            marginRight: "auto",
                            height: "auto",
                            boxShadow: ".3vw .3vw .3vw  silver",
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
                      background: "#e0777d",
                      color: "#fff",
                      padding: ".4rem",
                      borderRadius: ".3rem",
                      borderColor: "black",
                      borderWidth: "0rem",
                      width: "12rem",
                      marginBottom: "2vw",
                      boxShadow: ".3vw .3vw .3vw lightgray",
                      fontFamily: "Times New Roman",
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
const StyledSelect = styled(Select)`
  ${({ dropdownRenderer }) =>
    dropdownRenderer &&
    `.react-dropdown-select-dropdown {
			overflow: initial;
		}
	`}
`;

const mapStateToProps = (state) => ({
  Forms: state.Forms.Forms,
  SharedUsers: state.SharedUsers.SharedUsers,
  username: state.Auth.user.username,
  FormName: state.FormName.FormName,
  FormStatus: state.FormStatus.FormStatus,
  email: state.Auth.user.email,
});

export default withRouter(
  connect(mapStateToProps, {
    formSubmit,
    getFormView,
    putSharedUser,
    postSharedUser,
    getSharedUser,
    postFormStatus,
    putFormStatus,
  })(GenericForm)
);
