import { Timeline, TimelineEvent } from "react-event-timeline";
import React, { Component } from "react";

export default class TimeLine extends Component {
  render() {
    return (
      <div>
        <Timeline>
          <TimelineEvent
            title="Form Accepted"
            titleStyle={{
              fontSize: "1.2vw",
              paddingTop: ".5vw",
              color: "white",
            }}
            subtitleStyle={{ fontSize: "1vw", color: "white" }}
            subtitle="2016-09-12 10:06 PM"
            icon={<span class="material-icons">done</span>}
            style={{
              backgroundColor: "#20294f",
              paddingLeft: "1.12vw",
              paddingRight: ".25vw",
              paddingBottom: ".25vw",
            }}
          >
            <h6> your form has been accepted and is under consideration</h6>
          </TimelineEvent>
          <TimelineEvent
            title="Form Accepted"
            titleStyle={{
              fontSize: "1.2vw",
              paddingTop: ".5vw",
              color: "white",
            }}
            subtitleStyle={{ fontSize: "1vw", color: "white" }}
            subtitle="2016-09-12 10:06 PM"
            icon={<span class="material-icons">done</span>}
            style={{
              backgroundColor: "#20294f",
              paddingLeft: "1.12vw",
              paddingRight: ".25vw",
              paddingBottom: ".25vw",
            }}
          >
            <h6> your form has been accepted and is under consideration</h6>
          </TimelineEvent>
        </Timeline>
      </div>
    );
  }
}
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
