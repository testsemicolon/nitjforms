import React, { Component } from "react";
import PropTypes from "prop-types";

class SplitScreen extends Component {
  render() {
    const { topPane, bottomPane } = this.props;

    return (
      <div className={styles.splitScreen}>
        <div className={styles.topPane}>{topPane}</div>
        <div className={styles.bottomPane}>{bottomPane}</div>
      </div>
    );
  }
}

SplitScreen.propTypes = {
  topPane: PropTypes.node.isRequired,
  bottomPane: PropTypes.node.isRequired,
};

export default SplitScreen;
