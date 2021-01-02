import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col,
} from "shards-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import store from "../../../store";
import { createMessage } from "../../../actions/Messages";
import { putResponse } from "../../../actions/AcceptedResponse";
import { putDeptDetailsCommit } from "../../../actions/DirectorDashboardActions";

export class Discussions extends Component {
  onClickMessage = (responseType, response, formName) => {
    if (responseType === "Accept") {
      store.dispatch(
        createMessage({
          acceptCommitMessage: `You have committed the amount of Rs${response.recommendedAmount} from ${response.userDept}`,
        })
      );
      response["committedAmount"] = parseInt(response["recommendedAmount"]);
      response["recommendedAmount"] = 0;
      delete response["formName"];
      delete response["link"];
      console.log(response);
      this.props.putResponse(response.id, formName, response); // this function is for change in response of user
      this.props.putDeptDetailsCommit(
        response.userDept,
        response.committedAmount,
        responseType
      ); // this function is for change in department details
      console.log(this.props);
      this.forceUpdate();
      console.log("update");
    } else if (responseType === "Reject") {
      store.dispatch(
        createMessage({
          rejectCommitMessage: `You have rejected the recomendation of Rs${response.recommendedAmount} `,
        })
      );
      response["recommendedAmount"] = 0;

      // this.props.putResponse(response.id, formName, response);
      // this.props.putDeptDetails(response.userDept, response.recommendedAmount);
    }
  };

  render() {
    return (
      <div>
        <Card small className="blog-comments">
          <CardHeader className="border-bottom">
            <h6 className="m-0">form approvals</h6>
          </CardHeader>
          <CardBody className="p-0">
            {this.props.Response.map((re) => {
              return re.map((res) => {
                return (
                  <div key={res.acceptedResponseID}>
                    <div className="blog-comments__content">
                      <div>
                        {res.formName}
                        {/* <span className="text-mutes"> */}
                        {/* {res.acceptedResponseID} */}
                        <table
                          style={{
                            margin: "auto",
                            padding: "2vw",
                          }}
                        >
                          <tr>
                            <strong>
                              <td>Username</td>
                            </strong>
                            <td>{res.userName} </td>
                          </tr>
                          <tr>
                            <strong>
                              <td>User Department</td>
                            </strong>
                            <td>{res.userDept}</td>
                          </tr>
                        </table>
                        {/* </span> */}
                      </div>

                      {/* <h3>{res.acceptedResponseID}</h3> */}
                      <p className="m-0 my-1 mb-2 text-muted">
                        Recommended Amount Rs.{res.recommendedAmount}
                      </p>

                      <div className="blog-comments__actions">
                        {/* <ButtonGroup size="lg"> */}
                        <Link to={res.link}>
                          <Button
                            theme="white"
                            style={{ fontSize: "1vw", padding: ".4vw" }}
                          >
                            View Timeline
                          </Button>
                        </Link>

                        <Button
                          theme="white"
                          onClick={() =>
                            this.onClickMessage("Accept", res, res.formName)
                          }
                          style={{ fontSize: "1vw", padding: ".4vw" }}
                        >
                          <span className="text-light">
                            <i className="material-icons">more_vert</i>
                          </span>{" "}
                          Accept
                        </Button>
                        <Button
                          theme="white"
                          onClick={() =>
                            this.onClickMessage("Reject", res, res.formName)
                          }
                          style={{ fontSize: "1vw", padding: ".4vw" }}
                        >
                          <span className="text-danger">
                            <i className="material-icons">clear</i>
                          </span>{" "}
                          Reject
                        </Button>
                        {/* </ButtonGroup> */}
                      </div>
                    </div>
                  </div>
                );
              });
            })}
          </CardBody>
          <CardFooter className="border-top">
            <Row>
              <Col className="text-center view-report">
                <Button theme="white" type="submit">
                  View All Discussions
                </Button>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Response: state.Response.Response,
  username: state.Auth.user.username,
});

export default connect(mapStateToProps, { putResponse, putDeptDetailsCommit })(
  Discussions
);
