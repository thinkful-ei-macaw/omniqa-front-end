import React, { Component } from "react";
import "./Answer.css";
import NavBar from "../NavBar/NavBar";
import QuestionContext from "../../Context/QuestionContext";

export class Answer extends Component {
  static contextType = QuestionContext;
  componentDidMount = () => {
    this.context.clearError();
  };

  render() {
    return (
      <div className="Answer">
        <NavBar />
        answer page
        <p>{this.context.answers.map((data) => data.answer_body)}</p>
      </div>
    );
  }
}

export default Answer;
