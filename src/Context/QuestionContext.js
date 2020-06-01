import React, { Component } from "react";
import TokenService from "../Services/TokenService";

const QuestionContext = React.createContext({
  user: {},
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

  render() {
    const value = {
      question: this.state.question,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setQuestions: this.setQuestions,
    };
    return (
      <QuestionContext.Provider value={value}>
        {this.props.children}
      </QuestionContext.Provider>
    );
  }
}
