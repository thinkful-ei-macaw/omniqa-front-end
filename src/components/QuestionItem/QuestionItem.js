import React, { Component } from 'react';
import Moment from "react-moment";
import './QuestionItem.css';

export default class QuestionItem extends Component {

    state = {
        btnColors: {},
        questionsLiked: null
    }

    filterQuestionLikes = (id) => {
        this.setState({
            questionsLiked: id,

        });
    };



    render() {
        // console.log(this.props.question.user_name)
        let question = this.props.question;
        let answers = this.props.answers



        return (

            <div div >
                <li className="qLi" key={this.props.question.id}>
                    <div className="questionHead">
                        <span >{this.props.question.question_body}</span>
                    </div>
                    <br />
                    <br />
                    <div className="datePosted">
                        Posted on{" "}
                        <Moment format="YYYY/MM/DD">{this.props.question.created_date}</Moment>{" "}
                    by {this.props.question.user_name}
                        <br />

                        <br />
                        {this.props.answers.filter(answer => answer.question == this.props.question.id).map(answer =>

                            <div id="answer_body">


                                <div id="question_answer_body">
                                    <p class="title">Question Answer</p>
                                    <div id="answer">
                                        <p>{answer.answer_body}</p>
                                    </div>
                                </div>
                                <div id="user">
                                    <p class="title">Answered By</p>
                                    {answer.user_name}
                                </div>


                            </div>
                        )}
                    </div>
                    <br />
                    <br />
                    {/**update the button style color based on the question id. Call this handlequestion when the button is clicked*/}
                    {(this.props.question.author === this.props.question.user_id) && <button onClick={() => this.handleDeleteQuestion(this.props.question.id, this.props.question.author)}>Delete</button>}
                    <button
                        style={{
                            backgroundColor: this.props.likeBtnColor[this.props.question.id]
                                ? "#785380"
                                : "white",
                        }}
                        onClick={() => this.props.handleQuestionLike(this.props.question.id)}
                        id="likeButton"
                    >
                        Like
                  </button>{" "}
                    <span className="hashtag">#{this.props.question.department_name}</span>
                    <br />
                    <br />
                </li>
            </div >
        )
    }
}
