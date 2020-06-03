import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";
import config from "../../config";
import QuestionContext from "../../Context/QuestionContext";
import Sidebar from "../Sidebar/Sidebar";
import QuestionsApiService from "../../Services/questions-service";
import Moment from "react-moment";

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
        <Sidebar />
        <section>
          <h1>Latest Questions</h1>
          <ul>
            {questions.map((question) => (
              <li key={question.id}>
                {question.author}
                <br />
                {question.department}
                <br />
                <Moment format="YYYY/MM/DD">{question.created_date}</Moment>
                <br />
                {question.question_body}
              </li>
            ))}
          </ul>
        </section>

        <button type="delete" onSubmit={this.handleDelete}>
          delete this question but only if you asked it
        </button>
      </div>
    );
  }
}

export default Dashboard;
