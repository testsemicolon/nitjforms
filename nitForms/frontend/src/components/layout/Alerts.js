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
    }
    if (message !== prevProps.message) {
      if (message.fieldDelete) alert.success(message.fieldDelete);
      if (message.fieldAdd) alert.success(message.fieldAdd);
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
