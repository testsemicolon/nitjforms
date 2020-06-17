import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getFormTitle } from "../../actions/FormName";
import { getFormField } from "../../actions/CreateForm";
import PropTypes from "prop-types";
import ContactForm from "./ContactForm";

export class FieldsProp extends Component {
  static propTypes = {
    FormName: PropTypes.array.isRequired,
    Forms: PropTypes.array.isRequired,
    getFormTitle: PropTypes.func.isRequired,
    getFormField: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getFormField();
    this.props.getFormTitle();
  }

  submit = (values) => {
    // print the form values to the console
    console.log(values);
  };
  render() {
    return this.props.Forms.map((form) => (
      <ContactForm key={form.id} name={form.question} />
    ));
  }
}
const mapStateToProps = (state) => ({
  FormName: state.FormName.FormName,
  Forms: state.Forms.Forms,
});
export default connect(mapStateToProps, { getFormTitle, getFormField })(
  FieldsProp
);
