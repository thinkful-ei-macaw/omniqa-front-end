import React, { Component } from 'react';
import Moment from "react-moment";

function QuestionItem(props) {

    let question = props.question;

    return (
        <li className="qLi" key={question.id}>
            <span className="questionHead">{question.question_body}</span>
            <br />
            <br />
            <span className="datePosted">
                Posted on{" "}
                <Moment format="YYYY/MM/DD">{question.created_date}</Moment>{" "}
                by {question.user_name}
            </span>
            {props.answers.filter(answer => answer.question == props.question.id).map(answer =>

                <div>
                    <p>Answered By</p>
                    {answer.user_name}
                    <p>{answer.answer_body}</p>
                </div>
            )}
            <br />
            <br />
            {/**update the button style color based on the question id. Call this handlequestion when the button is clicked*/}
            {(question.author === props.userID) && <button onClick={() => props.handleDeleteQuestion(question.id, question.author)}>Delete</button>}
            <button
                style={{
                    backgroundColor: props.btnColors[question.id]
                        ? "#785380"
                        : "white",
                }}
                onClick={() => props.handleQuestionLike(question.id)}
                id="likeButton"
            >
                Like
              </button>{" "}
            <span className="hashtag">#{question.department_name}</span>
            <br />
            <br />
        </li>
    )


}

export default QuestionItem