import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";
import config from "../../config";
import QuestionContext from "../../Context/QuestionContext";
import QuestionList from "../../components/QuestionList/QuestionList";
import Sidebar from "../Sidebar/Sidebar";
import QuestionsApiService from "../../Services/questions-service";
import Answer from "../Answer/Answer";
import Sort from "../Sort/Sort";
import DepartmentService from "../../Services/departments-service";
import Question from "../Question/Question";
import TokenService from "../../Services/TokenService";

export class Dashboard extends Component {
  state = {
    /**filterID is for filtering departmentID */
    filterID: null,
    btnColors: {},
    questionsLiked: null,
  };

  static contextType = QuestionContext;

  componentDidMount() {
    this.context.clearError();

    QuestionsApiService.getQuestions()
      .then(this.context.setQuestionList)
      .catch(this.context.setError);

    DepartmentService.getDepartments()
      .then(this.context.setDepartmentList)
      .catch(this.context.setError);
  }

  filterQuestions = (id) => {
    this.setState({
      filterID: id,
    });
  };

  filterQuestionLikes = (id) => {
    this.setState({
      questionsLiked: id,
    });
  };

  handleQuestionLike = (question_id, user_id) => {
    // Calling QuestionAPIService to update a liked question.

    QuestionsApiService.likeQuestion(question_id, user_id);
    this.likeBtnColor(question_id);
  };
 

  handleDeleteQuestion = (id, author) => {
    const { user_id } = TokenService.readJwtToken();

    if (author !== user_id) {
      return alert(`You can only delete your own questions`)
    } 

    QuestionsApiService.deleteQuestions(id)
    let newQuestionList = this.context.questionList.filter(
      (question) => question.id !== id
    );
    this.context.setQuestionList(newQuestionList);
  };

  likeBtnColor = (id) => {
    /**btnColors[id] = .... <- assignment for btnColors.whateverWasPassedIntoTheFunction

 typeof btnColors[id] === "undefined" <- if there the is no  "whateverWasPassedIntoTheFunction" key in the object
  then set the value to true.

 otherwise set it to the opposite of what it currently is */

    let btnColors = this.state.btnColors;
    btnColors[id] =
      typeof btnColors[id] === "undefined" ? true : !btnColors[id];
    this.setState({
      btnColors,
    });
  };

  render() {
    const { filterID } = this.state;
    const { user_id } = TokenService.readJwtToken()
    const questions = filterID
      ? this.context.questionList.filter((question) => {
          return question.department === filterID;
        })
      : this.context.questionList;  
    return (
      <div className="dashboard">
        <NavBar />
        <section className="main">
          <Sidebar filterQuestions={this.filterQuestions} />
          <QuestionList handleQuestionLike={this.handleQuestionLike} handleDeleteQuestion={this.handleDeleteQuestion}
           btnColors={this.state.btnColors} userID={user_id} questions={questions}/>
          
          <Sort />
        </section>
      </div>
    );
  }
}

export default Dashboard;
