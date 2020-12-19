import React, { Component, Fragment } from "react";
import Clock from "react-live-clock";
import Button from "@material-ui/core/Button";
import { Button as ButtonB } from "react-bootstrap";
import CountUp from "react-countup";
import Features from "./features";
import Typography from "@material-ui/core/Typography";
import OldForms from "./OldForms";
import { getNotification } from "../../actions/Notification";
import { connect } from "react-redux";
import { getFormStatus } from "../../actions/FormStatus";
import { getStatus } from "../../actions/Status";
import { MDBContainer, MDBNotification } from "mdbreact";
import { Link } from "react-router-dom";

export class AlbumAdminStaff extends Component {
  constructor(props) {
    super(props);
    this.props.getNotification(this.props.username);
    this.props.getFormStatus();
    this.state = {
      show: false,
      show2: false,
    };
  }
  state = { users: false, customers: false };
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
      <Fragment>
        {/* <Header /> */}
        {/* <SearchBar
        onChange={() => console.log("onChange")}
        onRequestSearch={() => console.log("onRequestSearch")}
        style={{
          margin: "0 auto",
          maxWidth: 800,
        }}
      /> */}
        <div
          style={{
            // backgroundColor: "#ffb266",
            backgroundColor: "#e0777d",
            marginTop: "1vw",

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
          USERTYPE:ADMIN <br />
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
            marginLeft: " auto",
            marginRight: "auto",
            display: "table",
            marginTop: "1vw",
          }}
        >
          <ButtonB
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
          </ButtonB>
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
                              <Link to={nfy.linkToPage}>
                                <ButtonB
                                  style={{
                                    // backgroundColor: "transparent",
                                    width: "100%",
                                    textAlign: "center",
                                  }}
                                >
                                  View
                                </ButtonB>
                              </Link>
                            </td>

