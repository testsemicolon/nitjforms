import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getGeneric } from "../../actions/CreateForm";
import { Table } from "react-bootstrap";

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
        <h3 style={{ textAlign: "center" }}>Responses</h3>
        <div>
          <Table striped bordered hover responsive>
            {/* <thead>
              {Object.keys(this.props.Forms).map((quest) => console.log(quest))};
              
            </thead> */}
            <tbody>
              {Object.entries(this.props.Forms).map(([key, value]) => {
                return (
                  <Fragment>
                    <tr>
                      {Object.entries(value).map(([question, answer]) => {
                        return (
                          <Fragment key={question}>
                            <td
                              style={{
                                alignContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                              }}
                            >
                              <strong>{question.toUpperCase()}</strong>
                              <br />
                              {answer}
                            </td>
                          </Fragment>
                        );
                      })}
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </Table>
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
