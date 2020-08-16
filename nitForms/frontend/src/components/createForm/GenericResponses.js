import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getGeneric } from "../../actions/CreateForm";
import { Table } from "react-bootstrap";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import ViewIndividualResponse from "./ViewIndividualResponse";

export class GenericResponses extends Component {
  state = {
    flag: false,
  };
  constructor(props) {
    super(props);
    this.props.getGeneric(this.props.title);
  }

  componentDidMount() {
    this.props.SharedUsers.map((a) => {
      if (a.formName === this.props.title) {
        a.userName.map((a1) => {
          if (a1 === this.props.created_by1) {
            this.setState({ flag: true });
          }
        });
      }
    });
  }

  render() {
    if (
      this.props.created_by1 === this.props.created_by ||
      this.state.flag === true
    ) {
      const title1 = this.props.title;
      return (
        <Fragment>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="download-table-xls-button"
            table={this.props.title}
            filename={this.props.title}
            sheet={this.props.title}
            buttonText="Download as XLS"
            style={{
              backgroundColor: "orange",
              color: "white",
              boxShadow: ".3vw .3vw .3vw grey",
            }}
          />
          <h3 style={{ textAlign: "center" }}>
            Responses for {this.props.title}
          </h3>
          <hr />
          <br />
          <div>
            <Table striped bordered hover responsive id={this.props.title}>
              {/* <thead>
              {Object.keys(this.props.Forms).map((quest) => console.log(quest))};
              
            </thead> */}
              <tbody>
                {Object.entries(this.props.Forms).map(([key, value]) => {
                  return (
                    <Fragment key={key}>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <Link
                            to={"/viewindividualresponse/" + key + "/" + title1}
                          >
                            <Button
                              style={{
                                backgroundColor: "orange",
                                color: "white",
                                boxShadow: ".3vw .3vw .3vw grey",
                                borderWidth: 0,
                              }}
                            >
                              View
                            </Button>
                          </Link>
                        </td>

                        {Object.entries(value).map(([question, answer]) => {
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
                        })}
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Fragment>
      );
    } else {
      return (
        <div>
          <hr />
          <h3 style={{ textAlign: "center" }}>
            Not authorized to view responses!!
          </h3>
          <hr />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  Forms: state.Forms.Forms,
  created_by1: state.Auth.user.username,
  SharedUsers: state.SharedUsers.SharedUsers,
});

export default connect(mapStateToProps, { getGeneric })(GenericResponses);
