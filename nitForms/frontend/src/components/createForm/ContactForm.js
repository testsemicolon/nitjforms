import React, { Component, Fragment } from "react";
import { Field } from "redux-form";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import { getFormField } from "../../actions/CreateForm";

// import { Form, Field } from "react-final-form";

export class ContactForm extends Component {
  componentDidMount() {
    console.log("sada");
    this.props.getFormField();
  }

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(values);
  // };

  render() {
    return (
      <div>
        {this.props.Forms.map((form1) => (
          <div>
            <label>{form1.question}</label>
            <Field name="firstName" component="input" type="text" />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Forms: state.Forms.Forms,
});

export default connect(mapStateToProps, { getFormField })(ContactForm);

// const ContactForm = (props) => {
//   return (
//     <Form
//       initialValues={{
//         firstName: "Dan",
//       }}
//       onSubmit={(values) => {
//         // send values to the cloud
//       }}
//       validate={(values) => {
//         // do validation here, and return errors object
//       }}
//     >
//       {({ handleSubmit, pristine, form, submitting }) => (
//         <form onSubmit={handleSubmit}>
//           <div>
//             <Field
//               name="firstName"
//               component="input"
//               type="text"
//               placeholder="First Name"
//             />
//           </div>
//           <div>
//             <label>Last Name</label>
//             <Field
//               name="lastName"
//               component="input"
//               type="text"
//               placeholder="Last Name"
//             />
//           </div>
//           <div>
//             <button type="submit" disabled={submitting}>
//               Submit
//             </button>
//             <button
//               type="button"
//               disabled={pristine || submitting}
//               onClick={form.reset}
//             >
//               Clear Values
//             </button>
//           </div>
//         </form>
//       )}
//     </Form>
//   );
// };

// export default ContactForm;
