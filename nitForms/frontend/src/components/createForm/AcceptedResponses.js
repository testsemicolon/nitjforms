import React, { Component, Fragment } from "react";
import AutoComplete from "./AutoComplete";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";
import Mention from "@ckeditor/ckeditor5-mention/src/mention";
ClassicEditor.create(editorElement, {
  plugins: [Mention],
  mention: {
    feeds: [
      {
        marker: "@",
        feed: ["@Barney", "@Lily", "@Marshall", "@Robin", "@Ted"],
      },
    ],
  },
})
  .then((editor) => {
    console.log("Editor was initialized", editor);
  })
  .catch((error) => {
    console.error(error.stack);
  });

export class AcceptedResponses extends Component {
  onChange = (event, editor) => {
    console.log(editor);
  };

  render() {
    return (
      <Fragment>
        <AutoComplete
          options={[
            "Papaya",
            "Persimmon",
            "Paw Paw",
            "Prickly Pear",
            "Peach",
            "Pomegranate",
            "Pineapple",
          ]}
        />

        <h2>Using CKEditor 5 build in React</h2>
      </Fragment>
    );
  }
}

export default AcceptedResponses;
