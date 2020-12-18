import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

export class UserTimeLine extends Component {
  msg = "";
  rejected = false;
  constructor(props) {
    super(props);
    console.log(this.props.object);
    if (this.props.object.responseAcceptedStatus === "Accepted") {
      this.msg = "Your response has been accepted";
    } else if (this.props.object.responseAcceptedStatus === "Rejected") {
      this.rejected = true;
      this.msg = "Your response has been rejected";
    } else {
      this.msg = "Status Pending";
    }
  }

  render() {
    console.log(this.msg);
    return (
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <div
          style={{
            width: "50vw",
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
            }}
            onClick={this.onclick2}
          >
            Form Status ({this.props.object.formName})
          </Button>
        </div>
        <div
          style={{
            width: "50vw",
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
    );
  }
}

const mapStateToProps = (state) => ({
  Notification: state.Notification.Notification,
  username: state.Auth.user.username,
  FormStatus: state.FormStatus.FormStatus,
  Status: state.Status.Status,
});

export default connect(mapStateToProps, {})(UserTimeLine);
/**
.custom-timeline {
  margin-left: 20px;
}

.custom-timeline .rs-timeline-item-custom-dot .rs-icon {
  position: absolute;
  background: #fff;
  top: 0;
  left: -2px;
  border: 2px solid #ddd;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 18px;
  padding-top: 9px;
  color: #999;
  margin-left: -13px;
}

.custom-timeline .rs-timeline-item-content {
  margin-left: 24px;
}
**/
