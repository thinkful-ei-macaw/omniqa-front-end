import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './Dashboard.css';
import config from '../../config';
import QuestionContext from '../../Context/QuestionContext';
import QuestionList from '../../components/QuestionList/QuestionList';
import Sidebar from '../Sidebar/Sidebar';
import QuestionsApiService from '../../Services/questions-service';
import Answer from '../Answer/Answer';
import Sort from '../Sort/Sort';
import DepartmentService from '../../Services/departments-service';
import Question from '../Question/Question';
import TokenService from '../../Services/TokenService';

export class Dashboard extends Component {
  state = {
    /**filterID is for filtering departmentID */
    filterID: null,

    filterAsked: false,
    filterLiked: false,
    filterUnansweredQs: false,
    btnColors: {},
    questionsLiked: null,
    currentPageTitle: 'Latest Questions'
  };

  static contextType = QuestionContext;

  componentDidMount() {
    QuestionsApiService.getQuestions().then(this.context.setQuestionList).catch(this.context.setError);
    console.log('28', this.context);
    this.context.clearError();
  }

  filterQuestions = (id) => {
    this.setState({
      filterID: id
    });
  };

  filterAsked = () => {
    this.setState({ filterAsked: !this.state.filterAsked });
  };

  filterLiked = () => {
    this.setState({ filterLiked: !this.state.filterLiked });
  };

  filterQuestionLikes = (id) => {
    this.setState({
      questionsLiked: id
    });
  };

  filterUnansweredQs = () => {
    this.setState({
      filterUnansweredQs: !this.state.filterUnansweredQs
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
      return alert(`You can only delete your own questions`);
    }

    QuestionsApiService.deleteQuestions(id);
    let newQuestionList = this.context.questionList.filter((question) => question.id !== id);
    this.context.setQuestionList(newQuestionList);
  };

  handleAnswerQuestion = (id) => {
    this.props.history.push(`/post-answer/${id}`);
  };

  likeBtnColor = (id) => {
    /**btnColors[id] = .... <- assignment for btnColors.whateverWasPassedIntoTheFunction

 typeof btnColors[id] === "undefined" <- if there the is no  "whateverWasPassedIntoTheFunction" key in the object
  then set the value to true.

 otherwise set it to the opposite of what it currently is */

    let btnColors = this.state.btnColors;

    btnColors[id] = typeof btnColors[id] === 'undefined' ? true : !btnColors[id];
    this.setState({
      btnColors
    });
  };

  render() {
    let id = this.context.questionList.map(id => id.id)
    console.log(id)
    const { filterID, filterAsked, filterLiked, filterUnansweredQs } = this.state;
    let answers = this.context.answerList;
    const { user_id } = TokenService.readJwtToken();
    let questions = this.context.questionList;

    if (filterID) {
      questions = questions.filter((question) => {
        return question.department === filterID;
      });
    }

    if (filterAsked) {
      questions = questions.filter((question) => {
        return question.author === user_id;
      });
    }

    if (filterLiked) {
      questions = questions.filter((question) => {
        console.log(this.context);
        return this.context.userLikedQuestions.includes(question.id);
      });
      console.log(questions);
    }

    if (filterUnansweredQs) {
      let answered = answers.map((answer) => {
        return answer.question;
      });
      answered = new Set(answered);
      questions = questions.filter((question) => !answered.has(question.id));
    }

    // answers.map(answer => answer.question)

    // answered = answers.map...

    // questions.filter(q => answered.includes(q.id))
    // console.log(answers.filter(answer => answer.question == question.id).map(answer => answer.answer_body))
    console.log(questions)
    return (
      <div className='dashboard'>
        <NavBar />

        <section className='main'>
          <Sidebar
            filterUnansweredQs={this.filterUnansweredQs}
            filterQuestions={this.filterQuestions}
            filterAsked={this.filterAsked}
            askedStatus={this.state.filterAsked}
            filterLiked={this.filterLiked}
            likedStatus={this.state.filterLiked}
          />
          <QuestionList
            currentPageTitle={this.handlePageTitle}
            handleQuestionLike={this.handleQuestionLike}
            handleDeleteQuestion={this.handleDeleteQuestion}
            handleAnswerQuestion={this.handleAnswerQuestion}
            answers={answers}
            btnColors={this.state.btnColors}
            userID={user_id}
            questions={questions}
          />

          <Sort />
        </section>
      </div>
    );
  }
}

export default Dashboard;
