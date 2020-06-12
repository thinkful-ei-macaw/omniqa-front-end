import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import PublicOnlyRoute from './Routes/PublicOnlyRoute';
import PrivateRoute from './Routes/PrivateRoute';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Switch } from 'react-router-dom';
import Question from './components/Question/Question';
import Answer from './components/Answer/Answer';
import UnansweredQuestions from './components/UnansweredQuestions/UnansweredQuestions';

import PostAnswer from './components/PostAnswer/postAnswer';
import InfoPage from './components/InfoPage/InfoPage';
import config from './config';
import QuestionsApiService from './Services/questions-service';
import AnswersApiService from './Services/answers-service';
import QuestionContext from './Context/QuestionContext';
import TokenService from './Services/TokenService';

class App extends Component {
  static contextType = QuestionContext;

  componentDidMount = () => {
    if (TokenService.hasAuthToken()) {
      this.context.loadData();
    }
  };

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <PublicOnlyRoute exact path='/' component={LandingPage} />
          <PublicOnlyRoute exact path='/info' component={InfoPage} />
          <PublicOnlyRoute exact path='/registration' component={Registration} />
          <PublicOnlyRoute exact path='/login' component={Login} />
          <Switch>
            <PrivateRoute exact path='/Dashboard' component={Dashboard} />
            <PrivateRoute exact path='/Question' component={Question} />
            <PrivateRoute exact path='/answers' component={Answer} />
            <PrivateRoute exact path='/unanswered-questions' component={UnansweredQuestions} />
            <PrivateRoute exact path='/post-answer/:question_id' component={PostAnswer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
