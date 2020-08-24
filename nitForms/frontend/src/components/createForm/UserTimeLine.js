import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class TimeLine extends Component {
  render() {
    return (
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <div
          style={{
            width: "50vw",
            marginTop: "2vw",
            border: "0.07vw solid #DCDCDC",
            padding: "1vw",
            textAlign: "center",
            borderRadius: ".5vw",
            marginRight: "auto",
            marginLeft: "auto",
            backgroundImage:
              "linear-gradient(to right,rgba(0, 153, 153, 0.5),rgba(0, 231, 231, 0.5)",
          }}
        >
          <Button
            style={{
              backgroundColor: "white",
              color: "#009999",
              border: 0,
              fontSize: "1.2VW",
              fontFamily: "Times New Roman",
            }}
            onClick={this.onclick2}
          >
            Form Status
          </Button>
        </div>
        <div
          style={{
            width: "50vw",
            // float: "left",
            position: "relative",
            backgroundColor: "#eeeeee",
            borderRadius: ".5vw",
            boxShadow: ".3vw .3vw .3vw silver",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1vw",
          }}
        >
          <VerticalTimeline
            layout={"1-column"}
            position={"right"}
            backgroundColor="#eeeeee"
          >
            <VerticalTimelineElement
              // className="vertical-timeline-element--work"
              contentStyle={{
                border: ".2vw solid #009999",
                borderRadius: "1vw",
                background: "white",

                padding: ".5vw",
                boxShadow: ".3vw .3vw .3vw silver",
                marginBottom: 0,
                paddingBottom: 0,
                wordWrap: "break-word",
              }}
              iconStyle={{
                background: "#009999",
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
              <p style={{ color: "#009999" }}>form has been submitted</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
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
