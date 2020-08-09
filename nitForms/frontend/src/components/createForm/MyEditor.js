import React from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import {
  postNotingTemplate,
  getNotingTemplate,
} from "../../actions/NotingTemplate";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

class MyEditor extends React.Component {
  editorStyles = {
    width: "200px",
    margin: "10px",
    border: "1px solid gray",
  };
  quest1 = {};
  name = "";
  constructor(props) {
    super(props);
    this.props.getNotingTemplate();
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.onChange = (editorState) => this.setState({ editorState });
    this.props.FormName.map((a) => (this.quest1 = a));
  }

  onChange1 = (e) => {
    this.name = e.target.value;
  };

  handleKeyCommand(command) {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }
  getContentAsRawJson() {
    const contentState = this.state.editorState.getCurrentContent();
    const raw = convertToRaw(contentState);

    return JSON.stringify(raw, null, 2);
  }
  saveContent() {
    const quest = {};
    quest["key"] = "1";
    quest["name"] = this.name;
    const json = this.getContentAsRawJson();
    quest["noting"] = json;
    console.log(quest);
    this.props.postNotingTemplate(quest, this.quest1);
  }
  // loadContent() {
  //   const savedData = {
  //     blocks: [
  //       {
  //         key: "33uvq",
  //         text: "asdasdas",
  //         type: "unstyled",
  //         depth: 0,
  //         inlineStyleRanges: [
  //           {
  //             offset: 0,
  //             length: 8,
  //             style: "BOLD",
  //           },
  //         ],
  //         entityRanges: [],
  //         data: {},
  //       },
  //     ],
  //     entityMap: {},
  //   };
  //   return savedData;
  // }
  setEditorContent() {
    var rawEditorData = {};
    this.props.NotingTemplate.map((a) => (rawEditorData = a.noting));
    console.log(rawEditorData);

    if (rawEditorData !== null) {
      const contentState = convertFromRaw(rawEditorData);
      const newEditorState = EditorState.createWithContent(contentState);
      this.setState({ editorState: newEditorState });
    }
  }
  render() {
    return (
      <div>
        <div style={{ margin: "10px" }}>
          <button onClick={() => this.handleKeyCommand("bold")}>Bold</button>
          <button onClick={() => this.handleKeyCommand("italic")}>
            Italic
          </button>
          <button onClick={() => this.handleKeyCommand("underline")}>
            Underline
          </button>
          <button onClick={() => this.handleKeyCommand("code")}>Code</button>
        </div>
        <div style={this.editorStyles}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand.bind(this)}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <button onClick={this.saveContent.bind(this)}>Save content</button>
          <button onClick={this.setEditorContent.bind(this)}>
            Load content
          </button>
        </div>
        <div>
          <input type="text" onChange={this.onChange1} name={this.name} />
        </div>
        <div>
          <pre>{this.getContentAsRawJson()}</pre>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  NotingTemplate: state.NotingTemplate.NotingTemplate,
  FormName: state.FormName.FormName,
  uuid1: state.NotingTemplate.uuid1,
});

export default connect(mapStateToProps, {
  postNotingTemplate,
  getNotingTemplate,
})(MyEditor);
