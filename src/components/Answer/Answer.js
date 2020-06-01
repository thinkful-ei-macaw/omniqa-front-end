import React, { Component } from "react";
import "./Answer.css";
import NavBar from "../NavBar/NavBar";

export class Answer extends Component {
  render() {
    //get request fetch all the answers
    return (
      <div className="Answer">
        <NavBar />
        answer page
      </div>
    );
  }
}

export default Answer;
