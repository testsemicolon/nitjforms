import React, { Component } from "react";
import { MDBContainer, MDBNotification } from "mdbreact";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import OldForms from "./OldForms.js";
import Typography from "@material-ui/core/Typography";

export default class AlbumUser extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
      show2: false,
    };
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
        <div>
          <div
            style={{
              width: "30vw",
              position: "relative",
              float: "left",
              border: "0.07vw solid #DCDCDC",
              padding: "1vw",
              textAlign: "center",
            }}
            className="test"
          >
            <Button onClick={this.onclick}>
              {this.state.show ? "Hide " : "Show "}
              Notifications
            </Button>

            {this.state.show ? (
              <div>
                <MDBContainer className="grey darken-3 p-3">
                  <MDBNotification
                    iconClassName="text-primary"
                    show
                    fade
                    title="Bootstrap"
                    message="Hello, world! This is a toast message."
                    text="11 mins ago"
                    zindex="9999"
                  />
                  <MDBNotification
                    iconClassName="text-primary"
                    show
                    fade
                    title="Bootstrap"
                    message="Hello, world! This is a toast message."
                    text="11 mins ago"
                  />
                </MDBContainer>
              </div>
            ) : null}
          </div>

          <div
            style={{
              width: "30vw",
              position: "relative",
              float: "right",
              border: "0.07vw solid #DCDCDC",
              padding: "1vw",
              textAlign: "center",
            }}
          >
            <Button onClick={this.onclick2}>
              Detailed status of previous forms
            </Button>

            {this.state.show2 ? (
              <div>
                <MDBContainer className="grey darken-3 p-3">
                  <MDBNotification
                    iconClassName="text-primary"
                    show
                    fade
                    title="FormName"
                    message="status:pending"
                    text={
                      <Link to={"/timeline/"}>
                        <Button style={{ padding: "0.1vw", fontSize: ".8vw" }}>
                          View timeline
                        </Button>
                      </Link>
                    }
                  />
                  <MDBNotification
                    iconClassName="text-primary"
                    show
                    fade
                    title="FormName"
                    message="status:pending"
                    text={
                      <Button style={{ padding: "0.1vw", fontSize: ".8vw" }}>
                        View timeline
                      </Button>
                    }
                  />
                </MDBContainer>
              </div>
            ) : null}
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
            Jalandhar
          </Typography>
        </footer>
      </div>
    );
  }
}
