import React from "react";
import { Field, reduxForm } from "redux-form";

let ContactForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div key="01">
        <label>Hello</label>
        <Field name="hello" component="input" type="text" key="11" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

ContactForm = reduxForm({
  form: "contact",
})(ContactForm);

export default ContactForm;
