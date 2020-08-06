import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { Button } from "react-bootstrap";

// import { options } from "./Options";

import Select from "react-dropdown-select";
const options = [
  {
    id: 1,
    name: "Create Form",
    username: "Create Form",
  },
  {
    id: 2,
    name: "Choose/Create Noting",
    username: "Choose/Create Noting",
  },
  {
    id: 3,
    name: "Choose Payment Form",
    username: "Choose Payment Form",
  },
  {
    id: 4,
    name: "Choose/Create Payment Noting",
    username: "Choose/Create Payment Noting",
  },
  {
    id: 5,
    name: "Choose Payment Type",
    username: "Choose Payment Type",
  },
];

export default class DefineSteps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      multi: true,
      selectValues: [],
      handle: true,
      addPlaceholder: "+ click to add",
      labelField: "username",
      valueField: "name",
      color: "#0074D9",
      keepSelectedInList: false,
    };
  }
  // onClick = () => {
  //   {
  //     <div>{JSON.stringify(this.state.selectValues)}</div>;
  //   }
  // };

  setValues = (selectValues) => this.setState({ selectValues });

  render() {
    return (
      <div className={this.props.className}>
        <div>
          <div style={{ maxWidth: "350px", margin: "0 auto" }}>
            <StyledSelect
              placeholder="Select steps"
              multi={this.state.multi}
              values={[options.find((opt) => opt.username === "Create Form")]}
              labelField={this.state.labelField}
              valueField={this.state.valueField}
              options={options}
              dropdownGap={5}
              keepSelectedInList={this.state.keepSelectedInList}
              onChange={(values) => this.setValues(values)}
            />
          </div>
        </div>
        <div>
          {/* <Button onClick={this.onClick}>Click to generate steps</Button> */}
          Selected values:
          {console.log(this.state.selectValues)}
          {JSON.stringify(this.state.selectValues)}
        </div>
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
