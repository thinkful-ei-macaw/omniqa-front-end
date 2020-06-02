import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Question.css";
import NavBar from "../NavBar/NavBar";
import config from "..//../config";
import TokenService from "../../Services/TokenService";
import QuestionContext from "../../Context/QuestionContext";

export class Question extends Component {
  //fetch department and ids to populate the dept list

  static contextType = QuestionContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      title: e.target["title"].value,
      question_body: e.target["question"].value,
      department_id: e.target["department"].value,
      author: e.target.user_id,
    };
    fetch(`${config.API_ENDPOINT}/api/questions`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newQuestion),
    })
      .then((res) => {
        console.log(res);

        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((question) => {
        this.context.setQuestions(question);
        this.props.history.push(`/questions`);
      })

      .catch((error) => {
        console.error({ error });
      });
  };
  render() {
    console.log(this.context);
    const questions = this.context.questions;
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
              name="question"
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
            <button type="submit">ASK</button>
          </fieldset>
        </form>
        <ul>All questions:</ul>{" "}
        {questions.map((question) => (
          <li key={question.id}>{question.body} </li>
        ))}
        <Link to="/answer">go look at all the answers</Link>
      </div>
    );
  }
}

export default Question;
