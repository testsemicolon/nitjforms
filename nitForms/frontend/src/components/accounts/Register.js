import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/Auth";
import PropTypes from "prop-types";
import { createMessage } from "../../actions/Messages";

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
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  toggleChange1 = () => {
    console.log("asdasd1");
    this.setState({ can_generate_form: !this.state.can_generate_form });
  };
  toggleChange2 = () => {
    console.log("asdasd2");
    this.setState({ can_generate_template: !this.state.can_generate_template });
  };
  toggleChange3 = () => {
    console.log("asdasd3");
    this.setState({ can_make_noting: !this.state.can_make_noting });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("asdasd");
    const {
      username,
      email,
      password,
      password2,
      can_generate_form,
      can_generate_template,
      can_make_noting,
    } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordsNotMatch: "Passwords do not match" });
    } else {
      const newUser = {
        username,
        password,
        email,
        can_generate_form,
        can_generate_template,
        can_make_noting,
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
            <input
              name="can_generate_form"
              onChange={this.toggleChange1}
              value={can_generate_form}
              type="checkbox"
            />
            <label>Can Generate Forms</label>
            <br />
            <input
              name="can_generate_template"
              onChange={this.toggleChange2}
              value={can_generate_template}
              type="checkbox"
            />
            <label>Can Generate Template</label>
            <br />
            <input
              name="can_make_noting"
              onChange={this.toggleChange3}
              value={can_make_noting}
              type="checkbox"
            />
            <label>Can Make Noting</label>
            <br />
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
