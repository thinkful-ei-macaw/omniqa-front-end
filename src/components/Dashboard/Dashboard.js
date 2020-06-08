import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './Dashboard.css';
import config from '../../config';
import QuestionContext from '../../Context/QuestionContext';
import Sidebar from '../Sidebar/Sidebar';
import QuestionsApiService from '../../Services/questions-service';
import Moment from 'react-moment';
import Answer from '../Answer/Answer';
import Sort from '../Sort/Sort';
import DepartmentService from '../../Services/departments-service';

export class Dashboard extends Component {
  state = {
    filterID: null,
    liked: false,
    btnDefaultWhite: true,
  }

  static contextType = QuestionContext;

  componentDidMount() {
    this.context.clearError();

    QuestionsApiService.getQuestions().then(this.context.setQuestionList).catch(this.context.setError);

    DepartmentService.getDepartments().then(this.context.setDepartmentList).catch(this.context.setError);
  }

  filterQuestions = id => {
    this.setState({
      filterID: id
    })
  }

  handleQuestionLike = (id) => {
  QuestionsApiService.likeQuestion(id)
  .then(() => {
    this.setState({
      liked: true
    })
  })

  }

  likeBtnColor = () => {
    this.setState({
      btnDefaultWhite: !this.state.btnDefaultWhite,
    })

  }

  render() {

    const { filterID } = this.state
    const questions = filterID ? this.context.questionList.filter(question => {
      return question.department === filterID}) : this.context.questionList
    const departments = this.context.departmentList;
    console.log(departments);
    console.log(questions);
    console.log(this.context.questionList);
    return (
      <div className='dashboard'>
        <NavBar />
        <section className='main'>
          <Sidebar filterQuestions={this.filterQuestions} />
          <div className='questionList'>
            <h1>Latest Questions</h1>
            <ul className='qMap'>
              {questions.map((question) => (
                <li className='qLi' key={question.id}>
                  <span className='questionHead'>{question.question_body}</span>
                  <br />
                  <br />
                  <span className='datePosted'>
                    Posted on <Moment format='YYYY/MM/DD'>{question.created_date}</Moment> by {question.user_name}
                  </span>
                  <br />
                  <br />
                  <button style={{backgroundColor: this.state.btnDefaultWhite ? 'white' :'#785380'}} onClick={() => this.handleQuestionLike(question.id)} id='likeButton'>Like</button> <span className='hashtag'>#{question.department_name}</span>
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
