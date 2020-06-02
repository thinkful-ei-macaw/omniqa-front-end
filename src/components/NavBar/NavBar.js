import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import img from "./search.png";
import UserContext from "../../Context/UserContext";

export class NavBar extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  render() {
    return (
      <nav className="nav">
        {/* only works on refresh!!screemmmmm */}
        <span id="user-name">hello {this.context.user.username}</span>

        <Link id="nav-link" onClick={this.handleLogoutClick} to="/login">
          Logout
        </Link>

        <ul>
          <li id="logo">
            <img src={require("./logo.png")} alt="omni--logo" />
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
                src={img}
                alt="omni--logo"
              />
            </form>
          </li>
          <li>
            <span>Q&A Home</span>
          </li>
          <li>
            <span>Answer Q's</span>
          </li>
          <li id="question-btn">
            <Link to="/Question">Ask a question</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
