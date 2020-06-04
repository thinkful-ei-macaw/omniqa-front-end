import React, { Component } from "react";

const AnswerContext = React.createContext({
  answer: [],
  error: null,
  answerList: [],
  setError: () => {},
  clearError: () => {},
  setAnswers: () => {},
  setAnswerList: () => {},
  processLogin: () => {},
  processLogout: () => {},
});

export default AnswerContext;

export class AnswerProvider extends Component {
  state = {
    answer: [],
    answerList: [],
    error: null,
  };
  //need to add see answers by department
  //where they at tho??
  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setAnswers = (answer) => {
    console.log("running");
    this.setState({ answers: [...this.state.answers, answer] });
  };

  setAnswerList = (answerList) => {
    this.setState({ answerList });
  };

  render() {
    const value = {
      answerList: this.state.answerList,
      answer: this.state.answer,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setAnswers: this.setAnswers,
      setAnswerList: this.setAnswerList,
    };
    return (
      <AnswerContext.Provider value={value}>
        {this.props.children}
      </AnswerContext.Provider>
    );
  }
}
