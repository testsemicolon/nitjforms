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
      <ul className="message-list">
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
          <div>Start Chat</div>
        )}
      </ul>
    );
  }
}

export default MessageList;
