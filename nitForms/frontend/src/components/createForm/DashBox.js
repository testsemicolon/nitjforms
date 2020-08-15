import React, { Component } from "react";
import Button from "@material-ui/core/Button";
export default class DashBox extends Component {
  render() {
    return (
      <div>
        <div style={{ width: "30vw", minHeight: "40vw", float: "left" }}>
          <div style={{ backgroundColor: "red" }}>userprofile</div>
        </div>
        <div style={{ width: "60vw", minHeight: "40vw", float: "right" }}>
          <div
            style={{
              minHeight: "12vw",
              display: "flex",
              backgroundColor: "yellow",
            }}
          ></div>
          <div
            style={{
              minHeight: "22vw",
              display: "flex",
              backgroundColor: "green",
            }}
          ></div>
        </div>
      </div>
    );
  }
}
