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
            width: "34vw",
            marginTop: "2vw",
            justifyContent: "center",
            textAlign: "center",
            //backgroundImage: "linear-gradient(to right,#009999,#00e7e7",
            backgroundImage:
              "linear-gradient(to right,rgba(0, 153, 153, 0.5),rgba(0, 231, 231, 0.5)",
            paddingTop: "1vw",
            marginBottom: "1.5vw",
            // backgroundColor: "#00a3a3",
            boxShadow: ".3vw .3vw .5vw silver",
            borderRadius: ".3vw",
            color: "white",
            marginLeft: "auto",
            marginRight: "auto",
            paddingRight: "1vw",
            // paddingBottom: "1vw",
          }}
        >
          <h4 style={{ color: "white" }}> Title: {this.ftitle}</h4>
          <hr
            style={{
              width: "20vw",
            }}
          />
          <h5>Description: {this.fdescription}</h5>
        </div>

        <div
          style={{
            postion: "relative",
            width: "34vw",

            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "2vw",
            paddingRight: "2vw",
            // display: "flex",
            // justifyContent: "center",
            paddingTop: "1vw",
            paddingBottom: "1vw",
            marginBottom: "4vw",
            backgroundColor: "#EEEEEE",
            boxShadow: ".3vw .3vw .5vw silver",
            borderRadius: ".3vw",
          }}
        >
          Form has been created
        </div>
        <br />
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <Link to={`/${this.ftitle}`}>
            <Button
              style={{
                background: "#66a3ff",
                boxShadow: ".3vw .3vw .3vw lightgray",
                color: "#fff",
                flex: "1",
                padding: "5px",
                borderRadius: ".3rem",
                borderWidth: "0rem",
                marginRight: "2vw",
                display: "flex",
              }}
            >
              Go to form
            </Button>
          </Link>

          <CopyToClipboard
            text={`localhost:8000/#/${this.ftitle}`}
            onCopy={() => this.setState({ copied: true })}
          >
            <Button
              style={{
                background: "white",
                boxShadow: ".3vw .3vw .3vw lightgray",
                color: "#66a3ff",
                flex: "1",
                border: ".01vw solid #66a3ff",
                padding: "5px",
                borderRadius: ".3rem",

                display: "flex",
              }}
            >
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
