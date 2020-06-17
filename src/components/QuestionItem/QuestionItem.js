import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import './QuestionItem.css';

function QuestionItem(props) {
  let question = props.question;

  const [ toggle, setToggle ] = useState(false);
  const answers = props.answers.filter((answer) => answer.question === props.question.id);

  return (
    <div className='question-item'>
      <ul>
        <li className='qLi' key={question.id}>
          <span className='questionHead' key='questionHead'>
            {question.question_body}
          </span>
          <span className='hashtag'>#{question.department_name}</span>
          {/* <button id='answerButton' onClick={() => props.handleAnswerQuestion(question.id)}>
            Answer
          </button> */}
          <span className='datePosted'>
            Asked on&nbsp;<Moment format='MMMM do'>{question.created_date}</Moment>&nbsp;by {question.user_name}
          </span>
          {answers.length ? (
            <div onClick={() => setToggle(!toggle)} role='button' className={`accordion ${toggle ? 'active' : ''}`}>
              <h4>View Answers</h4>
              {answers.map((answer, key) => (
                <div className='answer_body panel' key={key}>
                  <div className='question_answer_body'>
                    <span className='datePosted'>
                      Answered on&nbsp;<Moment format='MMMM do'>{answer.created_date}</Moment>
                    </span>

                    <p>{answer.answer_body}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ''
          )}
       
          {/**update the button style color based on the question id. Call this handlequestion when the button is clicked*/}
          <div className= "toggleControlsContainer">
            <div className="toggleButtons">
              <div className="main-controls">
          <Link className="answer-btn" to={`/post-answer/${question.id}`}>Answer</Link>
          <button className="answer-btn"
            style={{
              backgroundColor: props.btnColors[question.id] ? '#785380' : 'white'
            }}
            onClick={() => props.handleQuestionLike(question.id)}
            id='likeButton'
          >
            Like
          </button>
          {question.author === props.user_id && (
            <button className='delete-btn' onClick={() => props.handleDeleteQuestion(question.id, question.author)}>
              Delete
            </button>
          )}
          </div>
          </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default QuestionItem;
