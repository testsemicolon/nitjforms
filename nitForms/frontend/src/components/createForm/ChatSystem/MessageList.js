import React, { Component } from "react";

export class MessageList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     messages: null,
  //     flag: false,
  //   };
  //   this.setState({ messages: this.props.messages });
  // }
  // componentDidMount() {
  //   this.setState({ messages: this.props.messages }, () => {
  //     console.log(this.state.messages, "dealersOverallTotal1");
  //   });
  // }

  render() {
    return (
      <div>
        {this.props.messages ? (
          Object.entries(this.props.messages).length === 0 ? (
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
            </div>
          ) : (
            <div>
              {this.props.messages.map((mess) => {
                console.log(mess);
                return mess.map((mes) => {
                  return (
                    <div>
                      <h5>
                        {mes[0]} {mes[1]}
                      </h5>
                      <p>{mes[2]}</p>
                    </div>
                  );
                });
              })}
            </div>
          )
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
          </div>
        )}
      </div>
    );

    // <div>
    //   {this.props.messages.map((message) => {
    //     return (
    //       <div>
    //         <li key={message.acceptedResponseID}>
    //           <div>
    //             {message.chatRoom.map((mes) => {
    //               console.log(mes);
    //               return (
    //                 <div key={mes[2]}>
    //                   <h4>
    //                     {mes[0]}: {mes[1]}
    //                   </h4>
    //                   <p>{mes[2]}</p>
    //                 </div>
    //               );
    //             })}
    //           </div>
    //         </li>
    //       </div>
    //     );
    //   })}
    // </div>

    //   )}
    // </div>

    //   );
  }
}

export default MessageList;
