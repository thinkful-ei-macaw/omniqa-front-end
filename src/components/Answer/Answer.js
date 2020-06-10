import React, { Component } from "react";
import "./Answer.css";
import NavBar from "../NavBar/NavBar";
import AnswerApiService from "../../Services/answers-service";
import { Link } from "react-router-dom";
import QuestionContext from "../../Context/QuestionContext";

export class Answer extends Component {
  static contextType = QuestionContext;
  componentDidMount = () => {
    this.context.clearError();

    AnswerApiService.getAnswers()
      .then(this.context.setAnswerList)
      .catch(this.context.setError);
  };

  render() {
    let answers = this.context.answerList || []
    console.log(answers)
    return (
      <div className="Answer">
        <NavBar />
        answer page
        <p>{answers.map((data) => data.answer_body)}</p>
      </div>
    );
  }
}

export default Answer;
