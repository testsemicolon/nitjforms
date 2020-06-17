import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getFormTitle } from "../../actions/FormName";
import { getFormField } from "../../actions/CreateForm";
import PropTypes from "prop-types";
import CardForm from "./CardForm";
import ParagraphCard from "./ParagraphCard";
import FieldsProp from "./FieldsProp";

export class PublishForm extends Component {
  submit = (values) => {
    console.log(values);
  };
  render() {
    return (
      <Fragment>
        <FieldsProp onSubmit={this.submit} />
      </Fragment>
    );
  }
}

export default PublishForm;
