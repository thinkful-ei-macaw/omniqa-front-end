import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import './QuestionItem.css';


function QuestionItem(props) {
    let question = props.question;

    const [toggle, setToggle] = useState(false)
    // eslint-disable-next-line eqeqeq
    const answers = props.answers.filter((answer) => answer.question == props.question.id)
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
                   
                    

                   {answers.length ?  <div onClick={() => setToggle(!toggle)}role="button" className={`accordion ${toggle ? 'active' : ""}`}>
                       <h4>View Answers</h4>
                    {answers.map((answer) => (
                        <div className='answer_body panel' key='answer'>
                    
                            <div className='question_answer_body'>
                                <p className="answer-body">{answer.answer_body}</p>
                                 <span className='datePosted'>
                        Answered on&nbsp;<Moment format='MMMM do'>{answer.created_date}</Moment> 
                    </span>
                    

                                    
                            <hr></hr>
                          
                            </div>
                            </div>
                        
                    ))}
                  </div> : ""
                }
                 <p className='datePosted'>
              Asked on&nbsp;<Moment format='MMMM do, YYYY'>{question.created_date}</Moment>&nbsp;by {question.user_name}
            </p>
                    <div className="toggleControlsContainer">
                        <div className="toggleButtons">
                            <div className="main-controls">
                     <button className="answer-btn">
                     <Link to={`/post-answer/${question.id}`}>Answer</Link>
                     </button>

                    
                    <button
                        style={{
                            backgroundColor: props.btnColors[question.id] ? '#785380' : 'white'
                        }}
                        onClick={() => props.handleQuestionLike(question.id)}
                        id='likeButton'>
                        Like
          </button>{' '}
                   
                    {question.author === props.user_id && (
                        <button className="delete-btn" onClick={() => props.handleDeleteQuestion(question.id, question.author)}>Delete</button>
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
