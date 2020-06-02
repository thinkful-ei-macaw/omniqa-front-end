import React, { Component } from "react";

const QuestionContext = React.createContext({
  question: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  processLogin: () => {},
  processLogout: () => {},
});

export default QuestionContext;

export class QuestionProvider extends Component {
  constructor(props) {
    super(props);
    const state = { question: {}, error: null };

    // if (TokenService.hasAuthToken()) {
    //   const jwtPayload = TokenService.getInfoFromToken();
    //   if (jwtPayload)
    //     state.question = {
    //       id: jwtPayload.user_id,
    //       name: jwtPayload.name,
    //       username: jwtPayload.sub,
    //     };
    // }

    this.state = state;
  }

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setQuestions = (question) => {
    console.log("running");
    this.setState({ question });
  };
  handleDeleteQuestion = (questionId) => {
    this.setState({
      questions: this.state.questions.filter((d) => d.id !== questionId),
    });
  };

  render() {
    const value = {
      question: this.state.question,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setQuestions: this.setQuestions,
      handleDeleteQuestion: () => {},
    };
    return (
      <QuestionContext.Provider value={value}>
        {this.props.children}
      </QuestionContext.Provider>
    );
  }
}
