import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";
import config from "../../config";
import QuestionContext from "../../Context/QuestionContext";
import Sidebar from "../Sidebar/Sidebar";
import QuestionsApiService from "../../Services/questions-service";
import Moment from "react-moment";
import Answer from "../Answer/Answer";
import Sort from "../Sort/Sort";

export class Dashboard extends Component {
  static contextType = QuestionContext;

  componentDidMount() {
    this.context.clearError();

    QuestionsApiService.getQuestions()
      .then(this.context.setQuestionList)
      .catch(this.context.setError);
  }

  render() {
    const questions = this.context.questionList;
    console.log(this.context.questionList);
    return (
      <div className="dashboard">
        <NavBar />
        <section className="main">
          <Sidebar />
          <Sort />
          <div className="questionList">
            <h1>Latest Questions</h1>
            <ul className="qMap">
              {questions.map((question) => (
                <li className="qLi" key={question.id}>
                  <span className="questionHead">{question.question_body}</span>
                  <br />
                  {question.department}
                  <br />
                  <Moment format="YYYY/MM/DD">{question.created_date}</Moment>
                  <br />
                  {question.author}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
