import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addName, postName, getName } from "../../actions/FormName";
import { withRouter, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import { getperm } from "../../actions/common";
import PropTypes from "prop-types";

export class FormName extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    title: "",
    description: "",
    flag: false,
  };

  // static = {
  //   userperm: PropTypes.array.isRequired,
  //   getperm: PropTypes.func.isRequired,
  // };

  componentDidMount() {
    this.props.getperm();
    console.log("called");
    console.log(typeof this.props.userperm);
    {
      Object.keys(this.props.userperm).map(([key, value]) => {
        console.log(key);
      });
    }
    // {
    //   this.props.userperm.map((a) => console.log(a));
    // }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const created_by = this.props.created_by;
    const { title, description } = this.state;
    const desc = { title, description, created_by };
    console.log(desc);
    this.props.addName(desc);
    this.setState({ flag: true });
  };

  render() {
    // if(this.props.created_by in this.props.userperm){
    //   return
    const { title, description } = this.state;
    if (this.state.flag) {
      return <Dashboard title={this.state.title} />;
    }
    return (
      <Fragment>
        <div
          style={{
            wordWrap: "break-word",
            marginLeft: "auto",
            fontSize: "2.3rem",
            textAlign: "center",
            marginRight: "5rem",
          }}
        >
          TITLE: {title.toUpperCase()}
          <p style={{ fontSize: "1rem", color: "grey", textAlign: "center" }}>
            Please fill in the Title and the Description of your form!!
          </p>
        </div>

        <form onSubmit={this.onSubmit}>
          <div
            className="card card-body mt-4 mb-4"
            style={{ borderWidth: "0.1rem" }}
          >
            <div className="form-group">
              <input
                name="title"
                type="text"
                value={title}
                onChange={this.onChange}
                className="form-control"
                placeholder="Untitled Form"
                style={{ color: "black" }}
              />
            </div>
            <div className="form-group">
              <input
                name="description"
                type="text"
                value={description}
                onChange={this.onChange}
                className="form-control"
                placeholder="Form description"
                style={{ color: "black" }}
              />
            </div>
            <button className="form-group" style={btnStyle} type="submit">
              CREATE FORM
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

const btnStyle = {
  background: "#3f51b5",
  color: "#fff",
  padding: ".4rem",
  borderRadius: ".3rem",
  borderColor: "black",
  borderWidth: "0rem",
  width: "12rem",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  marginLeft: "auto",
};

const mapStateToProps = (state) => ({
  created_by: state.Auth.user.username,
  userperm: state.userperm.userperm,
});

export default connect(mapStateToProps, { getperm, addName })(FormName);
