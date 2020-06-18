import React, { Component, Fragment } from "react";

import { getFormField } from "../../actions/CreateForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";

// export class ContactForm extends Component {
//   // static propTypes = {
//   //   Forms: PropTypes.array.isRequired,
//   // };

//   // componentDidMount() {
//   //   this.props.getFormField();
//   // }

//   // onSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log(values);
//   // };

//   render() {
//     const handleSubmit = this.props;
//     return (
//       <Fragment>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>First Name</label>
//             <Field name="firstName" component="input" type="text" />
//           </div>
//           <div>
//             <label>Last Name</label>
//             <Field name="lastName" component="input" type="text" />
//           </div>
//           <div>
//             <label>Email</label>
//             <Field name="email" component="input" type="email" />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </Fragment>
//     );
//   }
// }
// // const mapStateToProps = (state) => ({
// //   Forms: state.Forms.Forms,
// // });

// ContactForm = reduxForm({
//   form: "contact",
// })(ContactForm);

// export default ContactForm;

const ContactForm = (props) => {
  return (
    <Form
      initialValues={{
        firstName: "Dan",
      }}
      onSubmit={(values) => {
        // send values to the cloud
      }}
      validate={(values) => {
        // do validation here, and return errors object
      }}
    >
      {({ handleSubmit, pristine, form, submitting }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            <button
              type="button"
              disabled={pristine || submitting}
              onClick={form.reset}
            >
              Clear Values
            </button>
          </div>
        </form>
      )}
    </Form>
  );
};

export default ContactForm;




