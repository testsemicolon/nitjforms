import React, { Component, Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { connect } from "react-redux";

export class CombinedView extends Component {
  obj1 = {};
  state = { obj: {} };
  componentDidMount() {
    console.log(this.props);
    var id = parseInt(this.props.id);
    this.props.AcceptedResponse.map((a) => {
      console.log(typeof a.id);
      console.log(a.id, id);
      if (a.id === id) {
        this.obj1 = a.comment;
        this.setState({
          obj: a.comment,
        });
      }
    });
  }
  render() {
    return (
      <div style={{ marginLeft: 0 }}>
        <div
          style={{
            width: "35vw",
            float: "left",
            position: "relative",
            backgroundColor: "white",
            marginLeft: "5vw",
          }}
        >
          <VerticalTimeline
            layout={"1-column"}
            position={"right"}
            backgroundColor="white"
          >
            {Object.entries(this.obj1).map(([key, value]) => {
              return value.map((a) => {
                return Object.entries(a).map(([key1, value1]) => {
                  console.log(key1, value1);
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
                          background: "#66a3ff",
                          width: "2vw",
                          height: "2vw",
                          margin: ".5vw",
                          color: "#fff",
                          marginTop: "2vw",
                        }}
                      >
                        <h5 style={{ color: "black" }}>{key1}</h5>
                        <h6
                          style={{ color: "darkgrey" }}
                          className="vertical-timeline-element-subtitle"
                        ></h6>
                        <p style={{ color: "#009999" }}>{value1}</p>
                      </VerticalTimelineElement>
                    </Fragment>
                  );
                });
              });
            })}
          </VerticalTimeline>
        </div>
        {/* <div
          style={{
            width: "35vw",
            height: "30vw",
            float: "right",
            position: "relative",
            borderRadius: "1vw",
            backgroundColor: "white",
            marginTop: "1vw",
            boxShadow: ".3vw .3vw .3vw #009999",
            padding: "2vw",
          }}
        >
          {console.log(this.obj1)}
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  AcceptedResponse: state.AcceptedResponse.AcceptedResponse,
});

export default connect(mapStateToProps)(CombinedView);
