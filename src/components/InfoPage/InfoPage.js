import React, { Component } from "react";
import { Link } from "react-router-dom";

export class InfoPage extends Component {
  render() {
    return (
      <div className="InfoPage">
        <img
          className="logoicon"
          src={require("./logo.png")}
          alt="omni--logo"
        />{" "}
        <h2>OMNI q&a has the answer to everything your team needs to know.</h2>
        <h3>
          Save time and increase productivity by directing team members to the
          questions they really need answers to!
        </h3>
        <p>
          Once a user has signed up, they can view the questions asked, filter
          the questions by department name, and ask their own.
          <br />
          Don't forget, every time you're getting ready to commit changes, stand
          up and yell out 'I'M PUSHING TO MASTER'
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
