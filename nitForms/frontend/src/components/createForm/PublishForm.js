import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getField } from "../../actions/CreateForm";
import { getName } from "../../actions/FormName";
import { formSubmit } from "../../actions/SubmitPage";
import PropTypes from "prop-types";

import TextareaAutosize from "react-textarea-autosize";
// import "./style.css";
import { Card } from "react-bootstrap";

export class PublishForm extends Component {
  state = {};
  ftitle = "";
  fdescription = "";
  constructor(props) {
    super(props);
    this.props.getField();
    this.props.getName();

    this.props.FormName.map(
      (form) => (
        (this.ftitle = form.title), (this.fdescription = form.description)
      )
    );
  }

  static propsTypes = {
    Forms: PropTypes.array.isRequired,
    getField: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const quest = this.state;

    function renameKey(obj, old_key, new_key) {
      if (old_key !== new_key) {
        Object.defineProperty(
          obj,
          new_key,

          Object.getOwnPropertyDescriptor(obj, old_key)
        );
        delete obj[old_key];
      }
    }

    Object.keys(quest).map((obj) =>
      renameKey(quest, obj, obj.replace(/[ ]/g, "_"))
    );

    this.props.formSubmit(quest, this.ftitle);

    // {
    //   Object.keys(quest).map((q) => console.log(q.replace(/ /g, "_")));
    // }
  };

  render() {
    return (
      <Fragment>
        <div
          style={{
            fontSize: "2rem",
            justifyContent: "center",
          }}
        >
          Title: {this.ftitle}
          <div
            style={{
              fontSize: "1rem",
              justifyContent: "center",
              color: "grey",
            }}
          >
            <hr />
            Description: {this.fdescription}
          </div>
          <hr />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <form onSubmit={this.onSubmit}>
            {this.props.Forms.map((form) => (
              <div
                key={form.id}
                style={{
                  borderRadius: "5rem",
                  borderWidth: ".5rem",
                  borderColor: "grey",
                  marginTop: "2rem",
                }}
              >
                <Card
                  style={{
                    borderRadius: ".95rem",
                    borderWidth: ".2rem",
                    borderColor: "lightgrey",
                    marginTop: "2rem",
                  }}
                >
                  <div>
                    <Card.Header
                      style={{
                        backgroundColor: "#A2B8FB ",
                        borderRadius: ".75rem .75rem 0 0",
                        width: "40rem",
                      }}
                    >
                      QUESTION
                    </Card.Header>
                    <Card.Body
                      style={{
                        backgroundColor: "#EEF0F7 ",
                        borderRadius: " 0 0 .75rem .75rem",
                      }}
                    >
                      <Card.Title>{form.question}</Card.Title>
                      <Card.Text>
                        <TextareaAutosize
                          name={form.question}
                          style={{ width: "37rem", borderColor: "white" }}
                          onChange={this.onChange}
                          placeholder="Write your answer here..."
                        ></TextareaAutosize>
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </div>
            ))}
            <button
              type="submit"
              style={{ marginTop: "1.5rem", justifyContent: "center" }}
            >
              Submit
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  Forms: state.Forms.Forms,
  FormName: state.FormName.FormName,
});

export default connect(mapStateToProps, { getField, getName, formSubmit })(
  PublishForm
);
