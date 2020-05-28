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
      title: e.target.title.value,
    };
    fetch(`${config.API_ENDPOINT}/questions`, {
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
