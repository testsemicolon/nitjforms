import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { getName, updateName } from "../../actions/FormName";
import { Card } from "@material-ui/core";

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
      <Fragment>
        {this.props.FormName.map((card) => {
          if (this.props.username === card.created_by) {
            return (
              <div
                key={card.id}
                style={{
                  backgroundColor: "#F5FCFF",
                  border: ".1vw solid grey",
                  padding: "1vw",
                  borderRadius: "1vw",
                }}
              >
                <h4>
                  TITLE: {card.title}
                  {card.activationStatus === true ? (
                    <Button
                      variant="danger"
                      style={{
                        float: "right",
                        position: "relative",
                        marginBottom: "1vw",
                      }}
                      onClick={() => {
                        card.activationStatus = !card.activationStatus;
                        this.props.updateName(card.id, card);
                        this.setState({ status: !this.state.status });
                        console.log(card);
                      }}
                    >
                      Deactivate
                    </Button>
                  ) : (
                    <Button
                      variant="success"
                      style={{
                        float: "right",
                        position: "relative",
                        marginBottom: "1vw",
                      }}
                      onClick={() => {
                        card.activationStatus = !card.activationStatus;
                        this.props.updateName(card.id, card);
                        this.setState({ status: !this.state.status });
                        console.log(card);
                      }}
                    >
                      Activate
                    </Button>
                  )}
                  <br />
                  <hr />
                </h4>
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
            );
          }
        })}
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  FormName: state.FormName.FormName,
  username: state.Auth.user.username,
});

export default connect(mapStateToProps, { getName, updateName })(PreviousForms);
