
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

    filterAsked: false,
    filterLiked: false,
    btnColors: {},
    questionsLiked: null,

  };

  static contextType = QuestionContext;

  componentDidMount() {
    console.log('28', this.context)
    this.context.clearError();

  }

  filterQuestions = (id) => {
    this.setState({

      filterID: id,
    });
  };

  filterAsked = () => {
    this.setState({filterAsked: !this.state.filterAsked})
  };

  filterLiked = () => {
    this.setState({filterLiked: !this.state.filterLiked})
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

    const { filterID, filterAsked, filterLiked } = this.state;
    const { user_id } = TokenService.readJwtToken()
    let questions = this.context.questionList;
    if (filterID) {
      questions = questions.filter((question) => {
        return question.department === filterID;
      })
    }

    if (filterAsked) {
      questions = questions.filter((question) => {
        return question.author === user_id
      })
    }

    if (filterLiked) {

      questions = questions.filter((question) => {
        console.log(this.context)
        return this.context.userLikedQuestions.includes(question.id) 
        
      })
      console.log(questions)
    }

    return (
      <div className="dashboard">
        <NavBar />

        <section className="main">
          <Sidebar filterQuestions={this.filterQuestions} filterAsked={this.filterAsked} filterLiked={this.filterLiked}/>
          <QuestionList handleQuestionLike={this.handleQuestionLike} handleDeleteQuestion={this.handleDeleteQuestion}
           btnColors={this.state.btnColors} userID={user_id} questions={questions}/>
          
          <Sort />
        </section>
      </div>
    );
  }
}

export default Dashboard;
