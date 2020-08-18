import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { hashHistory } from "react-router";

import {
  getField,
  deleteField,
  submitForm,
  addGeneric,
} from "../../actions/CreateForm";
import PropTypes from "prop-types";

export class FormItems extends Component {
  static propTypes = {
    Forms: PropTypes.array.isRequired,
    getField: PropTypes.func.isRequired,
    deleteField: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getField();
  }

  onSubmit = (e) => {
    e.preventDefault();
    var title = this.props.title;
    {
      this.props.Forms.map((form) =>
        this.props.addGeneric(title, form.question, form.inputType)
      );
    }
    this.props.submitForm();
  };

  render() {
    return (
      <Fragment>
        <h3> Forms</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>QUESTION</th>
              <th>INPUT FIELD</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.Forms.map((Form) => (
              <tr key={Form.id}>
                <td>{Form.id}</td>
                <td>{Form.question}</td>
                <td>{Form.inputType}</td>
                <td>
                  <button
                    onClick={this.props.deleteField.bind(this, Form.id)}
                    className="btn btn-danger btn-sm"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form onSubmit={this.onSubmit}>
          <button type="submit" style={btnStyle}>
            PUBLISH FORM
          </button>
        </form>
      </Fragment>
    );
  }
}

const btnStyle = {
  background: "#66a3ff",
  boxShadow: ".3vw .3vw .3vw lightgray",
  color: "#fff",
  flex: "1",
  padding: "5px",
  borderRadius: ".3rem",
  borderWidth: "0rem",
  display: "flex",
  marginLeft: "auto",
};

const mapStateToProps = (state) => ({
  Forms: state.Forms.Forms,
});

export default connect(mapStateToProps, {
  getField,
  deleteField,
  submitForm,
  addGeneric,
})(withRouter(FormItems));
