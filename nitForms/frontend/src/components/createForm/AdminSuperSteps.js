import React, { Component } from "react";
import HorizontalTimeline from "react-horizontal-timeline";

const VALUES = ["123", "756", "868"];

const steps = ["acg", "vhr"];

export default class AdminSuperSteps extends Component {
  state = { value: 0, previous: 0 };

  render() {
    return (
      <div>
        <div style={{ width: "60%", height: "100px", margin: "0 auto" }}>
          <HorizontalTimeline
            index={this.state.value}
            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={steps}
          />
        </div>
        <div className="text-center">
          {/* any arbitrary component can go here */}
          {this.state.value}
        </div>
      </div>
    );
  }
}
