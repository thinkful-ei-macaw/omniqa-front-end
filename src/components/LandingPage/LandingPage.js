import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <div className="hero-text">
          <h1>OMNI QA</h1>
          <p>
            A collaborative system of questions and answers designed for local
            office teams
          </p>
          <Link to="/login"> get started!</Link>
          {/* <button onClick="window.location.href='sign-up.html'"> */}
          {/* </button> */}
        </div>
      </div>
    );
  }
}
