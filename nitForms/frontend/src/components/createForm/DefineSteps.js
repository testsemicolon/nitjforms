import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

// import { options } from "./Options";

import Select from "react-dropdown-select";
const options = [
  {
    id: 1,
    name: "jatin",
    username: "jatin",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
  },
];

export default class DefineSteps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      multi: true,

      handle: true,
      addPlaceholder: "+ click to add",
      labelField: "username",
      valueField: "name",
      color: "#0074D9",
      keepSelectedInList: false,
    };
  }

  setValues = (selectValues) => this.setState({ selectValues });

  render() {
    return (
      <div className={this.props.className}>
        <div>
          <div style={{ maxWidth: "350px", margin: "0 auto" }}>
            <StyledSelect
              placeholder="Select steps"
              multi={this.state.multi}
              values={[options.find((opt) => opt.username === "jatin")]}
              labelField={this.state.labelField}
              valueField={this.state.valueField}
              options={options}
              dropdownGap={5}
              keepSelectedInList={this.state.keepSelectedInList}
              onChange={(values) => this.setValues(values)}
            />
          </div>
        </div>
        <details>
          <summary>Selected values:</summary>
          <pre>{JSON.stringify(this.state.selectValues)}</pre>
        </details>
      </div>
    );
  }
}

const StyledSelect = styled(Select)`
  ${({ dropdownRenderer }) =>
    dropdownRenderer &&
    `.react-dropdown-select-dropdown {
			overflow: initial;
		}
	`}
`;
