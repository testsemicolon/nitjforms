import React, { Component } from "react";
import MyEditor from "./MyEditor";
import MyEditorHTML from "./MyEditorHTML";
import DisplayEditor from "./DisplayEditor";

export default class NotingSlate extends Component {
  render() {
    return (
      <div>
        <DisplayEditor />

        <MyEditor />
      </div>
    );
  }
}
