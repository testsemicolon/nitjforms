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
  constructor(props) {
    super(props);
    this.props.getGeneric(this.props.title);
    console.log(this.props.created_by1, this.props.created_by);
  }

  onClick = () => {
    console.log("hello");
    return (
      <div>
        <ViewIndividualResponse />
      </div>
    );
  };

  componentDidMount() {}

  render() {
    if (this.props.created_by1 === this.props.created_by) {
      return (
        <Fragment>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="download-table-xls-button"
            table={this.props.title}
            filename={this.props.title}
            sheet={this.props.title}
            buttonText="Download as XLS"
          />

          <h3 style={{ textAlign: "center" }}>Response</h3>
          <h1>hello</h1>
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
                        <td>
                          <Link to={"/viewindividualresponse/" + key}>
                            <Button>View</Button>
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
          <h1>Not authorized to view responses</h1>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  Forms: state.Forms.Forms,
  created_by1: state.Auth.user.username,
});

export default connect(mapStateToProps, { getGeneric })(GenericResponses);
