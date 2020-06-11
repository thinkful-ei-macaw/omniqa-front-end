import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import magn from "./search.png";
import QuestionContext from "../../Context/QuestionContext";
import TokenService from "../../Services/TokenService";
import QuestionsApiService from '../../Services/questions-service';
import QuestionItem from '../../components/QuestionItem/QuestionItem';

export class NavBar extends Component {
  static contextType = QuestionContext;


  // state = {
  //   questionList: [],
  //   filter: ''
  // }


  // componentDidMount() {
  //   QuestionsApiService.getQuestions()
  //     .then(questionResult => {
  //       this.setState({
  //         questionList: questionResult
  //       })
  //     })
  // }

  // handleChange = e => {
  //   this.setState({
  //     filter: e.target.value
  //   })
  // }

  // handleLogoutClick = () => {
  //   this.context.processLogout();
  //   window.location = "/login";
  // };

  render() {

    // let questions = [];
    // let questionBody = this.context.questionList.map(question => question.question_body) || []

    // let currentQuestion = this.state.questionList;

    // let newQuestion = currentQuestion.filter(input => {
    //   const body = input.questions
    //   const filter = this.state.filter.toLowerCase().trim();
    //   return body.includes(filter);

    // })

    // if (this.state.questionList & this.state.questionList.length > 0) {
    //   questions = newQuestion.map(question => {

    //     return (
    //       <QuestionItem question={question} />
    //     )



    //   })
    // }


    return (
      <nav className="nav">
        <ul>
          <li id="logoicon">
            <img
              className="logoicon"
              src={require("./logoicon.png")}
              alt="omni--logo"
            />
          </li>
          <li>
            <form className="search-bar">
              <input
                type="text"
                placeholder="Search for questions..."
                id="search-text-input"
                onChange={this.handleChange}
              />
              <input
                type="image"
                name="submit"
                id="magn"
                src={magn}
                alt="magnifying-glass"
              />
            </form>
          </li>
          <li className="span1">
            <span>Q&A Home</span>
          </li>
          <li className="span2">
            <span>Answer Q's</span>
          </li>
          <li>
            <Link id="link" to="/Question">
              <button id="question-btn">Ask a question</button>
            </Link>
          </li>
          <li className="selector">
            <select type="select" onChange={this.handleLogoutClick}>
              <option selected disabled>
                {TokenService.getInfoFromToken().sub}
              </option>
              <option>Logout</option>
            </select>
          </li>
        </ul>
        <div className="line">
          {/* {questions} */}
        </div>
      </nav>
    );
  }
}

export default NavBar;
