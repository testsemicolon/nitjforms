import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

export default class CombinedView extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: "40vw",
            float: "left",
            position: "relative",
            backgroundColor: "lightblue",
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
              <h3 style={{ color: "black" }}>Creative Director</h3>
              <h4
                style={{ color: "black" }}
                className="vertical-timeline-element-subtitle"
              >
                Miami, FL
              </h4>
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
