import React from 'react';
import Moment from "react-moment";


export default function QuestionList(props) {

  return (
  
      <div className="questionList">
            <h1>Latest Questions</h1>
            <ul className="qMap">
              {props.questions.map((question) => (
                <li className="qLi" key={question.id}>
                  <span className="questionHead">{question.question_body}</span>
                  <br />
                  <br />
                  <span className="datePosted">
                    Posted on{" "}
                    <Moment format="YYYY/MM/DD">{question.created_date}</Moment>{" "}
                    by {question.user_name}
                  </span>
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
              ))}
            </ul>
          </div>
  )
}
