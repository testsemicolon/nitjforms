import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import OldForms from "./OldForms";
import Link from "@material-ui/core/Link";
import Header from "../layout/Header";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link as Link1 } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/fa";
import SearchBar from "material-ui-search-bar";
import Features from "./features";
import { Modal } from "react-responsive-modal";
import { connect } from "react-redux";
import { getName, updateName } from "../../actions/FormName";
import { getDefaultKeyBinding } from "draft-js";
import Clock from "react-live-clock";
import CountUp from "react-countup";
import $ from "jquery";
import { DatePicker } from "rsuite";
import { DateRangePicker } from 'rsuite';
import UsersOverview from "./DirectorDashboard/UsersOverview";
import Discussions from "./DirectorDashboard/Discussions";
import SmallStats from "./DirectorDashboard/SmallStats";
import { Container, Row, Col } from "shards-react";
import SmallCharts from "./DirectorDashboard/SmallCharts";
import FundsAllot from "./DirectorDashboard/FundsAllot";
// import 'rsuite/lib/styles/index.less';


class Director extends Component {
  state = {
    users: true,
    customers: false,
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <Fragment>
      
        
       
        <div
          style={{
            // backgroundColor: "#ffb266",
            backgroundColor: "#E17A7F",
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
                  Director<br />
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
          <form style={{ float: "right", marginLeft: "30vw" }}>
            <input
              type="text"
              className="searchbar"
              name="search"
              placeholder="Search.."
            />
          </form>
        </div>
        <div style={{marginTop:"2vw"}}>
       <SmallCharts/>
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
              textAlign: "center",
              flexBasis: "19%",
              minHeight: "8vw",
              backgroundColor: "white",
              borderRadius: ".5vw",
              padding: "1.5vw",
              color: "grey",
              boxShadow:
                ".2vw .1vw .4vw silver, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              fontFamily: "Times New Roman",
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

              //backgroundImage: "linear-gradient(pink,white)",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              textAlign: "center",
              flexBasis: "19%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw silver, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
              fontFamily: "Times New Roman",
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
              textAlign: "center",
              flexBasis: "19%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw silver, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
              fontFamily: "Times New Roman",
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
              textAlign: "center",
              flexBasis: "19%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw silver, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
              fontFamily: "Times New Roman",
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
        
              textAlign: "center",
              flexBasis: "19%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid #0A5C5A",
              boxShadow:
                ".2vw .1vw .4vw silver, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
              fontFamily: "Times New Roman",
            }}
            onClick={this.onOpenModal}
          >
            CREATE
            <br />

      
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
            {/* <div
              style={{
         
                textAlign: "center",
                flexBasis: "32%",
                minHeight: "18vw",
                borderRadius: ".5vw",
                backgroundColor: "white",
                padding: "1.5vw",
                color: "grey",
                // border: ".01vw solid red",
                boxShadow:
                  ".4vw .4vw .5vw lightgray, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

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
            </div> */}

            <div
              style={{
                textAlign: "center",
                flexBasis: "64%",
                minHeight: "18vw",
                borderRadius: ".5vw",
                backgroundColor: "white",
                boxShadow:
                  ".4vw .4vw .5vw lightgrey, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

                padding: "1.5vw",
                color: "grey",
   
              }}
            >
    
           <UsersOverview />
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
                
              }}
            >
              <div>
                
                {/* <table
                  //rules="all"
                  style={{
                    width: "100%",
                    marginTop: "1vw",
                    // border: ".1vw solid grey",

                    backgroundColor: "white",
                    borderSpacing: "1vw",
                    // boxShadow: "0.1vw 0.2vw 0.1vw grey",
                    // backgroundImage: "linear-gradient(lightgreen,white)",
                  }}
                >
                  <tbody>
                    <tr>
                      <td>SuperAdmin</td>
                      <td>
                        <input type="text" />
                      </td>
                      <td>
                        {" "}
                        <Button
                          style={{
                            backgroundColor: "#0a5c5a",
                            color: "white",
                            padding: ".03vw",
                          }}
                        >
                          Add
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td>Admin</td>
                      <td>
                        <input type="text" />
                      </td>
                      <td>
                        {" "}
                        <Button
                          style={{
                            backgroundColor: "#0a5c5a",
                            color: "white",
                            padding: ".03vw",
                          }}
                        >
                          Add
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table> */}
                <Discussions />
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
              }}
            >
              <img
                src="static/graph.JPG"
                style={{ height: "17vw", width: "26vw" }}
              />
            </div>
            <div
              style={{
            
                textAlign: "center",
                boxShadow:
                  ".4vw .4vw .5vw lightgrey, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

                flexBasis: "32%",
                minHeight: "18vw",
                borderRadius: ".5vw",
                backgroundColor: "white",
                padding: "1.5vw",
                color: "grey",
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
<FundsAllot />
        {/* <OldForms /> */}
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
            variant="h6"
            align="center"
            color="cream"
            style={{ fontFamily: "Times New Roman" }}
            gutterBottom
          >
            {" "}
            Dr. B.R Ambedkar National Institute of Technology
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="cream"
            style={{ fontFamily: "Times New Roman" }}
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
});

export default connect(mapStateToProps, { getName })(Director);