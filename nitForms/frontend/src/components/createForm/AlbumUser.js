import React, { Component, Fragment } from "react";
import { MDBContainer, MDBNotification } from "mdbreact";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import OldForms from "./OldForms.js";
import Features from "./features";
import Clock from "react-live-clock";
import CountUp from "react-countup";
import Typography from "@material-ui/core/Typography";
import { getNotification } from "../../actions/Notification";
import { connect } from "react-redux";
import { getFormStatus } from "../../actions/FormStatus";
import { getStatus } from "../../actions/Status";
import { UserTimeLine } from "./UserTimeLine";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";
import { getMessage, postMessage } from "../../actions/ChatActions";

export class AlbumUser extends Component {
  arr = [];
  constructor(props) {
    super(props);
    this.props.getNotification(this.props.username);
    this.props.getFormStatus();
    this.state = {
      show: false,
      show2: false,
      flag: false,
      visible: false,
      object: {},
    };
    this.toggleNotifications = this.toggleNotifications.bind(this);
  }
  toggleNotifications() {
    this.setState({
      visible: !this.state.visible,
    });
  }
  componentDidMount() {
    {
      Object.entries(this.props.FormStatus).map(([key, value]) => {
        if (this.props.username === key) {
          this.props.getStatus(value, key);
        }
      });
    }
  }

  onclick = (e) => {
    e.preventDefault();
    this.setState({ show: !this.state.show });
  };

  onclick2 = (e) => {
    e.preventDefault();
    this.setState({ show2: !this.state.show2 });
  };

  viewTimeline = (obj) => {
    this.setState({ flag: true });
    this.setState({ object: obj });
    console.log("hellpo");
    console.log(this.state.object);
  };

