import React from "react";
import { Editor, EditorState, convertFromRaw } from "draft-js";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { putAccepted } from "../../actions/AcceptedResponse";
import store from "../../store";
import { createMessage } from "../../actions/Messages";
import { withRouter } from "react-router-dom";
import { postNotification } from "../../actions/Notification";

class DisplayEditor extends React.Component {
  flag = false;
  arr = [];
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
      comment: "",
      quest: {},
    };
  }
  componentDidMount() {
    this.setEditorContent();
  }
  onChange = (e) => {
    this.setState({ comment: e.target.value });
  };
  onClick = () => {
    var key1 = this.props.key1;
    var name = "";

    this.props.NotingTemplate.map((a) => {
      if (key1 === a.key) {
        name = a.name;
      }
    });
    console.log(name);
    var cmnt = "";

    var cmntAuthor = {};
    // cmntAuthor[this.props.username] = this.state.comment;
    // cmnt.push(cmntAuthor);
    var id = parseInt(this.props.id);
    this.props.AcceptedResponse.map((a) => {
      if (a.id === id) {
        var arr = a["comment"];
        if (arr == null) {
          arr = [];
        }
        console.log(arr);
        arr.push([name, this.state.comment, this.props.username]);
        a["comment"] = arr;
        // if (a.comment === null) {s
        //   const quest = { [name]: cmnt };
        //   a["comment"] = quest;
        // } else {
        //   Object.entries(a.comment).map(([key, value]) => {
        //     console.log(name, key);
        //     if (name === key) {
        //       value.push(cmntAuthor);
        //       // const quest = { [key1]: value };
        //       a["comment"][name] = value;
        //       // console.log(quest);
        //       this.flag = true;
        //     }
        //   });
        //   if (this.flag === false) {
        //     a["comment"][name] = cmnt;
        //   }
        // }

        var notify = a["notification"];
        if (notify === null) {
          notify = [];
        }
        var notifyCmnt = `${this.props.username} commented on noting ${name}`;
        var date = new Date();
        console.log(date);
        notify.push([notifyCmnt, date]);
        a["notification"] = notify;
        console.log(a);
        this.props.putAccepted(a.id, this.props.title, a);
        const questNotify = {};
        var reciever = a.userName;
        questNotify["sender"] = `${this.props.username}`;
        questNotify["reciever"] = `${reciever}`;
        questNotify["notify"] = notifyCmnt;
        this.props.postNotification(questNotify);
        store.dispatch(
          createMessage({ commentAdded: `Comment has been added to ${name}` })
        );
        this.props.history.push(
          `/viewresponsenotegenerate/${this.props.match.params.value}/${this.props.match.params.title}/${this.props.match.params.id}/`
        );
      }
    });
  };
  loadContent() {
    const savedData = this.props.noting;
    return savedData ? JSON.parse(savedData) : null;
  }
  setEditorContent() {
    const rawEditorData = this.loadContent();

    rawEditorData.blocks.map((s) => {});
    rawEditorData.blocks.map((s) => {
      this.props.AcceptedResponse.map((s1) => {
        var id = parseInt(this.props.id);
        var id1 = parseInt(s1.id);

        if (id === id1) {
          Object.entries(s1).map(([key, value]) => {
            if (
              (key !== "comment") &
              (key !== "commentAccepted") &
              (key !== "responseTime")
            ) {
              s.text = s.text.replace("#", "");

              s.text = s.text.replace(key, value);
            }
          });
        }
      });
    });
    rawEditorData.blocks.map((s) => console.log(s.text));
    if (rawEditorData !== null) {
      const contentState = convertFromRaw(rawEditorData);
      let newEditorState = EditorState.createWithContent(contentState);
      this.setState({ editorState: newEditorState });
    } else {
      this.setState({ editorState: EditorState.createEmpty() });
    }
  }
  render() {
    return (
      <div>
        <Editor editorState={this.state.editorState} />
        <br />
        <input onChange={this.onChange} type="text" />{" "}
        <Button
          style={{
            backgroundColor: "#e0777d",
            borderWidth: 0,
            boxShadow: ".3vw .3vw .3vw lightgray",
            fontFamily: "Times New Roman",
          }}
          type="submit"
          onClick={this.onClick}
        >
          ADD COMMENT
        </Button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  AcceptedResponse: state.AcceptedResponse.AcceptedResponse,
  username: state.Auth.user.username,
  NotingTemplate: state.NotingTemplate.NotingTemplate,
  FormName: state.FormName.FormName,
});
export default withRouter(
  connect(mapStateToProps, { putAccepted, postNotification })(DisplayEditor)
);
