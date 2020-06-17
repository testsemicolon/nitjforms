import React, { Component, Fragment } from "react";
import { reduxForm, Field } from "redux-form";
import { getFormField } from "../../actions/CreateForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class ContactForm extends Component {
  // static propTypes = {
  //   Forms: PropTypes.array.isRequired,
  // };

  // componentDidMount() {
  //   this.props.getFormField();
  // }

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(values);
  // };

  render() {
    const handleSubmit = this.props;
    return (
      <Fragment>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field name="firstName" component="input" type="text" />
          </div>
          <div>
            <label>Last Name</label>
            <Field name="lastName" component="input" type="text" />
          </div>
          <div>
            <label>Email</label>
            <Field name="email" component="input" type="email" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </Fragment>
    );
  }
}
// const mapStateToProps = (state) => ({
//   Forms: state.Forms.Forms,
// });

ContactForm = reduxForm({
  form: "contact",
})(ContactForm);

export default ContactForm;
