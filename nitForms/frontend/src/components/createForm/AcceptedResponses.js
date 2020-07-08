import React, { Component, Fragment } from "react";
import AutoComplete from "./AutoComplete";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";

export class AcceptedResponses extends Component {
  state = {
    content: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.content);
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
        <form onSubmit={this.onSubmit}>
          <CKEditor
            editor={ClassicEditor}
            data=""
            onInit={(editor) => {
              // You can store the "editor" and use when it is needed.
              const data = editor.getData();
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              this.setState({
                content: data,
              });
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </Fragment>
    );
  }
}

export default AcceptedResponses;
