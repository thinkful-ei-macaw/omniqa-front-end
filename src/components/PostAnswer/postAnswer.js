import React, { Component } from 'react';
import AnswerApiService from '../../Services/answers-service';
import { Link } from 'react-router-dom';
import './postAnswer.css';
import QuestionContext from '../../Context/QuestionContext';
import NavBar from '../../components/NavBar/NavBar';

export default class postAnswer extends Component {

  static contextType = QuestionContext;
  handleSubmit = (e) => {
    e.preventDefault();
    AnswerApiService.postAnswer(e.target.answer_body.value, this.props.match.params.question_id)
      .then(() => this.context.loadData())
    // this.context.loadData()
    this.props.history.push('/Dashboard');
  };

  render() {
 return (
      <div id='answerMain'>
        <NavBar />
        <div className='Answer'>
          <form className='answer-form' onSubmit={(e) => this.handleSubmit(e)}>
            <fieldset>
              <h1>Your answer</h1>
              <textarea
                className='answer-input'
                type='input'
                name='answer_body'
                id='answer-label'
                placeholder='Type your answer here...'
              />
             
              <button className="post-ans"type='submit'>Submit Answer</button>
            </fieldset>
          </form>
          <Link to='/Dashboard'>Return to Dashboard</Link>
        </div>
      </div>
    );
  }
}
