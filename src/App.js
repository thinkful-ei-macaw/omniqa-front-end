import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import PublicOnlyRoute from "./Routes/PublicOnlyRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";
import Question from "./components/Question/Question";
import Answer from "./components/Answer/Answer";
import { QuestionProvider } from "./Context/QuestionContext";
import Marketing from "./components/Marketing/Marketing";
import Sales from "./components/Sales/Sales";
import HR from "./components/HR/HR";
import Engineering from "./components/Engineering/Engineering";
import Finance from "./components/Finance/Finance";
import UnansweredQuestions from "./components/UnansweredQuestions/UnansweredQuestions";
import PostAnswer from "./components/PostAnswer/postAnswer";
import InfoPage from "./components/InfoPage/InfoPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuestionProvider>
          <BrowserRouter>
            <PublicOnlyRoute exact path="/" component={LandingPage} />
            <PublicOnlyRoute exact path="/info" component={InfoPage} />
            <PublicOnlyRoute
              exact
              path="/registration"
              component={Registration}
            />
            <PublicOnlyRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/Dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/unanswered-questions"
              component={UnansweredQuestions}
            />
            <PrivateRoute exact path="/question" component={Question} />
            <PrivateRoute exact path="/marketing" component={Marketing} />
            <PrivateRoute exact path="/Sales" component={Sales} />
            <PrivateRoute exact path="/HR" component={HR} />
            <PrivateRoute exact path="/engineering" component={Engineering} />
            <PrivateRoute exact path="/finance " component={Finance} />
            <PrivateRoute exact path="/answers" component={Answer} />
            <PrivateRoute
              exact
              path="/post-answer/:question_id"
              component={PostAnswer}
            />
          </BrowserRouter>
        </QuestionProvider>
      </div>
    );
  }
}

export default App;
