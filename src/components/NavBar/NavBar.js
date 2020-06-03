import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import magn from "./search.png";
import UserContext from "../../Context/UserContext";

export class NavBar extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  render() {
    return (
      <nav className="nav">
        <ul>
          <li id="logoicon">
            <img
              className="logoicon"
              src={require("./logoicon.png")}
              alt="omni--logo"
            />
          </li>
          <li>
            <form className="search-bar">
              <input
                type="text"
                placeholder="Search for questions..."
                id="search-text-input"
              />
              <input
                type="image"
                name="submit"
                id="magn"
                src={magn}
                alt="magnifying-glass"
              />
            </form>
          </li>
          <li className="span1">
            <span>Q&A Home</span>
          </li>
          <li className="span2">
            <span>Answer Q's</span>
          </li>
          <li id="question-btn">
            <Link id="link" to="/Question">
              Ask a question
            </Link>
          </li>
          <li className="selector">
            <select type="select">
              <option selected disabled>
                {this.context.user.username}
              </option>
              <option>
                {" "}
                <Link
                  id="nav-link"
                  onClick={this.handleLogoutClick}
                  to="/login"
                >
                  Logout
                </Link>
              </option>
            </select>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
