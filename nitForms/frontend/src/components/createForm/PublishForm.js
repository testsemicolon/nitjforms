import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getFormTitle } from "../../actions/FormName";
import { getFormField } from "../../actions/CreateForm";
import PropTypes from "prop-types";
import CardForm from "./CardForm";
import ParagraphCard from "./ParagraphCard";

export class PublishForm extends Component {
  static propTypes = {
    FormName: PropTypes.array.isRequired,
    Forms: PropTypes.array.isRequired,
    getFormTitle: PropTypes.func.isRequired,
    getFormField: PropTypes.func.isRequired,
  };

  state = {
    Forms: [],
  };

  componentDidMount() {
    this.props.getFormField();
    this.props.getFormTitle();
    console.log(this.props.FormName[length - 1]);
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Fragment>
        <h3> Your Form has been Submitted</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Form Title</th>
              <th>Descriptoin</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>

        <form onSubmit={this.onSubmit}>
          {this.props.Forms.map((form) => {
            if (form.inputType == "Paragraph") {
              return <ParagraphCard key={form.id} question={form.question} />;
            }
            if (form.inputType == "Short Answer") {
              return <CardForm key={form.id} question={form.question} />;
            }
          })}
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  FormName: state.FormName.FormName,
  Forms: state.Forms.Forms,
});

export default connect(mapStateToProps, { getFormTitle, getFormField })(
  PublishForm
);
