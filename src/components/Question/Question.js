import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Question.css";
import NavBar from "../NavBar/NavBar";

export class Question extends Component {
  render() {
    return (
      <div className="Question">
        <NavBar />
        Question page
        <form className="question form">
          <fieldset>
            <input typeof="text" id="question--form"></input>
            <button type="submit">ASK</button>
          </fieldset>
        </form>
        <Link to="/answer">go look at all the answers</Link>
      </div>
    );
  }
}

export default Question;
