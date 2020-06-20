import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getField } from "../../actions/CreateForm";
import PropTypes from "prop-types";

export class PublishForm extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.props.getField();
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
    console.log(quest);
  };

  render() {
    return (
      <Fragment>
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
});

export default connect(mapStateToProps, { getField })(PublishForm);
