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
import Autocomplete from "draft-js-autocomplete";

class MyEditor extends React.Component {
  hashtags = [];
  componentDidMount() {
    {
      Object.entries(this.props.Forms).map(([key, value]) => {
        var question = value.question.replace(/[ ]/g, "_");
        console.log(question);
        this.hashtags.push(question);
      });
    }
    console.log(this.hashtags);
  }

  onMatch = (text) =>
    this.hashtags.filter((hashtag) => hashtag.indexOf(text) !== -1);

  Hasthtag = ({ children }) => <span className="Hashtag">{children}</span>;

  List = ({ display, children }) => {
    return <ul className="HashtagList">{children}</ul>;
  };

  Item = ({ item, current, onClick }) => {
    let classNames = "HashtagListItem";
    classNames += current ? " current" : "";
    return (
      <li className={classNames} onClick={onClick}>
        {item}
      </li>
    );
  };

  hashtag = {
    prefix: "#",
    type: "HASHTAG",
    mutability: "IMMUTABLE",
    onMatch: this.onMatch,
    component: this.Hasthtag,
    listComponent: this.List,
    itemComponent: this.Item,
    format: (item) => `#${item}`,
  };
  autocompletes = [this.hashtag];

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
      <div
        style={{
          backgroundColor: "white",
          borderRadius: ".5vw",
          margin: "1vw",
          padding: "2vw",
        }}
      >
        <div>
          <div style={{ textAlign: "center" }}>
            <input
              type="text"
              style={{
                width: "40vw",
                fontSize: "1.2vw",
                padding: ".7vw",
                border: ".01vw solid grey",
              }}
              onChange={this.onChange1}
              name={this.name}
              placeholder="Enter Title of Your Noting"
            />
          </div>
          <br />
          <hr />
          <Button
            style={{
              borderWidth: 0,
              backgroundColor: "transparent",
              color: "grey",
            }}
            onClick={() => {
              this.handleKeyCommand("bold");
            }}
          >
            Bold
          </Button>
          <Button
            style={{
              borderWidth: 0,
              backgroundColor: "transparent",
              color: "grey",
            }}
            onClick={() => this.handleKeyCommand("italic")}
          >
            Italic
          </Button>
          <Button
            style={{
              borderWidth: 0,
              backgroundColor: "transparent",
              color: "grey",
            }}
            onClick={() => this.handleKeyCommand("underline")}
          >
            Underline
          </Button>
          <Button
            style={{
              borderWidth: 0,
              backgroundColor: "transparent",
              color: "grey",
            }}
            onClick={() => this.handleKeyCommand("unordered-list-item")}
          >
            H1
          </Button>
          <Button
            style={{
              borderWidth: 0,
              backgroundColor: "transparent",
              color: "grey",
            }}
            onClick={() => this.handleKeyCommand("code")}
          >
            Code
          </Button>
          <hr />
        </div>
        <div>
          <Autocomplete
            editorState={this.state.editorState}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand.bind(this)}
            autocompletes={this.autocompletes}
            placeholder="Click here to make noting"
          >
            <Editor />
          </Autocomplete>
        </div>
        <div
          style={{
            margin: "10px",
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Button
            style={{
              backgroundColor: "#66a3ff",
              color: "white",
              borderWidth: 0,
              boxShadow: ".3vw .3vw .3vw grey",
            }}
            onClick={this.saveContent.bind(this)}
          >
            Save content
          </Button>
          <Button
            style={{
              backgroundColor: "white",
              color: "#66a3ff",
              border: ".01vw solid #66a3ff",
              boxShadow: ".3vw .3vw .3vw grey",
            }}
            onClick={this.setEditorContent.bind(this)}
          >
            Load content
          </Button>
        </div>

        {/* <div>
          <pre>{this.getContentAsRawJson()}</pre>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  NotingTemplate: state.NotingTemplate.NotingTemplate,
  FormName: state.FormName.FormName,
  uuid1: state.NotingTemplate.uuid1,
  Forms: state.Forms.Forms,
});

export default connect(mapStateToProps, {
  postNotingTemplate,
  getNotingTemplate,
})(MyEditor);
