import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import PublicOnlyRoute from "./Routes/PublicOnlyRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import Question from "./components/Question/Question";
import Answer from "./components/Answer/Answer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PublicOnlyRoute exact path="/" component={LandingPage} />
        <PublicOnlyRoute exact path="/registration" component={Registration} />
        <PublicOnlyRoute exact path="/login" component={Login} />
        {/* add back private route after authentication is complete, for now its just route for 
editing purposes */}
        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/question" component={Question} />
        <Route exact path="/answer" component={Answer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
