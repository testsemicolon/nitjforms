import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";
import Card from "react-bootstrap/Card";

class CardForm extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <Card.Header
            style={{
              backgroundColor: "lightblue",
              borderRadius: ".75rem .75rem 0 0 ",
            }}
          >
            QUESTION {1}
          </Card.Header>
          <Card.Body>
            <Card.Title>Paragraph</Card.Title>
            <Card.Text>
              <form>
                <TextareaAutosize>Write your answer here...</TextareaAutosize>
              </form>
            </Card.Text>
          </Card.Body>
        </div>
        <div className="card">
          <Card.Header
            style={{
              backgroundColor: "lightblue",
              borderRadius: ".75rem .75rem 0 0 ",
            }}
          >
            QUESTION {1 + 1}
          </Card.Header>
          <Card.Body>
            <Card.Title>Short Answer</Card.Title>
            <Card.Text>
              <form>
                <input type="text" placeholder="Write your answer here..." />
              </form>
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    );
  }
}

export default CardForm;
