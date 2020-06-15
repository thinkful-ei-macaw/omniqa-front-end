import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import QuestionContext from '../../Context/QuestionContext';
import Sidebar from '../Sidebar/Sidebar';
import QuestionsApiService from '../../Services/questions-service';
import Moment from 'react-moment';
import DepartmentService from '../../Services/departments-service';

export class QuestionLikes extends Component {
  state = {
    filterID: null,
    // btnColors is an empty object
    btnColors:{},
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

  handleQuestionLike = (id, like) => {
  // Calling QuestionAPIService to update a liked question.
  // QuestionsApiService.likeQuestion(id)
  this.likeBtnColor(id)
  // .then(() => {
  //   this.setState({
  //     liked: true
  //   })
  // })

  }

 likeBtnColor = (id) => {
  /**btnColors[id] = .... <- assignment for btnColors.whateverWasPassedIntoTheFunction

 typeof btnColors[id] === "undefined" <- if there the is no  "whateverWasPassedIntoTheFunction" key in the object
  then set the value to true.

 otherwise set it to the opposite of what it currently is */

 let btnColors = this.state.btnColors;
 btnColors[id] = typeof btnColors[id] === "undefined" ? true : !btnColors[id]
   this.setState({
    btnColors
   })
 }

  render() {
    const { filterID } = this.state
    const questions = filterID ? this.context.questionList.filter(question => {
      return question.department === filterID}) : this.context.questionList
    return (
      <div className='dashboard'>
        <NavBar />
        <section className='main'>
          <Sidebar filterQuestions={this.filterQuestions} />
          <div className='questionList'>
            <h1>Liked Questions</h1>
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
                  {/**update the button style color based on the question id. Call this handlequestion when the button is clicked*/}
                  <button style={{backgroundColor: this.state.btnColors[question.id] ? '#785380' :'white'}} onClick={() => this.handleQuestionLike(question.id)} id='likeButton'>Like</button> <span className='hashtag'>#{question.department_name}</span>
                  <br />
                  <br />
                </li>
              ))}
            </ul>
          </div>
          {/* <Sort /> */}
        </section>
      </div>
    );
  }
}

export default QuestionLikes;
