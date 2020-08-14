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
            width: "40vw",
            float: "left",
            position: "relative",
            backgroundColor: "white",
            marginLeft: "-5vw",
          }}
        >
          <VerticalTimeline
            layout={"1-column"}
            position={"right"}
            backgroundColor="#009999"
          >
            <VerticalTimelineElement
              // className="vertical-timeline-element--work"
              contentStyle={{
                border: ".2vw solid #009999",
                borderRadius: "1vw",
                background: "white",
                color: "#009999",
                padding: ".5vw",
                boxShadow: ".3vw .3vw .5vw grey",
                marginBottom: 0,
                paddingBottom: 0,
              }}
              // contentArrowStyle={{
              //   borderRight: "19px solid  rgb(33, 150, 243)",
              // }}

              // date="2011 - present"
              iconStyle={{
                background: "#009999",
                width: "2vw",
                height: "2vw",
                margin: ".5vw",
                color: "#fff",
                marginTop: "2vw",
              }}
            >
              <h5 style={{ color: "black" }}>Creative Director</h5>
              <h6
                style={{ color: "darkgrey" }}
                className="vertical-timeline-element-subtitle"
              >
                Miami, FL
              </h6>
              <p style={{ color: "#009999" }}>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              // className="vertical-timeline-element--work"
              contentStyle={{
                border: ".2vw solid #009999",
                borderRadius: "1vw",
                background: "white",
                color: "#009999",
                padding: ".5vw",
                boxShadow: ".3vw .3vw .5vw grey",
                marginBottom: 0,
                paddingBottom: 0,
              }}
              // contentArrowStyle={{
              //   borderRight: "19px solid  rgb(33, 150, 243)",
              // }}

              // date="2011 - present"
              iconStyle={{
                background: "#009999",
                width: "2vw",
                height: "2vw",
                margin: ".5vw",
                color: "#fff",
                marginTop: "2vw",
              }}
            >
              <h5 style={{ color: "black" }}>Creative Director</h5>
              <h6
                style={{ color: "darkgrey" }}
                className="vertical-timeline-element-subtitle"
              >
                Miami, FL
              </h6>
              <p style={{ color: "#009999" }}>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              // className="vertical-timeline-element--work"
              contentStyle={{
                border: ".2vw solid #009999",
                borderRadius: "1vw",
                background: "white",
                color: "#009999",
                padding: ".5vw",
                boxShadow: ".3vw .3vw .5vw grey",
                marginBottom: 0,
                paddingBottom: 0,
              }}
              // contentArrowStyle={{
              //   borderRight: "19px solid  rgb(33, 150, 243)",
              // }}

              // date="2011 - present"
              iconStyle={{
                background: "#009999",
                width: "2vw",
                height: "2vw",
                margin: ".5vw",
                color: "#fff",
                marginTop: "2vw",
              }}
            >
              <h5 style={{ color: "black" }}>Creative Director</h5>
              <h6
                style={{ color: "darkgrey" }}
                className="vertical-timeline-element-subtitle"
              >
                Miami, FL
              </h6>
              <p style={{ color: "#009999" }}>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        <div
          style={{
            width: "35vw",
            height: "30vw",
            float: "right",
            position: "relative",
            borderRadius: "1vw",
            backgroundColor: "#eeeeee",
            marginTop: "1vw",
            boxShadow: ".3vw .3vw .5vw #009999",
            padding: "2vw",
          }}
        >
          jo dalna dal lena
        </div>
      </div>
    );
  }
}
