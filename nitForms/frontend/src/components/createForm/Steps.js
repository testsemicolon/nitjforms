import React, { Component } from "react";
import { MDBIcon } from "mdbreact";
import {Button} from "react-bootstrap";
import HorizontalNonLinearStepper from "./progressBar";
export default class Steps extends Component {
  render() {
    return (
      <div>
         <Button onClick={()=>window.history.back()} className="previous" 
         style={{borderRadius:".5vw", boxShadow: ".3vw .3vw .5vw silver", backgroundColor:"#0a5c5a",marginBottom:"1vw"}}>&laquo; Back</Button>

        <HorizontalNonLinearStepper />
      </div>
    );
  }
}
