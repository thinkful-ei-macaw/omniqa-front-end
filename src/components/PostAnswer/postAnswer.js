import React, { Component } from 'react';
import AnswerApiService from '../../Services/answers-service';
import AnswerContext from '../../Context/AnswerContext';
import QuestionsApiService from '../../Services/questions-service';



export default class postAnswer extends Component {
    static contextType = AnswerContext;
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        }
    }

    componentDidMount() {
        this.context.clearError();

        QuestionsApiService.getQuestions()
            .then(question => {
                console.log(question)
                this.setState({
                    questions: question
                })
            })
            .catch(this.context.setError);
    }

    render() {



        return (
            <div>
                See me
            </div>
        )
    }
}
