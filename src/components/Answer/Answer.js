import React, { Component } from "react";
import "./Answer.css";
import NavBar from "../NavBar/NavBar";
import AnswerApiService from "../../Services/answers-service";
import { Link } from "react-router-dom";

export class Answer extends Component {
  render() {
    //get request fetch all the answers
    //component did mount??
    return (
      <div className="Answer">
        <NavBar />
        answer page
        <Link to="/Question">
          <button type="button">go back</button>
        </Link>
      </div>
    );
  }
}

export default Answer;
