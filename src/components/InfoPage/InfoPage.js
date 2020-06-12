import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./InfoPage.css";

export class InfoPage extends Component {
  render() {
    return (
      <div className="InfoPage">
        <img
          className="logoicon"
          src={require("./logo.png")}
          alt="omni--logo"
        />{" "}
        <h2 className="info">
          OMNI q&a has the answer to everything your team needs to know.
        </h2>
        <h3 className="info">
          Save time and increase productivity by directing team members to the
          questions they really need answers to!
        </h3>
        <p className="info">
          <p>
            Once a user has registered, they can view the questions asked,
            filter the questions by department name, and ask their own.
          </p>
          <p>Users can 'like' questions to indicate their importance;</p>
          <p>
            Once signed up, users can also view the questions they asked,
            providing quick and easy access to what they need to know
          </p>
          <p>
            Users can also answer questions they know the answer to, and all
            answers will be displayed so everyone can get the most up-to-date
            information
          </p>
          <p>
            Users can delete questions they posted. This will help to ensure the
            dashboard is not full of duplicates
          </p>
          <p>Use the demo login below to try it out!</p>
          <p>
            Demo username: dasha
            <br />
            password: Password123#
          </p>
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
