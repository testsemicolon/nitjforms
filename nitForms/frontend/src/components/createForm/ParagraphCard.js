import React, { Component, Fragment } from "react";
import TextareaAutosize from "react-textarea-autosize";
// import "./style.css";
import { Card } from "react-bootstrap";

const ParagraphCard = ({ question }) => (
  <Fragment>
    <div className="card">
      <Card.Header
        style={{
          backgroundColor: "lightblue",
          borderRadius: ".75rem .75rem 0 0 ",
        }}
      >
        Question
      </Card.Header>
      <Card.Body>
        <Card.Title>{question}</Card.Title>
        <Card.Text>
          <input type="text" placeholder="Write your answer here..." />
        </Card.Text>
      </Card.Body>
    </div>
  </Fragment>
);

export default ParagraphCard;
