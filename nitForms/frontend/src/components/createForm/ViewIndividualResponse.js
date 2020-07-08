import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getGeneric } from "../../actions/CreateForm";
import { Table } from "react-bootstrap";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { Button } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import { Card } from "react-bootstrap";

export class ViewIndividualResponse extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    let value1 = this.props.match.params.value;

    console.log(value1);

    return (
      <Fragment>
        {Object.entries(this.props.Forms).map(([key, value]) => {
          if (key === value1)
            return (
              <Fragment key={key}>
                {Object.entries(value).map(([question, answer]) => {
                  return (
                    <Fragment key={question}>
                      {console.log(question)}
                      <strong>{question.toUpperCase()}</strong>
                      <br />
                      {answer}
                    </Fragment>
                  );
                })}
              </Fragment>
            );
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  Forms: state.Forms.Forms,
  created_by1: state.Auth.user.username,
});

export default connect(mapStateToProps)(ViewIndividualResponse);