                            <td style={{ width: "50%" }}>
                              <ButtonB
                                style={{
                                  //backgroundColor: "transparent",
                                  width: "100%",
                                  textAlign: "center",
                                }}
                              >
                                Mark as Read
                              </ButtonB>
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
          ) : null}{" "}
          <ButtonB
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
          </ButtonB>
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
                <MDBNotification
                  iconClassName="text-primary"
                  show
                  fade
                  title="Test 1"
                  message="status:pending , Your form will be reviewed soon"
                  text={
                    <Link to={"/timeline/"}>
                      <ButtonB
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
                      </ButtonB>
                    </Link>
                  }
                />
              </MDBContainer>
            </div>
          ) : null}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            marginTop: "1vw",

            // width: "60vw",
            // position: "relative",
          }}
        >
          <Button
            onClick={() => {
              this.setState({ users: !this.state.users });
              this.setState({ customers: false });
            }}
            style={{
              //backgroundImage: "linear-gradient(rgba(179, 204, 37, .5),white",
              backgroundColor: "white",
              textAlign: "center",
              flexBasis: "19.2%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              padding: "1.5vw",
              fontFamily: "Times New Roman",
              color: "grey",
              boxShadow:
                ".2vw .1vw .4vw #0A5C5A, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
            }}
          >
            USERS
            <br />
            <h3>
              <CountUp end={13} duration={5} />
            </h3>
          </Button>
          <Button
            onClick={() => {
              this.setState({ customers: !this.state.customers });
              this.setState({ users: false });
            }}
            style={{
              //   width: "17vw",
              fontFamily: "Times New Roman",
              //backgroundImage: "linear-gradient(pink,white)",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              backgroundColor: "white",
              textAlign: "center",
              flexBasis: "19.2%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              // backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw #0A5C5A, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            CUSTOMERS
            <br />
            <h3>
              <CountUp end={123} duration={5} />
            </h3>
          </Button>
          <Button
            style={{
              //   width: "17vw",

              // backgroundImage: "linear-gradient(lightblue,white)",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              backgroundColor: "white",
              textAlign: "center",
              flexBasis: "19.2%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              // backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw #0A5C5A, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",
              fontFamily: "Times New Roman",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            NOTINGS
            <br />
            <h3>
              <CountUp end={6} duration={5} />
            </h3>
          </Button>
          <Button
            style={{
              //   width: "17vw",

              //backgroundImage: "linear-gradient(#ffcc99,white)",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              backgroundColor: "white",
              textAlign: "center",
              flexBasis: "19.2%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw #0A5C5A, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              fontFamily: "Times New Roman",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            FORMS
            <br />
            <h3>
              <CountUp end={15} duration={5} />
            </h3>
          </Button>
          <Button
            style={{
              //   width: "17vw",

              //backgroundImage: "linear-gradient(#cc99ff,white",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              backgroundColor: "white",
              textAlign: "center",
              flexBasis: "19.2%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw #0A5C5A, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
              fontFamily: "Times New Roman",
            }}
          >
            DUES
            <br />
            <h3>
              <CountUp end={10} duration={5} />
            </h3>
          </Button>
        </div>

        {this.state.users === true ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              marginTop: "1vw",
            }}
          >
            <div
              style={{
                //   width: "17vw",

                //   backgroundImage:
                //     "linear-gradient(rgba(179, 204, 37, .5),rgba(51, 204, 37, .5))",
                //   marginLeft: "1vw",
                //   marginRight: "1vw",
                textAlign: "center",
                flexBasis: "32%",
                minHeight: "18vw",
                borderRadius: ".5vw",
                backgroundColor: "white",
                padding: "1.5vw",
                color: "grey",
                // border: ".01vw solid red",
                boxShadow:
                  ".4vw .4vw .5vw lightgrey, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

                // WebkitBoxShadow:
                //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
                // MozBoxShadow:
                //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
                //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
              }}
            >
              <div>
                ONLINE users
                <br />
                <table
                  style={{
                    width: "100%",
                    marginTop: "1vw",
                    // boxShadow: "0.1vw 0.2vw 0.1vw grey",
                    // backgroundImage: "linear-gradient(pink,white)",
                    backgroundColor: "white",
                    borderRadius: ".4vw",
                    padding: ".5vw",
                  }}
                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>USERNAME</th>
                      <th>EMAIL </th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>abc</td>
                      <td>abc@gmail.com</td>
                      <td>
                        <Button
                          style={{
                            backgroundColor: "green",
                            padding: ".1vw",
                            color: "white",
                            fontFamily: "Times New Roman",
                          }}
                        >
                          Online
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>efg</td>
                      <td>abc@gmail.com</td>
                      <td>
                        <Button
                          style={{
                            backgroundColor: "green",
                            padding: ".1vw",
                            color: "white",
                            fontFamily: "Times New Roman",
                          }}
                        >
                          Online
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>xyz</td>
                      <td>abc@gmail.com</td>
                      <td>
                        <Button
                          style={{
                            backgroundColor: "red",
                            padding: ".1vw",
                            color: "white",
                            fontFamily: "Times New Roman",
                          }}
                        >
                          Active Today
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div
              style={{
                //   width: "17vw",

                //   backgroundImage:
                //     "linear-gradient(rgba(179, 204, 37, .5),rgba(51, 204, 37, .5))",
                //   marginLeft: "1vw",
                //   marginRight: "1vw",
                textAlign: "center",
                flexBasis: "32%",
                minHeight: "18vw",
                borderRadius: ".5vw",
                backgroundColor: "white",
                boxShadow:
                  ".4vw .4vw .5vw lightgrey, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

                padding: "1.5vw",
                color: "grey",
                // border: ".01vw solid red",
                // boxShadow:
                //   ".2vw .1vw .4vw purple, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

                // WebkitBoxShadow:
                //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
                // MozBoxShadow:
                //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
                //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
              }}
            >
              <img
                src="static/graph.JPG"
                style={{ height: "17vw", width: "26vw" }}
              />
            </div>
            <div
              style={{
                //   width: "17vw",

                //   backgroundImage:
                //     "linear-gradient(rgba(179, 204, 37, .5),rgba(51, 204, 37, .5))",
                //   marginLeft: "1vw",
                //   marginRight: "1vw",
                textAlign: "center",
                boxShadow:
                  ".4vw .4vw .5vw lightgrey, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

                flexBasis: "32%",
                minHeight: "18vw",
                borderRadius: ".5vw",
                backgroundColor: "white",
                padding: "1.5vw",
                color: "grey",
                // border: ".01vw solid red",
                // boxShadow:
                //   ".2vw .1vw .4vw green, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

                // WebkitBoxShadow:
                //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
                // MozBoxShadow:
                //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
                //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
              }}
            >
              <div>
                RECENT POSTS users
                <br />
                <table
                  rules="all"
                  style={{
                    width: "100%",
                    marginTop: "1vw",
                    border: ".1vw solid grey",
                    backgroundColor: "white",
                    borderSpacing: "1vw",
                    // boxShadow: "0.1vw 0.2vw 0.1vw grey",
                    // backgroundImage: "linear-gradient(lightgreen,white)",
                  }}
                >
                  <tbody>
                    <tr>
                      <td>12-03-2020</td>
                      <td>Test1</td>
                    </tr>
                    <tr>
                      <td>2-04-2020</td>
                      <td>Test2</td>
                    </tr>
                    <tr>
                      <td>19-07-2020</td>
                      <td>Test3</td>
                    </tr>
                    <tr>
                      <td>12-03-2020</td>
                      <td>Test4</td>
                    </tr>
                    <tr>
                      <td>2-04-2020</td>
                      <td>Test5</td>
                    </tr>
                    <tr>
                      <td>19-07-2020</td>
                      <td>Test6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {this.state.customers === true ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              marginTop: "1vw",
            }}
          >
            <div
              style={{
                //   width: "17vw",

                //   backgroundImage:
                //     "linear-gradient(rgba(179, 204, 37, .5),rgba(51, 204, 37, .5))",
                //   marginLeft: "1vw",
                //   marginRight: "1vw",
                textAlign: "center",
                flexBasis: "32%",
                minHeight: "18vw",
                borderRadius: ".5vw",
                backgroundColor: "white",
                padding: "1.5vw",
                color: "grey",
                // border: ".01vw solid red",
                boxShadow:
                  ".4vw .4vw .5vw lightgrey, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

                // WebkitBoxShadow:
                //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
                // MozBoxShadow:
                //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
                //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
              }}
            >
              <div>
                ONLINE customers
                <br />
                <table
                  style={{
                    width: "100%",
                    marginTop: "1vw",
                    // boxShadow: "0.1vw 0.2vw 0.1vw grey",
                    // backgroundImage: "linear-gradient(pink,white)",
                    backgroundColor: "white",
                    borderRadius: ".4vw",
                    padding: ".5vw",
                  }}
                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>USERNAME</th>
                      <th>EMAIL </th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>abc</td>
                      <td>abc@gmail.com</td>
                      <td>
                        <Button
                          style={{
                            backgroundColor: "green",
                            padding: ".1vw",
                            color: "white",
                            fontFamily: "Times New Roman",
                          }}
                        >
                          Online
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>efg</td>
                      <td>abc@gmail.com</td>
                      <td>
                        <Button
                          style={{
                            backgroundColor: "green",
                            padding: ".1vw",
                            color: "white",
                            fontFamily: "Times New Roman",
                          }}
                        >
                          Online
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>xyz</td>
                      <td>abc@gmail.com</td>
                      <td>
                        <Button
                          style={{
                            backgroundColor: "red",
                            padding: ".1vw",
                            color: "white",
                            fontFamily: "Times New Roman",
                          }}
                        >
                          Active Today
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div
              style={{
                //   width: "17vw",

                //   backgroundImage:
                //     "linear-gradient(rgba(179, 204, 37, .5),rgba(51, 204, 37, .5))",
                //   marginLeft: "1vw",
                //   marginRight: "1vw",
                textAlign: "center",
                flexBasis: "32%",
                minHeight: "18vw",
                borderRadius: ".5vw",
                backgroundColor: "white",
                boxShadow:
                  ".4vw .4vw .5vw lightgrey, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

                padding: "1.5vw",
                color: "grey",
                // border: ".01vw solid red",
                // boxShadow:
                //   ".2vw .1vw .4vw purple, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

                // WebkitBoxShadow:
                //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
                // MozBoxShadow:
                //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
                //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
              }}
            >
              <img
                src="static/graph.JPG"
                style={{ height: "17vw", width: "26vw" }}
              />
              <h3>graph</h3>
            </div>
            <div
              style={{
                //   width: "17vw",

                //   backgroundImage:
                //     "linear-gradient(rgba(179, 204, 37, .5),rgba(51, 204, 37, .5))",
                //   marginLeft: "1vw",
                //   marginRight: "1vw",
                textAlign: "center",
                boxShadow:
                  ".4vw .4vw .5vw lightgrey, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

                flexBasis: "32%",
                minHeight: "18vw",
                borderRadius: ".5vw",
                backgroundColor: "white",
                padding: "1.5vw",
                color: "grey",
                // border: ".01vw solid red",
                // boxShadow:
                //   ".2vw .1vw .4vw green, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

                // WebkitBoxShadow:
                //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
                // MozBoxShadow:
                //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
                //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
              }}
            >
              <div>
                RECENT POSTS CUSTOMERS
                <br />
                <table
                  rules="all"
                  style={{
                    width: "100%",
                    marginTop: "1vw",
                    border: ".1vw solid grey",
                    backgroundColor: "white",
                    borderSpacing: "1vw",
                    // boxShadow: "0.1vw 0.2vw 0.1vw grey",
                    // backgroundImage: "linear-gradient(lightgreen,white)",
                  }}
                >
                  <tbody>
                    <tr>
                      <td>12-03-2020</td>
                      <td>Test1</td>
                    </tr>
                    <tr>
                      <td>2-04-2020</td>
                      <td>Test2</td>
                    </tr>
                    <tr>
                      <td>19-07-2020</td>
                      <td>Test3</td>
                    </tr>
                    <tr>
                      <td>12-03-2020</td>
                      <td>Test4</td>
                    </tr>
                    <tr>
                      <td>2-04-2020</td>
                      <td>Test5</td>
                    </tr>
                    <tr>
                      <td>19-07-2020</td>
                      <td>Test6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <OldForms />
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
          <Typography variant="h6" align="center" gutterBottom>
            {" "}
            Dr. B.R Ambedkar National Institute of Technology
          </Typography>
          <Typography
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
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  username: state.Auth.user.username,
  Notification: state.Notification.Notification,
  FormStatus: state.FormStatus.FormStatus,
  Status: state.Status.Status,
});

export default connect(mapStateToProps, {
  getNotification,
  getFormStatus,
  getStatus,
})(AlbumAdminStaff);
