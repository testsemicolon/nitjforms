import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getFormView } from "../../actions/CreateForm";
import { getName } from "../../actions/FormName";
import { formSubmit } from "../../actions/SubmitPage";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "react-bootstrap";

import TextareaAutosize from "react-textarea-autosize";
// import "./style.css";
import { Card } from "react-bootstrap";

export class PublishForm extends Component {
  state = {
    value: "",
    copied: false,
  };
  ftitle = "";
  fdescription = "";

  constructor(props) {
    super(props);
    this.props.getName();
    this.props.FormName.map(
      (form) => (
        (this.ftitle = form.title), (this.fdescription = form.description)
      )
    );
  }
  componentDidMount() {
    console.log(this.ftitle);
    this.props.getFormView(this.ftitle);
  }
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
  };

  render() {
    this.state.value = "localhost:8000${this.ftitle}";
    return (
      <Fragment>
        <div
          style={{
            fontSize: "2rem",
            textAlign: "center",
            border: ".1vw solid lightgrey",
            padding: "2vw",
          }}
        >
          Title: {this.ftitle}
          {/* <Link to={`/response/${this.ftitle}`}>
            <button
              style={{
                fontSize: "1.5rem",
                justifyContent: "center",
                color: "black",
                marginLeft: "45rem",
              }}
            >
              response
            </button>
          </Link> */}
          <div
            style={{
              fontSize: "1rem",
              justifyContent: "center",
              color: "grey",
              border: ".1vw solid lightgrey",
            }}
          >
            <hr
              style={{
                width: "20vw",
              }}
            />
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

            alignItems: "center",
          }}
        >
          Your form has been created!
        </div>
        <br />
        <div style={{ textAlign: "center", alignItems: "center" }}>
          <Link to={`/${this.ftitle}`}>
            <Button variant="outline-warning">Go to form</Button>
          </Link>
          <Button
            style={{
              width: "2vw",
              backgroundColor: "transparent",
              borderWidth: 0,
            }}
          >
            {" "}
          </Button>
          <CopyToClipboard
            text={`localhost:8000/#/${this.ftitle}`}
            onCopy={() => this.setState({ copied: true })}
          >
            <Button variant="outline-success" style={{ textAlign: "center" }}>
              Copy to clipboard
            </Button>
          </CopyToClipboard>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  Forms: state.Forms.Forms,
  FormName: state.FormName.FormName,
});

export default connect(mapStateToProps, { getName, getFormView, formSubmit })(
  PublishForm
);
