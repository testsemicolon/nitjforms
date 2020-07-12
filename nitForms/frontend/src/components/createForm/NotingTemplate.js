import React, { Component } from "react";
import DownloadLink from "react-download-link";
import { Button } from "react-bootstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic/build/ckeditor";

export default class NotingTemplate extends Component {
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Noting Template Generation</h3>
        <hr />
        <form onSubmit={this.onSubmit}>
          <CKEditor
            editor={ClassicEditor}
            data=""
            onInit={(editor) => {
              const data = editor.getData();
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              this.setState({
                content: data,
              });
            }}
          />
          <div
            style={{
              alignItems: "center",
              textAlign: "center",
              marginTop: "2vw",
            }}
          >
            <Button variant="outline-success" type="submit">
              <DownloadLink
                style={{ font: "white" }}
                label="SUBMIT AND DOWNLOAD"
                filename="myfile.html"
                exportFile={() => this.state.content}
              />
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
