import React, { Component, Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { connect } from "react-redux";

export class CombinedView extends Component {
  state = { obj: {} };
  componentDidMount() {
    console.log(this.props);
    var id = parseInt(this.props.match.params.id);
    this.props.AcceptedResponse.map((a) => {
      console.log(typeof a.id);
      console.log(a.id, id);
      if (a.id === id) {
        this.setState({
          obj: a.comment,
        });
      }
    });
  }
  render() {
    return (
      <Fragment>
        <VerticalTimeline>
          {Object.entries(this.state.obj).map(([key, value]) => {
            console.log(value);
            return (
              <Fragment key={key}>
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
                    <h2>hello</h2>

                    {value.map((a) => {
                      Object.entries(a).map(([key1, value1]) => {
                        console.log(key1, value1);
                        return (
                          <Fragment>
                            <VerticalTimelineElement
                              className="vertical-timeline-element--work"
                              contentStyle={{
                                background: "white",
                                color: "#fff",
                              }}
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
                            ></VerticalTimelineElement>
                          </Fragment>
                        );
                      });
                    })}
                  </div>
                </div>
                <div
                  style={{
                    float: "right",
                    postion: "relative",
                    width: "35vw",
                    border: ".12vw solid lightgrey",
                  }}
                ></div>
              </Fragment>
            );
          })}
        </VerticalTimeline>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  AcceptedResponse: state.AcceptedResponse.AcceptedResponse,
});

export default connect(mapStateToProps)(CombinedView);
