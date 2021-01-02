import React, { Component } from "react";

export class CreateDepartment extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div
            className="card card-body mt-4 mb-4"
            style={{ borderWidth: "0.1rem" }}
          >
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Enter the DeptName"
                style={{ color: "black" }}
              />
            </div>
            <div className="form-group">
              <input placeholder="CommittedAmount" style={{ color: "black" }} />
            </div>
            <div className="form-group">
              <input
                placeholder="RecommendedAmount"
                style={{ color: "black" }}
              />
            </div>{" "}
            <div className="form-group">
              <input
                placeholder="PipelinedAmount "
                style={{ color: "black" }}
              />
            </div>
            <div className="form-group">
              <input
                placeholder="AvailableAmount "
                style={{ color: "black" }}
              />
            </div>
            <div className="form-group">
              <input
                placeholder="ExpenditureAmount "
                style={{ color: "black" }}
              />
            </div>
            <button className="form-group" style={btnStyle} type="submit">
              CREATE Department
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const btnStyle = {
  background: "#e0777d",
  boxShadow: ".3vw .3vw .3vw lightgray",
  color: "#fff",
  padding: ".4rem",
  borderRadius: ".3rem",
  borderColor: "black",
  borderWidth: "0rem",
  width: "12rem",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  marginLeft: "auto",
  fontFamily: "Times New Roman",
};

export default CreateDepartment;
