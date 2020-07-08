import React, { Component, Fragment } from "react";
import AutoComplete from "./AutoComplete";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";
// import Mention from "@ckeditor/ckeditor5-mention/src/mention";
// ClassicEditor.create(editorElement, {
//   plugins: [Mention],
//   mention: {
//     feeds: [
//       {
//         marker: "@",
//         feed: ["@Barney", "@Lily", "@Marshall", "@Robin", "@Ted"],
//       },
//     ],
//   },
// })
//   .then((editor) => {
//     console.log("Editor was initialized", editor);
//   })
//   .catch((error) => {
//     console.error(error.stack);
//   });

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
        <CKEditor
          editor={ClassicEditor}
          data=""
          onInit={(editor) => {
            // You can store the "editor" and use when it is needed.
            const data = editor.getData();
            console.log("Editor is ready to use!", editor);
          }}
          onChange={this.onChange(event, this.editor)}
        />
      </Fragment>
    );
  }
}

export default AcceptedResponses;
