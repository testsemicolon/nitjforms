import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.question)
        alert.error(`Question: ${error.msg.question.join()}`);
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
      if (error.msg.username) alert.error(error.msg.username.join());
    }
    if (message !== prevProps.message) {
      if (message.fieldDelete) alert.success(message.fieldDelete);
      if (message.fieldAdd) alert.success(message.fieldAdd);
      if (message.passwordsNotMatch) alert.error(message.passwordsNotMatch);
      if (message.submitForm) alert.success(message.submitForm);
      if (message.sharedUser) alert.success(message.sharedUser);
      if (message.notingPost) alert.success(message.notingPost);
      if (message.formCreated) alert.success(message.formCreated);
      if (message.commentAdded) alert.success(message.commentAdded);
      if (message.ResponseRejected) alert.error(message.ResponseRejected);
      if (message.generateNoting) alert.success(message.generateNoting);
      if (message.forwardMessage) alert.success(message.forwardMessage);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.Errors,
  message: state.Messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
