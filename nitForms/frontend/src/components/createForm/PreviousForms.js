import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
<<<<<<< HEAD
import { Button } from "@material-ui/core";
import { getName, updateName } from "../../actions/FormName";
=======
import { Card } from "@material-ui/core";
import { Button } from "react-bootstrap";

import { OldForms } from "./OldForms";
import { getName } from "../../actions/FormName";
>>>>>>> 998529ce27bfe67a6783c030b94d761d9482d586
import { Link } from "react-router-dom";

class PreviousForms extends Component {
  state = { status: false };
  constructor(props) {
    super(props);
    this.props.getName();
  }
  static = {
    FormName: PropTypes.array.isRequired,
  };

  onClick = () => {
    console.log("adas");
    // quest["activationStatus"] = !quest.activationStatus;
    // console.log(id, quest);
    // this.props.updateName();
  };

  render() {
    return (
<<<<<<< HEAD
      <Fragment>
        {this.props.FormName.map((card) => {
          if (this.props.username === card.created_by) {
            return (
              <div key={card.id} style={{ backgroundColor: "pink" }}>
                {card.title}
                <br />
                <hr />
                {card.description}
                <div>
                  <Link to={`/${card.title}`}>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </Link>
                  <Link to={`/response/${card.title}`}>
                    <Button size="small" color="primary">
                      Responses
                    </Button>
                  </Link>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      card.activationStatus = !card.activationStatus;
                      this.props.updateName(card.id, card);
                      this.setState({ status: !this.state.status });
                      console.log(card);
                    }}
                  >
                    Activate
                  </Button>
                  {this.state.status === true ? "tick" : " cross"}
                </div>
              </div>
            );
          }
        })}
      </Fragment>
=======
      <div>
        {/* <OldForms /> */}
        {this.props.FormName.map((card) => (
          <div
            style={{
              backgroundColor: "#F5FCFF",
              border: ".1vw solid grey",
              padding: "1vw",
              borderRadius: "1vw",
            }}
          >
            <div>
              <h4>
                TITLE: {card.title}
                {this.state.status === true ? (
                  <Button
                    variant="success"
                    style={{
                      float: "right",
                      position: "relative",
                      marginBottom: "1vw",
                    }}
                    onClick={this.onclick}
                  >
                    Activate
                  </Button>
                ) : (
                  <Button
                    variant="danger"
                    style={{
                      float: "right",
                      position: "relative",
                      marginBottom: "1vw",
                    }}
                    onClick={this.onclick}
                  >
                    Deactivate
                  </Button>
                )}
                <br />
                <hr />
              </h4>
            </div>
            DESCRIPTION:{card.description}
            <hr />
            <div
              style={{
                alignItems: "center",
                alignContent: "center",
                textAlign: "center",
              }}
            >
              <Link to={`/${card.title}`}>
                <Button style={{ marginRight: "2vw" }} variant="success">
                  View
                </Button>
              </Link>{" "}
              <Link to={`/response/${card.title}`}>
                <Button style={{ marginRight: "2vw" }} variant="info">
                  Responses
                </Button>
              </Link>{" "}
            </div>
          </div>
        ))}
      </div>
>>>>>>> 998529ce27bfe67a6783c030b94d761d9482d586
    );
  }
}
const mapStateToProps = (state) => ({
  FormName: state.FormName.FormName,
  username: state.Auth.user.username,
});

export default connect(mapStateToProps, { getName, updateName })(PreviousForms);
