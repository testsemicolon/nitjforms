import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getFormView } from "../../actions/CreateForm";

export class GenericForm extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.Forms);
    this.props.getFormView(this.props.title);
  }
  render() {
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        {this.props.Forms.map((form) => (
          <h3>{form.question}</h3>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  Forms: state.Forms.Forms,
});

export default connect(mapStateToProps, { getFormView })(GenericForm);
