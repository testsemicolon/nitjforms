import React, { Component } from "react";

export class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages,
      flag: false,
    };
    console.log(this.props.messages);
    if (this.props.messages === null) {
      this.setState({ messages: "Start Chat" });
    } else {
      this.setState({ flag: true });
    }
  }
  render() {
    // console.log(this.props.messages);
    return (
      <div className="message-list">
        {this.state.flag ? (
          this.state.messages.map((message) => {
            return (
              <li key={message.acceptedResponseID}>
                <div>
                  {message.chatRoom.map((mes) => {
                    console.log(mes);
                    return (
                      <div key={mes[2]}>
                        <h4>
                          {mes[0]}: {mes[1]}
                        </h4>
                        <p>{mes[2]}</p>
                      </div>
                    );
                  })}
                </div>
              </li>
            );
          })
        ) : (
          <div>
            <div
              style={{
                backgroundColor: "#B6CECE",
                padding: ".3vw",
                margin: ".3vw",
                borderRadius: "4vw",
              }}
            >
              SuperAdmin[12.1.2021 10:41PM]::hello hello hello how are you?
            </div>
            <div
              style={{
                backgroundColor: "#E7B3B6",
                padding: ".3vw",
                margin: ".3vw",
                borderRadius: "4vw",
              }}
            >
              SuperAdmin[12.1.2021 10:41PM]::hello hello hello how are you?
            </div>
            <div
              style={{
                backgroundColor: "#B6CECE",
                padding: ".3vw",
                margin: ".3vw",
                borderRadius: "4vw",
              }}
            >
              SuperAdmin[12.1.2021 10:41PM]::hello hello hello how are you?
            </div>
            <div
              style={{
                backgroundColor: "#E7B3B6",
                padding: ".3vw",
                margin: ".3vw",
                borderRadius: "4vw",
              }}
            >
              SuperAdmin[12.1.2021 10:41PM]::hello hello hello how are you?
            </div>
            <div
              style={{
                backgroundColor: "#B6CECE",
                padding: ".3vw",
                margin: ".3vw",
                borderRadius: "4vw",
              }}
            >
              SuperAdmin[12.1.2021 10:41PM]::hello hello hello how are you?
            </div>
            <div
              style={{
                backgroundColor: "#E7B3B6",
                padding: ".3vw",
                margin: ".3vw",
                borderRadius: "4vw",
              }}
            >
              SuperAdmin[12.1.2021 10:41PM]::hello hello hello how are you?
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MessageList;
