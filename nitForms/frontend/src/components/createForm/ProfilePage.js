import React, { Component } from "react";

export default class ProfilePage extends Component {
  render() {
    return (
      <div style={{ marginTop: "2vw" }}>
        <div
          style={{
            display: "flex",
            width: "55%",
            backgroundColor: "#ffffff",
            boxShadow: ".2VW .2VW 1VW darkgray",
            borderRadius: "1VW",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            margin: "auto",
            //eight: "30vw",
          }}
        >
          <div
            style={{ flexBasis: "100%", margin: "auto", textAlign: "center" }}
          >
            <h3>USER PROFILE</h3>
          </div>
          <div
            style={{ flexBasis: "40%", flexDirection: "row", padding: "3vw" }}
          >
            <img
              src="../../../static/avtar.png"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div
            style={{
              flexBasis: "60%",
              flexDirection: "row",
              padding: "3vw",
            }}
          >
            <table className="table table-hover" style={{ padding: "3vw" }}>
              <tr>
                <th>
                  <strong>NAME</strong>
                </th>
                <td>username</td>
              </tr>
              <tr>
                <th>
                  <strong>EMAIL</strong>
                </th>
                <td>xzy@nit.edu</td>
              </tr>
              <tr>
                <th>
                  <strong>CONTACT</strong>
                </th>
                <td>1234287111</td>
              </tr>
              <tr>
                <th>
                  <strong>DEPARTMENT</strong>
                </th>
                <td>mech</td>
              </tr>
              <tr>
                <td>
                  <strong>ACCOUNT TYPE</strong>
                </td>
                <td>Superadmin</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
