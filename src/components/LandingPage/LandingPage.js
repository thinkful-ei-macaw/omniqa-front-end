import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import img from "./logo.png";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <div className="hero-text">
          <img className="logo" src={img} alt="omni--logo" />
          <p>
            A collaborative system of questions and answers designed for local
            office teams.
          </p>
          <br />
          <br />
          <Link to="/registration">
            {" "}
            <button className="start-button" type="button">
              Get Started!
            </button>{" "}
          </Link>
        </div>
      </div>
    );
  }
}
