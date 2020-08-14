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

export default class Albumm extends Component {
  render() {
    return (
      <Fragment>
        {/* <Header /> */}
        <SearchBar
          onChange={() => console.log("onChange")}
          onRequestSearch={() => console.log("onRequestSearch")}
          style={{
            margin: "0 auto",
            maxWidth: 800,
          }}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            marginTop: "1vw",
            marginLeft: "3vw",
            marginRight: "3vw",
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
              flexBasis: "18%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw red, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            USERS
            <br />
            <h3>123</h3>
          </div>
          <div
            style={{
              //   width: "17vw",

              //   backgroundImage:
              //     "linear-gradient(rgba(179, 204, 37, .5),rgba(51, 204, 37, .5))",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              textAlign: "center",
              flexBasis: "18%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw orange, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            CUSTOMERS
            <br />
            <h3>123</h3>
          </div>
          <div
            style={{
              //   width: "17vw",

              //   backgroundImage:
              //     "linear-gradient(rgba(179, 204, 37, .5),rgba(51, 204, 37, .5))",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              textAlign: "center",
              flexBasis: "18%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw lightblue, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            NOTINGS
            <br />
            <h3>123</h3>
          </div>
          <div
            style={{
              //   width: "17vw",

              //   backgroundImage:
              //     "linear-gradient(rgba(179, 204, 37, .5),rgba(51, 204, 37, .5))",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              textAlign: "center",
              flexBasis: "18%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw lightgreen, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            FORMS
            <br />
            <h3>123</h3>
          </div>
          <div
            style={{
              //   width: "17vw",

              //   backgroundImage:
              //     "linear-gradient(rgba(179, 204, 37, .5),rgba(51, 204, 37, .5))",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              textAlign: "center",
              flexBasis: "18%",
              minHeight: "8vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw pink, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            DUES
            <br />
            <h3>123</h3>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            marginTop: "1vw",
            marginLeft: "3vw",
            marginRight: "3vw",
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
              flexBasis: "30%",
              minHeight: "18vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw pink, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            ONLINE USERS
            <br />
            <table
              style={{
                width: "100%",
                marginTop: "1vw",
                // boxShadow: "0.1vw 0.2vw 0.1vw grey",
                backgroundImage: "linear-gradient(pink,white)",
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
                  <td>2</td>
                  <td>abc</td>
                  <td>abc@gmail.com</td>
                  <td>
                    <Button
                      style={{
                        backgroundColor: "green",
                        padding: ".1vw",
                        color: "white",
                      }}
                    >
                      Online
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>abc</td>
                  <td>abc@gmail.com</td>
                  <td>
                    <Button
                      style={{
                        backgroundColor: "green",
                        padding: ".1vw",
                        color: "white",
                      }}
                    >
                      Online
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>abc</td>
                  <td>abc@gmail.com</td>
                  <td>
                    <Button
                      style={{
                        backgroundColor: "red",
                        padding: ".1vw",
                        color: "white",
                      }}
                    >
                      Online
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            style={{
              //   width: "17vw",

              //   backgroundImage:
              //     "linear-gradient(rgba(179, 204, 37, .5),rgba(51, 204, 37, .5))",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              textAlign: "center",
              flexBasis: "30%",
              minHeight: "18vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw purple, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            USERS
            <br />
            <h3>123</h3>
          </div>
          <div
            style={{
              //   width: "17vw",

              //   backgroundImage:
              //     "linear-gradient(rgba(179, 204, 37, .5),rgba(51, 204, 37, .5))",
              //   marginLeft: "1vw",
              //   marginRight: "1vw",
              textAlign: "center",
              flexBasis: "30%",
              minHeight: "18vw",
              borderRadius: ".5vw",
              backgroundColor: "white",
              padding: "1.5vw",
              color: "grey",
              // border: ".01vw solid red",
              boxShadow:
                ".2vw .1vw .4vw green, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",

              // WebkitBoxShadow:
              //   "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
              //        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset,
            }}
          >
            RECENT POSTS
            <br />
            <table
              rules="all"
              style={{
                width: "100%",
                marginTop: "1vw",
                border: ".1vw solid grey",
                borderSpacing: "1vw",
                // boxShadow: "0.1vw 0.2vw 0.1vw grey",
                backgroundImage: "linear-gradient(lightgreen,white)",
              }}
            >
              {/* <thead>
                <tr>
                  <th>DATE</th>
                  <th></th>
                 
                </tr>
              </thead> */}
              <tbody>
                <tr>
                  <td>12-03-2020</td>
                  <td>Chcvdjv hbchjd dncbnfjv</td>
                </tr>
                <tr>
                  <td>2-04-2020</td>
                  <td>bc vfdvbfvdjvsf</td>
                </tr>
                <tr>
                  <td>19-07-2020</td>
                  <td>adf jbcdfbvnjvsj</td>
                </tr>
                <tr>
                  <td>12-03-2020</td>
                  <td>Chcvdjv hbchjd dncbnfjv</td>
                </tr>
                <tr>
                  <td>2-04-2020</td>
                  <td>bc vfdvbfvdjvsf</td>
                </tr>
                <tr>
                  <td>19-07-2020</td>
                  <td>adf jbcdfbvnjvsj</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          style={{
            backgroundImage: "linear-gradient(#eeeeee,#fafafa)",
            padding: "4vw",
            marginTop: "3vw",
            borderRadius: ".3vw",
            marginLeft: "4vw",
            marginRight: "4vw",
            boxShadow: ".6vw .6vw .6vw silver",
            // height: "15vw",
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            FORMS
          </Typography>

          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            LET'S CREATE A NEW FORM
          </Typography>
          <div>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Link1 to="/definingsteps">
                  <Button variant="contained" color="primary">
                    CREATE A NEW FORM
                  </Button>
                </Link1>
              </Grid>
              <Grid item>
                <Button
                  style={{ backgroundColor: "white" }}
                  variant="outlined"
                  color="primary"
                >
                  VIEW PREVIOUS FORMS
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
        <OldForms />
        <footer>
          <Typography variant="h6" align="center" gutterBottom>
            {" "}
            National Institute of Technology
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Jalandharr
          </Typography>
        </footer>
      </Fragment>
    );
  }
}
