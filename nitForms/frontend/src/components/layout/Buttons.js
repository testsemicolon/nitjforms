import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/Auth";
import PropTypes from "prop-types";
import { DropdownButton, Dropdown } from "react-bootstrap";

export class Buttons extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div
        style={{
          marginRight: 0,
          paddingRight: 0,
        }}
      >
        <DropdownButton
          variant="light"
          style={{
            float: "right",
            marginRight: 0,
            paddingRight: 0,
            Color: "#3f51b5",
            position: "relative",
            size: "2vw",
            fontSize: "1vw",
          }}
          id="dropdown-basic-button"
          title={user ? `Welcome ${user.username}` : " "}
        >
          <Dropdown.Item onClick={this.props.logout}>Logout</Dropdown.Item>
        </DropdownButton>
      </div>
    );
    const guestLinks = (
      <div style={{ float: "right" }}>
        <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
      </div>
    );
    return (
      <div className="container">
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.Auth,
});

export default connect(mapStateToProps, { logout })(Buttons);
