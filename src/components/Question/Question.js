import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Question.css";
import NavBar from "../NavBar/NavBar";
import QuestionContext from "../../Context/QuestionContext";
import QuestionsApiService from "../../Services/questions-service";

export class Question extends Component {
  //fetch department and ids to populate the dept list

  static contextType = QuestionContext;

  handleSubmit = (e) => {
    e.preventDefault();

    const newQuestion = {
      title: e.target["title"].value,
      question_body: e.target["question_body"].value,
      department_id: e.target["department"].value,
      author: e.target.user_id,
    };
    QuestionsApiService.postQuestion()
      .then(this.context.postQuestion)
      .catch(this.context.setError);
  };

  render() {
    console.log(this.context);
    const newQuestion = this.context.questions;
    return (
      <div className="Question">
        <NavBar />
        Question page
        <form className="question form" onSubmit={this.handleSubmit}>
          <fieldset>
            <label htmlFor="input-one">title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              id="title"
              placeholder="title..."
              required
            />
            <br />
            <label htmlFor="input-one">question</label>
            <input
              className="form-control"
              type="text"
              name="question_body"
              id="question"
              placeholder="ask...."
            />
            <br />
            <label htmlFor="input-one">department</label>
            <input
              className="drop-down"
              type="select"
              name="department"
              id="department"
            />
            <br />
            <button
              type="submit"
              // onClick={(e) => this.props.history.push("/dashboard")}
            >
              ASK
            </button>
          </fieldset>
        </form>
        <Link to="/Dashboard">
          <button type="button">go back</button>
        </Link>
        <Link to="/answer">
          <button type="button">go look at all the answers</button>
        </Link>
      </div>
    );
  }
}

export default Question;
