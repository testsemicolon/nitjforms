import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addName, linkForm } from "../../actions/FormName";
import Dashboard from "./Dashboard";

import HorizontalNonLinearStepper from "./progressBar";

export class FormName extends Component {
  state = {
    title: "",
    description: "",
    flag: false,
  };
  prevForm = {};

  componentDidMount() {
    this.props.FormName.map((name) => (this.prevForm = name));
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    var department = this.props.Department;
    const created_by = this.props.created_by;
    const { title, description } = this.state;
    const desc = { title, description, created_by, department };
    this.props.addName(desc);
    if (this.props.Forms.length !== 0) {
      console.log(typeof this.props.Forms);
      this.prevForm.linkedForms.push(title);
      console.log(this.prevForm);
      this.props.linkForm(this.prevForm.id, this.prevForm);
    }
    this.setState({ flag: true });
  };

  render() {
    const { title, description } = this.state;
    if (this.state.flag) {
      return <Dashboard title={this.state.title} />;
    }

    if (this.props.canGenerateForm) {
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
    } else {
      return (
        <div>
          <h1>Not authorized to create forms</h1>
        </div>
      );
    }
  }
}

const btnStyle = {
  background: "#e0777d",
  boxShadow: ".3vw .3vw .3vw lightgray",
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
  fontFamily: "Times New Roman",
};

const mapStateToProps = (state) => ({
  canGenerateForm: state.Auth.user.can_generate_form,
  created_by: state.Auth.user.username,
  Forms: state.Forms.Forms,
  FormName: state.FormName.FormName,
  Department: state.Auth.user.department,
});

export default connect(mapStateToProps, { addName, linkForm })(FormName);
