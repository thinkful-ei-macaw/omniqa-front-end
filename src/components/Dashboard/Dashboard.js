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
 

  handleDeleteQuestion = (id) => {
    const {
      user_id
    } = TokenService.readJwtToken();
    let deleteQuestion = this.context.questionList.filter(
      (question) => question.id !== user_id
    );
    this.context.setQuestionList(deleteQuestion);
    QuestionsApiService.deleteQuestions(id)
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
    const questions = filterID
      ? this.context.questionList.filter((question) => {
          return question.department === filterID;
        })
      : this.context.questionList;
    const departments = this.context.departmentList;
    console.log(departments);
    console.log(questions);
    console.log(this.context.questionList);
    return (
      <div className="dashboard">
        <NavBar />
        <section className="main">
          <Sidebar filterQuestions={this.filterQuestions} />
          <div className="questionList">
            <h1>Latest Questions</h1>
            <ul className="qMap">
              {questions.map((question) => (
                <li className="qLi" key={question.id}>
                  <span className="questionHead">{question.question_body}</span>
                  <br />
                  <br />
                  <span className="datePosted">
                    Posted on{" "}
                    <Moment format="YYYY/MM/DD">{question.created_date}</Moment>{" "}
                    by {question.user_name}
                  </span>
                  <br />
                  <br />
                  {/**update the button style color based on the question id. Call this handlequestion when the button is clicked*/}
                  <button onClick={() => this.handleDeleteQuestion(question.id)}>Delete</button>
                  <button
                    style={{
                      backgroundColor: this.state.btnColors[question.id]
                        ? "#785380"
                        : "white",
                    }}
                    onClick={() => this.handleQuestionLike(question.id)}
                    id="likeButton"
                  >
                    Like
                  </button>{" "}
                  <span className="hashtag">#{question.department_name}</span>
                  <br />
                  <br />
                </li>
              ))}
            </ul>
          </div>
          <Sort />
        </section>
      </div>
    );
  }
}

export default Dashboard;
