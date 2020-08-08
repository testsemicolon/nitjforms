import React, { Component } from "react";
import MyEditor from "./MyEditor";
import MyEditorHTML from "./MyEditorHTML";
import DisplayEditor from "./DisplayEditor";
import Tabs from "react-bootstrap/Tabs";

import Tab from "react-bootstrap/Tab";

export default class NotingSlate extends Component {
  render() {
    return (
      <div
        style={{
          border: ".1vw solid lightgrey",
          margin: "1vw",
        }}
      >
        <Tabs
          style={{
            margin: "1vw",
          }}
          defaultActiveKey="New Template"
          id="uncontrolled-tab-example"
        >
          <Tab
            eventKey="Previous Templates"
            style={{ color: "blue" }}
            title="Previous Templates"
          >
            <DisplayEditor />
          </Tab>
          <Tab eventKey="New Template" title="New Template">
            <MyEditor />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
