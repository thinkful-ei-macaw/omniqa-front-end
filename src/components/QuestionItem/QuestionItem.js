import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import './QuestionItem.css';
import { ReactComponent as TrashIcon } from '../../images/trash.svg';
import { ReactComponent as LikeButton } from '../../images/heart.svg';

function QuestionItem(props) {
  let question = props.question;

  const [ toggle, setToggle ] = useState(false);
  const answers = props.answers.filter((answer) => answer.question == props.question.id);

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
          <br />
          <br />
          <span className='datePosted'>
            Asked on <Moment format='MMMM do'>{question.created_date}</Moment> by {question.user_name}
          </span>
          {answers.length ? (
            <div onClick={() => setToggle(!toggle)} role='button' className={`accordion ${toggle ? 'active' : ''}`}>
              <h4>View Answers</h4>
              {answers.map((answer) => (
                <div className='answer_body panel' key='answer'>
                  <div className='question_answer_body'>
                    <span className='datePosted'>
                      Answered <Moment format='MMMM do'>{answer.created_date}</Moment> by {answer.user_name}
                    </span>

                    <p>{answer.answer_body}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ''
          )}
          <br />
          <br />
          {/**update the button style color based on the question id. Call this handlequestion when the button is clicked*/}
          <Link to={`/post-answer/${question.id}`}>Answer</Link>
          <button
            style={{
              backgroundColor: props.btnColors[question.id] ? '#785380' : 'white'
            }}
            onClick={() => props.handleQuestionLike(question.id)}
            id='likeButton'
          >
            Like
          </button>{' '}
          {question.author === props.user_id && (
            <button className='delete-btn' onClick={() => props.handleDeleteQuestion(question.id, question.author)}>
              <TrashIcon />
            </button>
          )}
          <br />
          <br />
        </li>
      </ul>
    </div>
  );
}

export default QuestionItem;
