import React, { Component } from 'react';
import AnswerApiService from '../../Services/answers-service';
import { Link } from 'react-router-dom';
import QuestionContext from '../../Context/QuestionContext';

export default class postAnswer extends Component {
  static contextType = QuestionContext;
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Successful answer submit');
    AnswerApiService.postAnswer(e.target.answer_body.value, this.props.match.params.question_id);
    this.context.loadData();
    this.props.history.push('/Dashboard');
  };

  render() {
    return (
      <div className='Answer'>
        <form className='answer-form' onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset>
            <br />
            <label htmlFor='answer-label'>Answer</label>
            <input
              className='answer-input'
              type='text'
              name='answer_body'
              id='answer-label'
              placeholder='type your answer here'
            />
            <br />
            <button type='submit'>Submit Answer</button>
          </fieldset>
        </form>
        <Link to='/Dashboard'>Return to Dashboard</Link>
      </div>
    );
  }
}
