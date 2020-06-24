import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getField } from "../../actions/CreateForm";
import { getName } from "../../actions/FormName";
import { formSubmit } from "../../actions/SubmitPage";
import PropTypes from "prop-types";

export class PublishForm extends Component {
  state = {};
  ftitle = "";
  fdescription = "";
  constructor(props) {
    super(props);
    console.log(this.props);
    this.props.getField();
    this.props.getName();

    this.props.FormName.map(
      (form) => (
        (this.ftitle = this.props.title),
        (this.fdescription = this.props.description)
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
        {"Title: "}
        {this.ftitle}
        <br />
        {"Description: "}
        {this.fdescription}
        <br />
        <hr />

        <form onSubmit={this.onSubmit}>
          {this.props.Forms.map((form) => (
            <div key={form.id}>
              <label>{form.question}</label>
              <input name={form.question} onChange={this.onChange} />
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
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
