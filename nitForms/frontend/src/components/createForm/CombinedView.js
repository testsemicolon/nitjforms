import React, { Component, Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { connect } from "react-redux";

export class CombinedView extends Component {
  obj1 = {};
  notifyObj = {};
  arr = [];
  arr1 = [];
  name = "";
  itr = 0;
  time = "";
  componentDidMount() {
    var id = parseInt(this.props.id);
    this.props.AcceptedResponse.map((a) => {
      if (a.id === id) {
        this.obj1 = a.comment;
        this.notifyObj = a.notification;
      }
    });
    {
      Object.entries(this.notifyObj).map(([key, value]) => {
        this.arr.push(value);
      });
    }
    if (this.obj1 !== null) {
      this.obj1.map((value) => {
        this.arr1.push(value[1]);
      });
    }

    this.arr = this.arr.reverse();
    this.arr1 = this.arr1.reverse();
    console.log(this.arr, this.arr1);
  }
  render() {
    return (
      <div style={{ marginLeft: 0 }}>
        <div
          style={{
            width: "35vw",
            float: "left",
            position: "relative",
            backgroundColor: "#eeeeee",
            borderRadius: ".5vw",
            boxShadow: ".3vw .3vw .3vw silver",
            marginLeft: "5vw",
          }}
        >
          <VerticalTimeline
            layout={"1-column"}
            position={"right"}
            backgroundColor="#eeeeee"
          >
            {this.arr.map((value1) => {
              return (
                <Fragment key={value1}>
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
                      marginTop: "1vw",
                    }}
                  >
                    <h5 style={{ color: "black" }}>{value1}</h5>
                    <h6
                      style={{ color: "darkgrey" }}
                      className="vertical-timeline-element-subtitle"
                    ></h6>
                    {value1.includes("commented ") ? (
                      <div>
                        <p style={{ color: "#009999" }}>
                          {this.arr1[this.itr++]}
                        </p>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </VerticalTimelineElement>
                </Fragment>
              );
            })}
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
                marginTop: "1vw",
              }}
            >
              <h5 style={{ color: "black" }}>FILLED BY : {this.props.user}</h5>
              <h6
                style={{ color: "darkgrey" }}
                className="vertical-timeline-element-subtitle"
              ></h6>
              <p style={{ color: "#009999" }}>
                TIME AND DATE : {this.props.time2}
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  AcceptedResponse: state.AcceptedResponse.AcceptedResponse,
});

export default connect(mapStateToProps)(CombinedView);
