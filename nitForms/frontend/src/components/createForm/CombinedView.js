import React, { Component, Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

export class CombinedView extends Component {
  obj1 = {};
  notifyObj = {};
  arr = [];
  arr1 = [];
  name = "";
  itr = 0;
  time = "";
  componentDidUpdate(prevProps) {
    var id = parseInt(this.props.id);
    if (prevProps.AcceptedResponse !== this.props.AcceptedResponse) {
      console.log(this.props.AcceptedResponse);
      this.props.AcceptedResponse.map((a) => {
        if (a.id === id) {
          this.obj1 = a.comment;
          this.notifyObj = a.notification;
        }
      });
      if (this.notifyObj !== null) {
        {
          Object.entries(this.notifyObj).map(([key, value]) => {
            this.arr.push(value);
          });
        }
      }
      console.log(this.obj1);
      if (this.obj1 !== null && this.obj1 !== {}) {
        this.obj1.map((value) => {
          this.arr1.push(value[1]);
        });
      }

      this.arr = this.arr.reverse();
      this.arr1 = this.arr1.reverse();
    }
  }
  render() {
    return (
      <div style={{ marginLeft: 0 }}>
        <Button
          onClick={() => window.history.back()}
          className="previous"
          style={{
            borderRadius: ".5vw",
            boxShadow: ".3vw .3vw .5vw silver",
            backgroundColor: "#0a5c5a",
            marginBottom: "1vw",
          }}
        >
          &laquo; Back
        </Button>
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
            style={{ minHeight: "1vw" }}
          >
            {this.arr.map((value1) => {
              return (
                <Fragment key={value1}>
                  <VerticalTimelineElement
                    contentStyle={{
                      border: ".2vw solid #009999",
                      borderRadius: "1vw",
                      background: "white",
                      padding: ".5vw",
                      boxShadow: ".3vw .3vw .3vw silver",
                      marginBottom: 0,
                      paddingBottom: 0,
                      lineHeight: ".5vw",
                      wordWrap: "break-word",
                    }}
                    iconStyle={{
                      background: "#009999",
                      width: "1.5vw",
                      height: "1.5vw",
                      margin: ".5vw",
                      color: "#fff",
                      marginTop: "1vw",
                    }}
                  >
                    <h6 style={{ color: "black" }}>
                      {value1}
                      {value1[0].includes("commented ") ? (
                        <h6 style={{ color: "#009999" }}>
                          {this.arr1[this.itr++]}
                        </h6>
                      ) : (
                        <div></div>
                      )}
                    </h6>
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
                width: "1.5vw",
                height: "1.5vw",
                margin: ".5vw",
                color: "#fff",
                marginTop: "1vw",
              }}
            >
              <h6 style={{ color: "black" }}>
                FILLED BY {this.props.user}{" "}
                <font style={{ color: "#009999" }}>at {this.props.time2}</font>
              </h6>
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
