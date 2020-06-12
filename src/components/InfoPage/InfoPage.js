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
            Once signed up, users can also view the questions they asked.. even
            compulsively checking for the answers
          </p>
          <p>But questions aint shit without answers! </p>
          <p>
            Users can answer questions they know the answer to, and all answers
            will be displayed so everyone can easily judge them
          </p>
          <p>
            Once you realise how dumb your question was, you can delete it! But
            only if you are the one who asked it in the first place... we don't
            want to appear rude
          </p>
          <p>
            Don't forget, every time you're getting ready to commit changes,
            stand up and yell out 'I'M PUSHING TO MASTER'
          </p>
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
