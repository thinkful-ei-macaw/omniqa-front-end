import React, { Component } from "react";
import "./Answer.css";
import NavBar from "../NavBar/NavBar";
import AnswerApiService from "../../Services/answers-service";
import { Link } from "react-router-dom";
import AnswerContext from "../../Context/AnswerContext";

export class Answer extends Component {
  static contextType = AnswerContext;
  componentDidMount = () => {
    this.context.clearError();

    AnswerApiService.getAnswers()
      .then(this.context.setAnswerList)
      .catch(this.context.setError);
  };

  render() {

    //get request fetch all the answersans    //component did mount??
    console.log(this.state.answers)

    return (
      <div className="Answer">
        <NavBar />
        answer page
        <p>{this.state.answers.map(data => data.answer_body)}</p>
      </div>
    );
  }
}

export default Answer;
