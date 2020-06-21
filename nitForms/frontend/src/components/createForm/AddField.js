import React, { Component } from "react";
import { addField } from "../../actions/CreateForm";
import { connect } from "react-redux";

export class AddItem extends Component {
  state = {
    question: "",
    inputType: "Short Answer",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChange = (e) => {
    this.setState({ inputType: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { question, inputType } = this.state;
    const quest = { question, inputType };
    console.log(quest);
    this.props.addField(quest);
    this.setState({ question: "" });
  };

  render() {
    const { question, inputType } = this.state;
    return (
      <div>
        <h3>Add Form Field</h3>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            type="text"
            name="question"
            placeholder="Enter your question here...."
            style={{ flex: "7", padding: "5px" }}
            value={question}
            onChange={this.onChange}
          />
          <select
            value={inputType}
            onChange={this.handleChange}
            style={{ flex: "3", padding: "5px" }}
          >
            <option value="Short Answer">Short Answer</option>
            <option value="Paragraph">Paragraph</option>
            <option value="Multiple Choice">Multiple Choice</option>
            <option value="Checkboxes">Checkboxes</option>
            <option value="Dropdown">Dropdown</option>
            <option value="File Upload">File Upload</option>
            <option value="Date">Date</option>
          </select>
          <input
            type="submit"
            value="Add Field"
            className="btn"
            style={btnStyle}
          />
        </form>
      </div>
    );
  }
}

const btnStyle = {
  float: "right",
  background: "#3f51b5",
  color: "#fff",
  flex: "1",
  padding: "5px",
};

export default connect(null, { addField })(AddItem);
