import React, { Component } from "react";

const QuestionContext = React.createContext({
  question: [],
  error: null,
  questionList: [],
  departmentList: [],
  setError: () => { },
  clearError: () => { },
  setQuestions: () => { },
  setQuestionList: () => { },
  setDepartmentList: () => { },
  processLogin: () => { },
  processLogout: () => { },
});

export default QuestionContext;

export class QuestionProvider extends Component {
  state = {
    question: [],
    questionList: [],
    departmentList: [],
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

  setDepartmentList = (departments) => {
    this.setState({
      departmentList: departments
    })
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
      setDepartmentList: this.setDepartmentList,
      departmentList: this.state.departmentList
    };
    return (
      <QuestionContext.Provider value={value}>
        {this.props.children}
      </QuestionContext.Provider>
    );
  }
}
