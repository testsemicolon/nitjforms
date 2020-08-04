import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

export default class CombinedView extends Component {
  render() {
    return (
      <div style={{ marginLeft: 0 }}>
        <div
          style={{
            width: "30vw",
            float: "left",
            position: "relative",
            backgroundColor: "lightblue",
            marginLeft: "-5vw",
          }}
        >
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#fff" }}
              // contentArrowStyle={{
              //   borderRight: "19px solid  rgb(33, 150, 243)",
              // }}
              date="2011 - present"
              iconStyle={{
                background: "darkblue",
                width: "2vw",
                height: "2vw",
                margin: "-1vw",
                color: "#fff",
                marginTop: "2vw",
              }}
            >
              <h5 style={{ color: "black" }}>Creative Director</h5>
              <h6
                style={{ color: "black" }}
                className="vertical-timeline-element-subtitle"
              >
                Miami, FL
              </h6>
              <p style={{ color: "darkblue" }}>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    );
  }
}
