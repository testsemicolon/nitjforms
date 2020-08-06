import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Card } from "@material-ui/core";
import { Button } from "react-bootstrap";

import { OldForms } from "./OldForms";
import { getName } from "../../actions/FormName";
import { Link } from "react-router-dom";
import { getPerm } from "../../actions/common";

class PreviousForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
    this.props.getName();
    this.props.getPerm();
  }
  onclick = (e) => {
    e.preventDefault();
    this.setState({ status: !this.state.status });
  };

  static = {
    FormName: PropTypes.array.isRequired,
  };

  render() {
    return (
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
    );
  }
}
const mapStateToProps = (state) => ({
  FormName: state.FormName.FormName,
  Userperm: state.Userperm.Userperm,
});

export default connect(mapStateToProps, { getPerm, getName })(PreviousForms);
