import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getGeneric } from "../../actions/CreateForm";

export class GenericResponses extends Component {
  componentDidMount() {
    this.props.getGeneric("test104");
    console.log("called");
  }

  render() {
    this.props.Forms.map((items, index) => {
      return (
        <ul key={index}>
          {Object.keys(items).map((key) => {
            return (
              <li key={key + index}>
                {key}:{items[key]}
              </li>
            );
          })}
        </ul>
      );
    });
  }
}

const mapStateToProps = (state) => ({
  Forms: state.Forms.Forms,
});

export default connect(mapStateToProps, { getGeneric })(GenericResponses);
