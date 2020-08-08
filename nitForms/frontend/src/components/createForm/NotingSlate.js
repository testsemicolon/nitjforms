import React, { Component } from "react";
import MyEditor from "./MyEditor";
import MyEditorHTML from "./MyEditorHTML";
import DisplayEditor from "./DisplayEditor";
import Tabs from "react-bootstrap/Tabs";
import { connect } from "react-redux";
import Tab from "react-bootstrap/Tab";

export class NotingSlate extends Component {
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
            {this.props.NotingTemplate.map((a) => (
              <div key={a.id}>
                <h3>{a.noting}</h3>
              </div>
            ))}
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
const mapStateToProps = (state) => ({
  NotingTemplate: state.NotingTemplate.NotingTemplate,
});

export default connect(mapStateToProps)(NotingSlate);
