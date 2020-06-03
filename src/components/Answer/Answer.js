import React, { Component } from "react";
import "./Answer.css";
import NavBar from "../NavBar/NavBar";
import AnswerApiService from "../../Services/answers-service";

export class Answer extends Component {
  render() {
    //get request fetch all the answers
    //component did mount??
    return (
      <div className="Answer">
        <NavBar />
        answer page
      </div>
    );
  }
}

export default Answer;
