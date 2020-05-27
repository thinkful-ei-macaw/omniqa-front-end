import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Question.css";

export class Question extends Component {
  render() {
    return (
      <div>
        Question page
        <Link to="/answer">answers</Link>
      </div>
    );
  }
}

export default Question;
