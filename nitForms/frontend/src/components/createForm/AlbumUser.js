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

export class AlbumUser extends Component {
  arr = [];
  constructor(props) {
    super(props);
    this.props.getNotification(this.props.username);
    this.props.getFormStatus();
    this.state = {
      show: false,
      show2: false,
    };
    console.log(this.props);
  }
  componentDidMount() {
    console.log(this.props.FormStatus);
    {
      Object.entries(this.props.FormStatus).map(([key, value]) => {
        console.log(key, value);
        if (this.props.username === key) {
          console.log("helloo");
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

  render() {
    return (
      <div>
        <div
          style={{
            // backgroundColor: "#ffb266",
            backgroundColor: "#66a3ff",
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
              marginRight: "4vw",
              marginLeft: "2vw",
            }}
          >
            <span style={{ fontSize: "5vw" }} class="material-icons">
              account_circle
            </span>
          </div>
          {/* <div
            style={{ float: "right", position: "relative", marginLeft: "9vw" }}
          ></div> */}
          <h4 style={{ float: "right", color: "black" }}>
            {" "}
            <Clock format={"dddd, MMMM Do, YYYY, h:mm:ss A"} ticking={true} />
          </h4>
          NAME:{this.props.username}
          <br />
          USERTYPE:USER <br />
          <form style={{ float: "right" }}>
            <input
              type="text"
              className="searchbar"
              name="search"
              placeholder="Search.."
            />
          </form>
        </div>
        <div
          style={{
            marginBottom: "2vw",
            marginTop: "2vw",
            minHeight: "1vw",
          }}
        >
          <div>
            <div
              style={{
                width: "40vw",
                position: "relative",
                float: "left",
                border: "0.07vw solid #DCDCDC",
                padding: "1vw",
                textAlign: "center",
                marginLeft: "auto",
                borderRadius: ".5vw",
                backgroundImage:
                  "linear-gradient(to right,rgba(0, 153, 153, 0.5),rgba(0, 231, 231, 0.5)",
              }}
              className="test"
            >
              <Button
                style={{
                  backgroundColor: "white",
                  color: "#009999",
                  border: 0,
                  fontFamily: "Times New Roman",
                  boxShadow: ".3vw .3vw .3vw lightgray",
                }}
                onClick={this.onclick}
              >
                {this.state.show ? "Hide " : "Show "}
                Notifications
              </Button>

              {this.state.show ? (
                <div style={{ marginLeft: "6vw", marginRight: "auto" }}>
                  <MDBContainer className="grey darken-3 p-3">
                    {this.props.Notification !== null ? (
                      this.props.Notification.map((nfy) => {
                        return (
                          <MDBNotification
                            iconClassName="text-primary"
                            show
                            fade
                            title="Bootstrap"
                            message={nfy.notify}
                            text="11 mins ago"
                            zindex="9999"
                          />
                        );
                      })
                    ) : (
                      <div></div>
                    )}
                  </MDBContainer>
                </div>
              ) : null}
            </div>

            <div
              style={{
                width: "39vw",
                position: "relative",
                float: "right",
                border: "0.07vw solid #DCDCDC",
                padding: "1vw",
                textAlign: "center",
                borderRadius: ".5vw",
                marginRight: "1vw",
                backgroundImage:
                  "linear-gradient(to right,rgba(0, 153, 153, 0.5),rgba(0, 231, 231, 0.5)",
              }}
            >
              <Button
                style={{
                  backgroundColor: "white",
                  color: "#009999",
                  border: 0,
                  fontFamily: "Times New Roman",
                  boxShadow: ".3vw .3vw .3vw lightgray",
                }}
                onClick={this.onclick2}
              >
                Detailed status of previous forms
              </Button>

              {this.state.show2 ? (
                <div>
                  <MDBContainer
                    style={{ marginLeft: "6vw", marginRight: "auto" }}
                    className="grey darken-3 p-3"
                  >
                    <MDBNotification
                      iconClassName="text-primary"
                      show
                      fade
                      title="Test 1"
                      message="status:pending , Your form will be reviewed soon"
                      text={
                        <Link to={"/timeline/"}>
                          <Button
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
                        </Link>
                      }
                    />
                  </MDBContainer>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <br />
        <br />
        <div style={{ backgroundColor: "white" }}>
          <OldForms />
        </div>
        <Features />
        <footer
          style={{
            backgroundColor: "#12a6a3",
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
});

export default connect(mapStateToProps, {
  getNotification,
  getFormStatus,
  getStatus,
})(AlbumUser);
