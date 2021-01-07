import React, { Component } from "react";

export class SendMessage extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({
      message: "",
    });
  };

  render() {
    return (
      <div
        style={{
          width: "32vw",
          borderWidth: "0 .2vw .2vw .2vw",
          borderRadius: "0 0 .7vw .7vw",
        }}
      >
        <form onSubmit={this.handleSubmit} className="send-message-form">
          <input
            onChange={this.handleChange}
            value={this.state.message}
            placeholder="Type your message and hit ENTER"
            type="text"
            style={{
              width: "32vw",
              borderWidth: "0 .2vw .2vw .2vw",
              borderRadius: "0 0 .7vw .7vw",
              //borderRadius: "2vw",
              borderStyle: "solid",
              borderColor: "#0A5C5A",
              boxShadow: "none",
              outline: "none",
              MozUserFocus: "none",
              backgroundColor: "lightgray",
              //opacity: ".5",
              flexWrap: "wrap",
              height: "4vw",
            }}
          />
        </form>
      </div>
    );
  }
}

export default SendMessage;
