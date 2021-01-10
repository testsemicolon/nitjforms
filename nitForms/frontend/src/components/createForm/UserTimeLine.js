import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Button } from "react-bootstrap";
import MessageList from "./ChatSystem/MessageList";
import SendMessage from "./ChatSystem/SendMessage";

export class UserTimeLine extends Component {
  msg = "";
  rejected = false;
  state = {
    sendChat: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    console.log(this.props.username);
    if (this.props.object.responseAcceptedStatus === "Accepted") {
      // this.props.getMessage(this.props.object.responseID);
      this.msg = "Your response has been accepted";
    } else if (this.props.object.responseAcceptedStatus === "Rejected") {
      // this.props.getMessage(this.props.object.responseID);
      this.rejected = true;
      this.msg = "Your response has been rejected";
    } else {
      this.msg = "Status Pending";
    }
  }
  // componentDidMount() {
  //   this.props.getMessage();
  // }
  onClickSendMessage = () => {
    console.log("jherw");
    var quest = {};
    quest["sender"] = this.props.username;
    quest["reciever"];
    quest["message"] = this.state.sendChat;
    quest["acceptedResponseID"] = this.props.object.responseID;
    console.log(quest);
    this.props.postMessage(quest);
  };

  render() {
    return (
      <div>
        <div style={{ float: "left", width: "40vw" }}>
          <div
            style={{
              marginTop: "2vw",

              padding: "1vw",
              textAlign: "center",
              borderRadius: ".5vw",
              marginRight: "auto",
              marginLeft: "auto",
              backgroundColor: "#E0777D",
              boxShadow: ".3vw .3vw .3vw lightgray",
            }}
          >
            <Button
              style={{
                backgroundColor: "white",
                color: "#E0777D",
                border: 0,
                fontSize: "1.2VW",
                fontFamily: "Times New Roman",
                boxShadow: ".2VW .2VW .2VW #282c35",
              }}
              onClick={this.onclick2}
            >
              Form Status ({this.props.object.formName})
            </Button>
          </div>
          <div
            style={{
              width: "40vw",
              // float: "left",
              position: "relative",
              backgroundColor: "#EEEEEE",
              borderRadius: ".5vw",
              borderWidth: 0,
              boxShadow: ".3vw .3vw .3vw LIGHTGRAY",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "1vw",
            }}
          >
            <VerticalTimeline
              layout={"1-column"}
              position={"right"}
              backgroundColor="#EEEEEE"
            >
              <VerticalTimelineElement
                // className="vertical-timeline-element--work"
                contentStyle={{
                  border: ".2vw solid #0A5C5A",
                  borderRadius: "1vw",
                  background: "white",

                  padding: ".5vw",
                  boxShadow: ".3vw .3vw .3vw silver",
                  marginBottom: 0,
                  paddingBottom: 0,
                  wordWrap: "break-word",
                }}
                iconStyle={{
                  background: "#0A5C5A",
                  width: "2vw",
                  height: "2vw",
                  margin: ".5vw",
                  color: "#fff",
                  marginTop: "2vw",
                }}
              >
                <h5 style={{ color: "black" }}>admin </h5>
                <h6
                  style={{ color: "darkgrey" }}
                  className="vertical-timeline-element-subtitle"
                ></h6>
                <p style={{ color: "#0A5C5A" }}>form has been submitted</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                // className="vertical-timeline-element--work"
                contentStyle={{
                  border: ".2vw solid #0A5C5A",
                  borderRadius: "1vw",
                  background: "white",

                  padding: ".5vw",
                  boxShadow: ".3vw .3vw .3vw silver",
                  marginBottom: 0,
                  paddingBottom: 0,
                  wordWrap: "break-word",
                }}
                iconStyle={{
                  background: "#0A5C5A",
                  width: "2vw",
                  height: "2vw",
                  margin: ".5vw",
                  color: "#fff",
                  marginTop: "2vw",
                }}
              >
                <h5 style={{ color: "black" }}>admin </h5>
                <h6
                  style={{ color: "darkgrey" }}
                  className="vertical-timeline-element-subtitle"
                ></h6>
                <p style={{ color: "#0A5C5A" }}>{this.msg}</p>
                {this.rejected ? (
                  <div>{this.props.object.commentByAuthor}</div>
                ) : (
                  <div></div>
                )}
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
        <div style={{ float: "right" }}>
          <div
            style={{
              marginTop: "2vw",
              //border: "0.07vw solid #0A5C5A",
              padding: "1vw",
              textAlign: "center",
              borderRadius: ".5vw",
              marginRight: "auto",
              marginLeft: "auto",
              backgroundColor: "#E0777D",
              boxShadow: ".3vw .3vw .3vw lightgray",
            }}
          >
            <Button
              style={{
                backgroundColor: "white",
                color: "#E0777D",
                border: 0,
                fontSize: "1.2VW",
                fontFamily: "Times New Roman",
                boxShadow: ".2VW .2VW .2VW #282c35",
              }}
            >
              Chat
            </Button>
          </div>
          <div
            style={{
              width: "36vw",
              textAlign: "center",
              paddingLeft: "2vw",
              paddingRight: "2vw",
              paddingTop: "1vw",
              paddingBottom: "1vw",
              marginTop: "1vw",
              marginBottom: "1vw",

              // marginLeft: "auto",
              // marginRight: "auto",
              backgroundColor: "#EEEEEE",
              boxShadow: ".3vw .3vw .3vw silver",
              borderRadius: ".3vw",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderWidth: ".2vw .2vw 0 .2vw ",

                borderStyle: "solid",
                borderColor: "#0A5C5A",
                borderRadius: ".7vw .7vw 0 0",
                paddingBottom: "1.5vw",
                overflowY: "scroll",

                maxHeight: "18vw",
              }}
            >
              <MessageList messages={this.props.messages} />
            </div>
            <div>
              <SendMessage sendMessage={this.props.sendMessage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserTimeLine;
