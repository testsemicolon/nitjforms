import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { hashHistory } from "react-router";

export class PaymentType extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            float: "left",
            postion: "relative",
            minWidth: "87.5vw",
            // textAlign: "center",

            paddingLeft: "2vw",
            paddingRight: "2vw",
            // display: "flex",
            // justifyContent: "center",
            paddingTop: "1vw",
            paddingBottom: "1vw",
            marginBottom: "4vw",
            backgroundColor: "white",
            // boxShadow: ".3vw .3vw .5vw silver",
            borderRadius: ".3vw",
          }}
        >
          <form>
            <input type="radio" id="Online" name="type" value="online" />
            <label for="Online">Online</label>
            <br />
            <input type="radio" id="Offline" name="type" value="offline" />
            <label for="Offline">Offline</label>
            <br />
            <Button
              style={{
                background: "#66a3ff",
                boxShadow: ".3vw .3vw .3vw lightgray",
                color: "#fff",
                flex: "1",
                padding: "5px",
                borderRadius: ".3rem",
                borderWidth: "0rem",
                fontFamily: "Times New Roman",
                display: "flex",
                //   marginLeft: "auto",
              }}
              onClick={() => {
                {
                  this.props.history.push("/publish");
                }
                {
                  console.log("jadu");
                }
              }}
            >
              Submit Final Form
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Forms: state.Forms.Forms,
});

export default connect(mapStateToProps, {})(withRouter(PaymentType));
