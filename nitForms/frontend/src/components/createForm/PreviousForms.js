import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { getName, updateName } from "../../actions/FormName";
import { shadows } from "@material-ui/system";
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
                  backgroundColor: "#eeeeee",
                  // border: ".1vw solid #009999",
                  paddingLeft: "3.5vw",
                  paddingRight: "3.5VW",
                  paddingTop: "1.5vw",
                  paddingBottom: "1vw",
                  borderRadius: "0.8vw",
                  marginBottom: "1VW",
                  width: "55vw",
                  marginLeft: "auto",
                  marginRight: "auto",
                  boxShadow: ".3vw .3vw .5vw silver",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingBottom: 0,
                    paddingTop: ".7vw",
                    paddingLeft: ".7vw",
                    paddingRight: ".7vw",
                    borderRadius: "1vw",
                    boxShadow: ".3vw .3vw .5vw silver",
                  }}
                >
                  <h4>
                    TITLE: {card.title}
                    {card.activationStatus === true ? (
                      <Button
                        style={{
                          float: "right",
                          position: "relative",
                          marginBottom: "1vw",
                          backgroundColor: "red",
                          boxShadow: ".3vw .3vw .3vw lightgray",
                          border: 0,
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
                        style={{
                          float: "right",
                          position: "relative",
                          marginBottom: "1vw",
                          backgroundColor: "green",
                          boxShadow: ".3vw .3vw .3vw lightgray ",
                          border: 0,
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
                </div>
                <div
                  style={{
                    alignItems: "center",
                    alignContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Link to={`/${card.title}`}>
                    <Button
                      style={{
                        marginRight: "1vw",
                        backgroundColor: "#66a3ff",
                        boxShadow: ".3vw .3vw .3vw lightgray",
                        borderWidth: 0,
                      }}
                    >
                      View
                    </Button>
                  </Link>{" "}
                  <Link to={`/response/${card.title}`}>
                    <Button
                      style={{
                        marginRight: "2vw",
                        backgroundColor: "white",
                        color: "#66a3ff",
                        border: " 0.06vw solid #66a3ff",
                        boxShadow: ".3vw .3vw .3vw lightgray",
                      }}
                    >
                      Responses
                    </Button>
                  </Link>{" "}
                </div>
              </div>
            );
          } else return <h1>No Forms</h1>;
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
