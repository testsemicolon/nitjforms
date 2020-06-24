import React, { Component } from "react";
import { connect } from "react-redux";
import { getFormView } from "../../actions/CreateForm";

export class GenericForm extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.Forms);
    this.props.getFormView(this.props.title);
  }
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

const mapStateToProps = (state) => ({
  Forms: state.Forms.Forms,
});

export default connect(mapStateToProps, { getFormView })(GenericForm);
