import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addName, postName, getName } from "../../actions/FormName";
import { withRouter } from "react-router-dom";

export class FormName extends Component {
  state = {
    title: "",
    description: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { title, description } = this.state;
    const desc = { title, description };
    this.props.addName(desc);
    this.props.history.push("/formfield");
  };

  render() {
    const { title, description } = this.state;
    return (
      <Fragment>
        <div className="card card-body mt-4 mb-4">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                name="title"
                type="text"
                value={title}
                onChange={this.onChange}
                className="form-control"
                placeholder="Untitled Form"
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
              />
            </div>
            <button style={btnStyle} type="submit">
              CREATE FORM
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

const btnStyle = {
  float: "centre",
  background: "#2191db",
  color: "#fff",
  flex: "1",
  padding: "5px",
};

// const mapStateToProps = (state) => ({
//   FormName: state.FormName.FormName,
// });
export default connect(null, { addName })(FormName);
