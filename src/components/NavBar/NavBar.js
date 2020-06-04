import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import magn from "./search.png";
import UserContext from "../../Context/UserContext";
import TokenService from "../../Services/TokenService";

export class NavBar extends Component {
  static contextType = UserContext;

  componentDidMount() {}

  handleLogoutClick = () => {
    this.context.processLogout();
    window.location = "/login";
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
          <li>
            <Link id="link" to="/Question">
              <button id="question-btn">Ask a question</button>
            </Link>
          </li>
          <li className="selector">
            <select type="select" onChange={this.handleLogoutClick}>
              <option selected disabled>
                {TokenService.getInfoFromToken().sub}
              </option>
              <option>Logout</option>
            </select>
          </li>
        </ul>
        <div className="line">this is a line</div>
      </nav>
    );
  }
}

export default NavBar;
