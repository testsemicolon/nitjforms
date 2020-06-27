import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getGeneric } from "../../actions/CreateForm";

export class GenericResponses extends Component {
  constructor(props) {
    super(props);
    this.props.getGeneric(this.props.title);
    console.log("called");
  }

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <h1>mhvgfc</h1>
        <div>
          {console.log(typeof this.props.Forms)}
          {/* {this.props.Forms.map(([key, value]) => {
            {
              console.log(value);
            }
            value.map(([question, answer]) => {
              <h1>{answer}</h1>;
            });
          })} */}

          {Object.entries(this.props.Forms).map(([key, value]) => {
            return Object.entries(value).map(([question, answer]) => {
              return (
                <div key={question}>
                  <h1>{question}</h1>
                  <h1>{answer}</h1>
                </div>
              );
            });
          })}
        </div>
      </Fragment>
    );
  }

  // {

  //   this.props.Forms.map((items, index) => {
  //     return (
  //       <ul key={index}>
  //         {Object.keys(items).map((key) => {
  //           return (
  //             <li key={key + index}>
  //               {key}:{items[key]}
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     );
  //   });
  // }
}

const mapStateToProps = (state) => ({
  Forms: state.Forms.Forms,
});

export default connect(mapStateToProps, { getGeneric })(GenericResponses);