  render() {
    if (this.state.flag === true) {
      return (
        <UserTimeLine
          object={this.state.object}
          getMessage={this.props.getMessage}
          Chats={this.props.Chats}
          postMessage={this.props.postMessage}
          username={this.props.username}
        />
      );
    }
    var msg = "";
    return (
      <div>
        <div
          style={{
            // backgroundColor: "#ffb266",
            backgroundColor: "#e0777d",
            marginTop: "1vw",
            marginLeft: "1vw",
            marginRight: "1vw",
            minHeight: "7vw",
            borderRadius: ".3vw",
            padding: "1vw",
            color: "white",
            fontSize: "1.2vw",
          }}
        >
          <div
            style={{
              width: "5vw",
              float: "left",
              position: "relative",
              marginRight: "1vw",
              marginLeft: "2vw",
            }}
          >
            <table style={{ width: "25vw" }}>
              <tr>
                <td>
                  <span style={{ fontSize: "5vw" }} class="material-icons">
                    account_circle
                  </span>
                </td>
                <td style={{ width: "25vw" }}>
                  NAME:{this.props.username}
                  <br />
                  USERTYPE:USER <br />
                </td>
                <td>
                  <div className="dropdown">
                    <NavLink
                      className="nav-link-icon text-center"
                      onClick={this.toggleNotifications}
                    >
                      <div>
                        <i className="material-icons">&#xE7F4;</i>
                        <Badge pill theme="success">
                          2
                        </Badge>
                      </div>
                    </NavLink>

                    <Collapse
                      open={this.state.visible}
                      className="dropdown-menu dropdown-menu-small"
                    >
                      {" "}
                      <div
                        style={{
                          minHeight: "0vw",
                          maxHeight: "20vw",
                          overflowY: "scroll",
                          width: "25vw",
                          overflowX: "inherit",
                        }}
                      >
                        {this.props.Notification.map((nfy) => {
                          return (
                            <div
                              style={{
                                borderBottom: ".03vw solid lightgray",
                              }}
                            >
                              <DropdownItem
                                style={{
                                  overflowWrap: "break-word",
                                  fontSize: "1vw",
                                }}
                              >
                                <div
                                  className="notification__content"
                                  style={{ overflowWrap: "break-word" }}
                                >
                                  <table>
                                    <tr>
                                      <td rowspan="2">
                                        <span class="material-icons notification__icon notification__icon-wrapper">
                                          sms
                                        </span>
                                      </td>
                                      <td>
                                        {" "}
                                        <strong>{nfy.formName}</strong>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td> {nfy.notify}</td>
                                    </tr>
                                  </table>
                                </div>
                              </DropdownItem>
                              {/* <hr /> */}
                            </div>
                          );
                        })}
                      </div>
                    </Collapse>
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <h4 style={{ float: "right", color: "black" }}>
            {" "}
            <Clock format={"dddd, MMMM Do, YYYY, h:mm:ss A"} ticking={true} />
          </h4>
          <br />
          <br />
          <form style={{ float: "right" }}>
            <input
              type="text"
              className="searchbar"
              name="search"
              placeholder="Search.."
            />
          </form>
        </div>
        <br />
        <div
          style={{ marginLeft: " auto", marginRight: "auto", display: "table" }}
        >
          <Button
            style={{
              backgroundColor: "white",
              color: "#e0777d",
              // border: 0,
              //float: "right",
              position: "relative",
              //zIndex: "9999",
              fontFamily: "Times New Roman",
              boxShadow: ".3vw .3vw .3vw lightgray",
              border: ".01vw solid #e0777d",
            }}
            onClick={this.onclick}
          >
            {this.state.show ? "Hide " : "Show "}
            Notifications
          </Button>
          {this.state.show ? (
            <div
              style={{
                backgroundColor: "#d7d7d7",
                opacity: ".92",
                height: "20vw",
                overflowY: "scroll",
                zIndex: "9999",
                margin: ".5vw",
                marginLeft: "-12vw",
                borderRadius: ".5vw",
                position: "absolute",
                // border: "0.1vw solid grey",
              }}
            >
              <MDBContainer
                style={{
                  zIndex: "9999",
                }}
                className="grey darken-3 p-3"
              >
                {this.props.Notification !== null ? (
                  this.props.Notification.map((nfy) => {
                    return (
                      <div
                        style={{
                          backgroundColor: "#e7e7de",
                          marginBottom: "1vw",
                          marginTop: 0,
                          paddingTop: 0,
                        }}
                      >
                        <MDBNotification
                          iconClassName="text-primary"
                          show
                          fade
                          title="Bootstrap"
                          message={nfy.notify}
                          text="11 mins ago"
                          zindex="9999"
                          style={{ marginBottom: 0 }}
                        />
                        <table style={{ width: "100%" }}>
                          <tr>
                            <td style={{ width: "50%" }}>
                              <Button
                                style={{
                                  // backgroundColor: "transparent",
                                  width: "100%",
                                  textAlign: "center",
                                }}
                              >
                                View
                              </Button>
                            </td>

                            <td style={{ width: "50%" }}>
                              <Button
                                style={{
                                  //backgroundColor: "transparent",
                                  width: "100%",
                                  textAlign: "center",
                                }}
                              >
                                Mark as Read
                              </Button>
                            </td>
                          </tr>
                        </table>
                      </div>
                    );
                  })
                ) : (
                  <div></div>
                )}
              </MDBContainer>
            </div>
          ) : null}
          <Button
            style={{
              backgroundColor: "#e0777d",
              color: "white",
              border: 0,
              fontFamily: "Times New Roman",
              boxShadow: ".3vw .3vw .3vw lightgray",
              position: "relative",
              //border: ".01vw solid #e0777d",
            }}
            onClick={this.onclick2}
          >
            Detailed status of previous forms
          </Button>

          {this.state.show2 ? (
            <div
              style={{
                zIndex: "9999",
                position: "absolute",
                backgroundColor: "#d7d7d7",
                opacity: ".92",
                overflowY: "scroll",
                marginLeft: "10vw",
                borderRadius: ".5vw",
                marginTop: "0.5vw",
                //border: "0.1vw solid grey",
              }}
            >
              <MDBContainer
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  //marginTop: 0,
                  zIndex: "9999",
                }}
                className="grey darken-3 p-3"
              >
                {this.props.FormStatus.map((obj) => {
                  if (obj.userName === this.props.username) {
                    {
                      if (obj.responseAcceptedStatus === "Accepted") {
                        msg = "You response hsa been accepted";
                      } else if (obj.responseAcceptedStatus === "Rejected") {
                        msg = "Your response has been rejected";
                      } else {
                        msg = "Status Pending";
                      }
                    }

                    return (
                      <MDBNotification
                        iconClassName="text-primary"
                        show
                        fade
                        title={obj.formName}
                        message={msg}
                        text={
                          <Button
                            onClick={() => {
                              this.viewTimeline(obj);
                            }}
                            style={{
                              padding: "0.1vw",
                              fontSize: ".8vw",
                              backgroundColor: "#009999",
                              border: 0,
                              paddingLeft: ".3vw",
                              paddingRight: ".3vw",
                              fontFamily: "Times New Roman",
                            }}
                          >
                            View timeline
                          </Button>
                        }
                      />
                    );
                  }
                })}
              </MDBContainer>
            </div>
          ) : null}
        </div>
        <br />
        <div style={{ backgroundColor: "white" }}>
          <OldForms />
        </div>
        <Features />
        <footer
          style={{
            backgroundColor: "#0A5C5A",
            marginLeft: "-6vw",
            marginRight: "-6vw",
            padding: "2vw",
            color: "white",
          }}
        >
          <Typography
            style={{ fontFamily: "Times New Roman" }}
            variant="h6"
            align="center"
            gutterBottom
          >
            {" "}
            Dr. B.R Ambedkar National Institute of Technology
          </Typography>
          <Typography
            style={{ fontFamily: "Times New Roman" }}
            variant="subtitle1"
            align="center"
            color="cream"
            component="p"
          >
            Jalandhar
            <br />
            Contact:1234567890
          </Typography>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Notification: state.Notification.Notification,
  username: state.Auth.user.username,
  FormStatus: state.FormStatus.FormStatus,
  Status: state.Status.Status,
  Chats: state.Chats.Chats,
});

export default connect(mapStateToProps, {
  getNotification,
  getFormStatus,
  getStatus,
  getMessage,
  postMessage,
})(AlbumUser);
