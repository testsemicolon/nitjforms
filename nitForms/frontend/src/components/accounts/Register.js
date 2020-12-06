import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/Auth";
import PropTypes from "prop-types";
import { createMessage } from "../../actions/Messages";
// import Dropdown from "react-dropdown";
import { DropdownButton, Dropdown } from "react-bootstrap";

export class Register extends Component {
  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    can_generate_form: false,
    can_generate_template: false,
    can_make_noting: false,
    department: "",
    instituteName: "",
    userType: "",
  };
  // options = ["one", "two", "three"];
  // defaultOption = this.options[0];
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChangeDept = (e) => {
    this.setState({ department: e });
  };
  onChangeType = (e) => {
    this.setState({ userType: e });
  };
  onChangeInstitute = (e) => {
    this.setState({ instituteName: e });
  };
  toggleChange1 = () => {
    this.setState({ can_generate_form: !this.state.can_generate_form });
  };
  toggleChange2 = () => {
    this.setState({ can_generate_template: !this.state.can_generate_template });
  };
  toggleChange3 = () => {
    this.setState({ can_make_noting: !this.state.can_make_noting });
  };

  onSubmit = (e) => {
    e.preventDefault();
    var {
      username,
      email,
      password,
      password2,
      can_generate_form,
      can_generate_template,
      can_make_noting,
      department,
      instituteName,
      userType,
    } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordsNotMatch: "Passwords do not match" });
    } else {
      if (userType === "Super Admin") {
        console.log("super");
        can_generate_form = true;
        can_generate_template = true;
        can_make_noting = true;
      } else if (userType === "Admin") {
        can_generate_form = false;
        can_generate_template = false;
        can_make_noting = true;
      } else if (userType === "User") {
        can_generate_form = false;
        can_generate_template = false;
        can_make_noting = false;
      }

      const newUser = {
        username,
        password,
        email,
        can_generate_form,
        can_generate_template,
        can_make_noting,
        userType,
        department,
        instituteName,
      };

      console.log(newUser);
      this.props.register(newUser);
    }
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const {
      username,
      email,
      password,
      password2,
      can_generate_form,
      can_generate_template,
      can_make_noting,
      department,
      instituteName,
      userType,
    } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={this.onChange}
                value={password2}
              />
            </div>
            <DropdownButton
              variant="light"
              style={{
                size: "2vw",
                fontSize: "1vw",
              }}
              id="dropdown-basic-button"
              title={userType}
              value={userType}
              name="userType"
              onSelect={this.onChangeType}
            >
              <Dropdown.Item eventKey="Super Admin">Super Admin</Dropdown.Item>
              <Dropdown.Item eventKey="Admin">Admin</Dropdown.Item>
              <Dropdown.Item eventKey="User">User</Dropdown.Item>
            </DropdownButton>
            <br />
            <DropdownButton
              variant="light"
              style={{
                size: "2vw",
                fontSize: "1vw",
              }}
              id="dropdown-basic-button"
              title={instituteName}
              value={instituteName}
              name="instituteName"
              onSelect={this.onChangeInstitute}
            >
              <Dropdown.Item eventKey="NITJ">NITJ</Dropdown.Item>
              <Dropdown.Item eventKey="THAPAR">THAPAR</Dropdown.Item>
            </DropdownButton>
            {/*<Dropdown
              options={this.options}
              onChange={this.onChange}
              name="department"
              value={this.defaultOption}
              placeholder="Select an option"
             />*/}
            <DropdownButton
              variant="light"
              style={{
                size: "2vw",
                fontSize: "1vw",
              }}
              id="dropdown-basic-button"
              title={department}
              value={department}
              name="department"
              onSelect={this.onChangeDept}
            >
              <Dropdown.Item eventKey="Director">Director</Dropdown.Item>
              <Dropdown.Item eventKey="Dept1">Dept 1</Dropdown.Item>
              <Dropdown.Item eventKey="Dept2">Dept 2</Dropdown.Item>
              <Dropdown.Item eventKey="Dept3">Dept 3</Dropdown.Item>
            </DropdownButton>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Already have an account?<Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
