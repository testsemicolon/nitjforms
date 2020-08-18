import React, { Component, Fragment } from "react";
import AutoComplete from "./AutoComplete";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";
import { connect } from "react-redux";
import { getAccepted } from "../../actions/AcceptedResponse";
import { Table } from "react-bootstrap";
import DownloadLink from "react-download-link";
import { Button } from "react-bootstrap";
import DisplayEditor from "./DisplayEditor";
import { Link } from "react-router-dom";
import { getNotingTemplate } from "../../actions/NotingTemplate";

export class AcceptedResponses extends Component {
  state = {
    content: "",
    flag: false,
  };
  created_by2 = "";
  constructor(props) {
    super(props);
    console.log(this.props.match.params.title);
    this.props.getAccepted(this.props.match.params.title);
    this.props.getNotingTemplate();

    {
      this.props.FormName.map((a) => {
        this.created_by2 = a.created_by;
      });
    }
    console.log(this.created_by2, this.props.created_by1);
  }

  componentDidMount() {
    this.props.SharedUsers.map((a) => {
      if (a.formName === this.props.match.params.title) {
        a.userName.map((a1) => {
          if (a1 === this.props.created_by1) {
            this.setState({ flag: true });
          }
        });
      }
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.content);
  };

  render() {
    if (
      this.created_by2 === this.props.created_by1 ||
      this.state.flag === true
    ) {
      const title1 = this.props.match.params.title;
      return (
        <Fragment>
          {/* <div
            style={{
              position: "relative",
              float: "left",
              width: "35vw",
            }}
          >
            <h3 style={{ textAlign: "center" }}>Noting Template Generation</h3>
            <hr />
            <form onSubmit={this.onSubmit}>
              <div
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "2vw",
                }}
              >
                <DisplayEditor />
                <Button variant="outline-success" type="submit">
                  <DownloadLink
                    style={{ font: "white" }}
                    label="SUBMIT AND DOWNLOAD"
                    filename="myfile.html"
                    exportFile={() => this.state.content}
                  />
                </Button>
              </div>
            </form>
          </div> */}
          <div
            style={{
              // position: "relative",
              // float: "right",

              marginLeft: "auto",
              marginRight: "auto",
              width: "50vw",
            }}
          >
            <h3 style={{ textAlign: "center" }}>Accepted Responses</h3>
            <hr />
            <Table striped bordered hover responsive id={this.props.title}>
              {/* <thead>
          {Object.keys(this.props.Forms).map((quest) => console.log(quest))};
          
        </thead> */}
              <tbody>
                {Object.entries(this.props.AcceptedResponse).map(
                  ([key, value]) => {
                    console.log(value);
                    return (
                      <Fragment key={key}>
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            <Link
                              to={
                                "/viewresponsenotegenerate/" +
                                key +
                                "/" +
                                title1 +
                                "/" +
                                value.id
                              }
                            >
                              <Button
                                style={{
                                  backgroundColor: "#66a3ff",
                                  color: "white",
                                  boxShadow: ".3vw .3vw .3vw lightgray",
                                  borderWidth: 0,
                                }}
                              >
                                View
                              </Button>
                            </Link>
                          </td>
                          {Object.entries(value).map(([question, answer]) => {
                            if (
                              (question !== "comment") &
                              (question !== "forwardTo") &
                              (question !== "responseTime")
                            ) {
                              return (
                                <Fragment key={question}>
                                  <td
                                    style={{
                                      alignContent: "center",
                                      alignItems: "center",
                                      textAlign: "center",
                                    }}
                                  >
                                    <strong>{question.toUpperCase()}</strong>
                                    <br />
                                    {answer}
                                  </td>
                                </Fragment>
                              );
                            }
                          })}
                        </tr>
                      </Fragment>
                    );
                  }
                )}
              </tbody>
            </Table>
          </div>
        </Fragment>
      );
    } else {
      return (
        <div>
          <hr />
          <h4 style={{ textAlign: "center" }}>
            Not authorized to view responses!
          </h4>
          <hr />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  AcceptedResponse: state.AcceptedResponse.AcceptedResponse,
  FormName: state.FormName.FormName,
  created_by1: state.Auth.user.username,
  SharedUsers: state.SharedUsers.SharedUsers,
});

export default connect(mapStateToProps, { getAccepted, getNotingTemplate })(
  AcceptedResponses
);
