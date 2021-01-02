import React, { Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DropdownButton, Dropdown, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getDeptDetails } from "../../../actions/DirectorDashboardActions";

var columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "department", headerName: "Department", width: 170 },
  { field: "fundsallocated", headerName: "Committed Amount Fund", width: 130 },
  {
    field: "expenditureamount",
    headerName: " Expenditure Amount Fund",
    width: 130,
  },
  {
    field: "recommendedamount",
    headerName: "Recommended Amount Fund",
    width: 130,
  },
  { field: "pipelinedamount", headerName: "Pipelined Amount Fund", width: 130 },
  { field: "availableamount", headerName: "Available Amount Fund", width: 130 },
];

export class FundsAllot extends Component {
  componentDidMount() {
    this.props.getDeptDetails();
    console.log(this.props.DepartmentDetail);
  }
  onChangeType = (e) => {
    this.setState({ userType: e });
  };

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: ".5vw",
            width: "80%",
            marginTop: "1vw",
            marginLeft: "1vw",
            display: "flex",
            justifyContent: "space-evenly",
            paddingTop: "1vw",
            paddingBottom: "1vw",
            marginBottom: "3vw",
          }}
        >
          <div
            style={{
              height: 600,
              flexBasis: "95%",
              boxShadow:
                ".05vw .05vw .7vw silver, 0 0 .1vw rgba(0, 0, 0, 0.1) inset",
              MozBoxShadow:
                "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ",
            }}
          >
            <div style={{ marginTop: "1vw" }}>
              <table style={{ margin: "auto" }}>
                <tr>
                  <td>
                    <h4>
                      Choose the department to which you want to allocate fund?
                    </h4>
                  </td>
                  <td>
                    <DropdownButton
                      variant="light"
                      style={{
                        size: "2vw",
                        fontSize: "1vw",
                      }}
                      id="dropdown-basic-button"
                    >
                      <Dropdown.Item>Computer Science</Dropdown.Item>
                      <Dropdown.Item>Electronics</Dropdown.Item>
                      <Dropdown.Item>Mechanical</Dropdown.Item>
                      <Dropdown.Item>Chemistry</Dropdown.Item>
                    </DropdownButton>
                  </td>
                  <td>
                    <input
                      name=""
                      type="text"
                      placeholder="Enter Amount in Ruppes"
                      style={{
                        borderRadius: ".5vw",
                        border: " 0.1vw solid #009999",
                        padding: ".3vw",
                      }}
                    />{" "}
                    <Button
                      style={{
                        marginRight: "2vw",
                        backgroundColor: "#009999",
                        color: "white",

                        boxShadow: ".1vw .1vw .1vw .1vw lightgray",
                        // marginBottom: "1vw",
                        fontFamily: "Times New Roman",
                      }}
                    >
                      Allocate Ammount
                    </Button>
                  </td>
                </tr>
              </table>
            </div>
            <hr />
            <h4 style={{ textAlign: "center" }}>Currently Allocated Funds</h4>
            {console.log(this.props.DepartmentDetail)}
            <table
              style={{
                // border: ".1vw solid black",
                alignContent: "center",
                textAlign: "center",
                fontSize: "1.2vw",
              }}
            >
              <tr style={{ borderBottom: ".1vw solid black" }}>
                <td style={{ padding: "1vw" }}>Department name</td>
                <td style={{ padding: "1vw" }}>Committed amount</td>
                <td style={{ padding: "1vw" }}>Recommended amount</td>
                <td style={{ padding: "1vw" }}>Pipelined amount</td>
                <td style={{ padding: "1vw" }}>Available amount</td>
                <td style={{ padding: "1vw" }}>Expenditure amount</td>
              </tr>
              {this.props.DepartmentDetail.map((dept) => {
                return (
                  <tr
                    key={dept.id}
                    style={{ borderBottom: ".1vw solid black" }}
                  >
                    <td style={{ padding: "1vw" }}>
                      <Button
                        style={{
                          border: ".1vw solid #E0777D",
                          backgroundColor: "#FFF5F7",
                          paddingLeft: "1vw",
                          paddingRight: "1vw",
                          paddingTop: ".1vw",
                          paddingBottom: ".1vw",
                          color: "black",
                          fontSize: "1.2vw",
                        }}
                      >
                        {dept.deptName}
                      </Button>
                    </td>
                    <td style={{ padding: "1vw" }}>
                      <Button
                        style={{
                          border: ".1vw solid #E0777D",
                          backgroundColor: "#FFF5F7",
                          paddingLeft: "1vw",
                          paddingRight: "1vw",
                          paddingTop: ".1vw",
                          paddingBottom: ".1vw",
                          color: "black",
                          fontSize: "1.2vw",
                        }}
                      >
                        {dept.committedAmount}
                      </Button>
                    </td>
                    <td style={{ padding: "1vw" }}>
                      <Button
                        style={{
                          border: ".1vw solid #E0777D",
                          backgroundColor: "#FFF5F7",
                          paddingLeft: "1vw",
                          paddingRight: "1vw",
                          paddingTop: ".1vw",
                          paddingBottom: ".1vw",
                          color: "black",
                          fontSize: "1.2vw",
                        }}
                      >
                        {dept.recommendedAmount}
                      </Button>
                    </td>
                    <td style={{ padding: "1vw" }}>
                      <Button
                        style={{
                          border: ".1vw solid #E0777D",
                          backgroundColor: "#FFF5F7",
                          paddingLeft: "1vw",
                          paddingRight: "1vw",
                          paddingTop: ".1vw",
                          paddingBottom: ".1vw",
                          color: "black",
                          fontSize: "1.2vw",
                        }}
                      >
                        {dept.pipelinedAmount}
                      </Button>
                    </td>
                    <td style={{ padding: "1vw" }}>
                      <Button
                        style={{
                          border: ".1vw solid #E0777D",
                          backgroundColor: "#FFF5F7",
                          paddingLeft: "1vw",
                          paddingRight: "1vw",
                          paddingTop: ".1vw",
                          paddingBottom: ".1vw",
                          color: "black",
                          fontSize: "1.2vw",
                        }}
                      >
                        {dept.availableAmount}
                      </Button>
                    </td>
                    <td>
                      <Button
                        style={{
                          border: ".1vw solid #E0777D",
                          backgroundColor: "#FFF5F7",
                          paddingLeft: "1vw",
                          paddingRight: "1vw",
                          paddingTop: ".1vw",
                          paddingBottom: ".1vw",
                          color: "black",
                          fontSize: "1.2vw",
                        }}
                      >
                        {dept.expenditureAmount}
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  DepartmentDetail: state.DepartmentDetail.DepartmentDetail,
});

export default connect(mapStateToProps, { getDeptDetails })(FundsAllot);
