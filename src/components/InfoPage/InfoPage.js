import React, { Component } from "react";
import { Link } from "react-router-dom";

export class InfoPage extends Component {
  render() {
    return (
      <div className="InfoPage">
        <h1>this is the info page</h1>
        <h2>here we will attempt to tell you want to do with your life</h2>
        <h3>OMNI q&a has the answer to everything your team needs to know.</h3>
        <p>
          Once a user has signed up, they can view the questions asked, filter
          the questions by department name, and ask their own.
          <br />
          Save time and increase productivity by directing team members to the
          questions they really need answers to!
        </p>
        <Link to="/registration">
          {" "}
          <button className="register-button" type="button">
            register
          </button>{" "}
        </Link>
        <Link to="/login">
          {" "}
          <button className="login-button" type="button">
            Log In{" "}
          </button>{" "}
        </Link>
      </div>
    );
  }
}

export default InfoPage;
