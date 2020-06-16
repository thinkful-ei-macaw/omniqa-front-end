import React from 'react';
// eslint-disable-next-line no-unused-vars
import Moment from 'react-moment';
import QuestionItem from '../QuestionItem/QuestionItem';
import './QuestionList.css';


export default function QuestionList(props) {
  return (
    <div className='questionList'>
      <ul className='qMap'>
        {props.questions.map((question) => (
          <QuestionItem
            question={question}
            user_id={props.userID}
            answers={props.answers}
            handleQuestionLike={props.handleQuestionLike}
            handleDeleteQuestion={props.handleDeleteQuestion}
            btnColors={props.btnColors}
            handleAnswerQuestion={props.handleAnswerQuestion}
          />
        ))}
      </ul>
      
    </div>
  );
}
