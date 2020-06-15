import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/Auth";
import PropTypes from "prop-types";

export class Buttons extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const authLinks = (
      <div style={{ float: "right" }}>
        <button onClick={this.props.logout} className="nav-link btn btn-info">
          Logout
        </button>
      </div>
    );
    const guestLinks = (
      <div style={{ float: "right" }}>
        <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
      </div>
    );
    return (
      <div className="container">
        {this.props.auth.isAuthenticated ? authLinks : guestLinks}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.Auth,
});

export default connect(mapStateToProps, { logout })(Buttons);
