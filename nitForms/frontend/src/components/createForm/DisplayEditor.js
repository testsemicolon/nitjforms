import React from "react";
import { Editor, EditorState, convertFromRaw } from "draft-js";
import { Button } from "react-bootstrap";

class DisplayEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }
  loadContent() {
    const savedData = this.props.noting;
    return savedData ? JSON.parse(savedData) : null;
  }
  setEditorContent() {
    const rawEditorData = this.loadContent();
    if (rawEditorData !== null) {
      const contentState = convertFromRaw(rawEditorData);
      const newEditorState = EditorState.createWithContent(contentState);
      this.setState({ editorState: newEditorState });
    } else {
      this.setState({ editorState: EditorState.createEmpty() });
    }
  }
  render() {
    return (
      <div>
        <div>
          <Button onClick={() => this.setEditorContent()}>Load content</Button>
        </div>
        <Editor editorState={this.state.editorState} readOnly={true} />
      </div>
    );
  }
}

export default DisplayEditor;
