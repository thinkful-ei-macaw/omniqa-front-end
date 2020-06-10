import React, { Component } from 'react';
import Moment from "react-moment";

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



        return (
            <div>
                <li className="qLi" key={this.props.question.id}>
                    <span className="questionHead">{this.props.question.question_body}</span>
                    <br />
                    <br />
                    <span className="datePosted">
                        Posted on{" "}
                        <Moment format="YYYY/MM/DD">{this.props.question.created_date}</Moment>{" "}
                    by {this.props.question.user_name}
                        <br />
                        {this.props.answers.filter(answer => answer.question == this.props.question.id).map(answer => answer.answer_body)}
                    </span>
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
            </div>
        )
    }
}
