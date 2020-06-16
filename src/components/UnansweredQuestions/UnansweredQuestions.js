import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import QuestionContext from "../../Context/QuestionContext";
import Sidebar from "../Sidebar/Sidebar";
import QuestionList from '../QuestionList/QuestionList';
import Sort from "../Sort/Sort";
import TokenService from '../../Services/TokenService'

export class UnansweredQuestions extends Component {

  static contextType = QuestionContext;

  render() {
    const questions = this.context.questions;
    const { user_id } = TokenService.readJwtToken()

    return (
      <div className="dashboard">
        <NavBar />
        <Sort />
        <section className="main">
          <Sidebar />
          <QuestionList handleQuestionLike={this.handleQuestionLike} handleDeleteQuestion={this.handleDeleteQuestion}
          btnColors={this.props.btnColors} userID={user_id} questions={questions}/>
         
        </section>
      </div>
    );
  }
}

export default UnansweredQuestions;
