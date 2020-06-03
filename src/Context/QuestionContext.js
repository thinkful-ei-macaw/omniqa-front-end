import React, { Component } from "react";

const QuestionContext = React.createContext({
  question: [],
  error: null,
  questionList: [],
  setError: () => {},
  clearError: () => {},
  setQuestions: () => {},
  setQuestionList: () => {},
  processLogin: () => {},
  processLogout: () => {},
});

export default QuestionContext;

export class QuestionProvider extends Component {
  state = {
    question: [],
    questionList: [],
    error: null,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setQuestions = (question) => {
    console.log("running");
    this.setState({ questions: [...this.state.questions, question] });
  };

  setQuestionList = (questionList) => {
    this.setState({ questionList });
  };

  render() {
    const value = {
      questionList: this.state.questionList,
      question: this.state.question,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setQuestions: this.setQuestions,
      setQuestionList: this.setQuestionList,
    };
    return (
      <QuestionContext.Provider value={value}>
        {this.props.children}
      </QuestionContext.Provider>
    );
  }
}
