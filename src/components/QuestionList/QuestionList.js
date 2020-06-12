import React from 'react';
import Moment from "react-moment";
import QuestionItem from '../QuestionItem/QuestionItem';



export default function QuestionList(props) {
  console.log(props.questions)
  return (

    <div className="questionList">
      <h1>Latest Questions</h1>
      <ul className="qMap">
        {props.questions.map((question) => (
          <QuestionItem question={question}
            answers={props.answers}
            handleQuestionLike={props.handleQuestionLike}
            btnColors={props.btnColors} />
        ))}
      </ul>
    </div>
  )
}
