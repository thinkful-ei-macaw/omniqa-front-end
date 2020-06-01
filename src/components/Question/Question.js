import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Question.css";
import NavBar from "../NavBar/NavBar";
import config from "..//../config";
import TokenService from "../../Services/TokenService";

export class Question extends Component {
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
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((question) => {
        this.context.add(question);
        this.props.history.push(`/questions`);
      })

      .catch((error) => {
        console.error({ error });
      });
  };
  render() {
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
              type="dropdown"
              name="department"
              id="department"
            />
            <br />
            <button type="submit">ASK</button>
          </fieldset>
        </form>
        <Link to="/answer">go look at all the answers</Link>
      </div>
    );
  }
}

export default Question;
