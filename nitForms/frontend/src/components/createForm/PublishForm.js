import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getFormTitle } from "../../actions/FormName";
import { getFormField } from "../../actions/CreateForm";
import PropTypes from "prop-types";
import CardForm from "./CardForm";
import ParagraphCard from "./ParagraphCard";
import FieldsProp from "./FieldsProp";

export class PublishForm extends Component {
  render() {
    return (
      <Fragment>
        <FieldsProp />
      </Fragment>
    );
  }
}

export default PublishForm;
