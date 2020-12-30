import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { hashHistory } from "react-router";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import {
  getField,
  deleteField,
  submitForm,
  addGeneric,
} from "../../actions/CreateForm";
import PropTypes from "prop-types";

export class FormItems extends Component {
  state = {
    open: false,
  };

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
    this.setState({ open: false });
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
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
                    style={{ fontFamily: "Times New Roman" }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button style={btnStyle} onClick={this.onOpenModal}>
          Publish
        </button>
        <Modal open={open} onClose={this.onCloseModal}>
          <p>
            <h3>Declaration</h3>
            <h4>
              <input
                type="checkbox"
                style={{
                  height: "1.5vw",
                  width: "1.5vw",
                }}
                name="vehicle1"
                value="Bike"
              ></input>
              {"  "}I, hereby declare to Publish this form
            </h4>
            .
          </p>
          <form onSubmit={this.onSubmit}>
            <button type="submit" style={btnStyle}>
              PUBLISH FORM
            </button>
          </form>
        </Modal>
      </Fragment>
    );
  }
}

const btnStyle = {
  background: "#e0777d",
  boxShadow: ".3vw .3vw .3vw lightgray",
  color: "#fff",
  flex: "1",
  // paddingLeft: ".5vw",
  // paddingRight: ".5vw",
  paddingLeft: "1.3vw",
  paddingRight: "1.3vw",
  paddingTop: ".4vw",
  paddingBottom: ".4vw",
  borderRadius: ".3rem",
  borderWidth: "0rem",
  display: "flex",
  marginLeft: "auto",
  fontFamily: "Times New Roman",
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
