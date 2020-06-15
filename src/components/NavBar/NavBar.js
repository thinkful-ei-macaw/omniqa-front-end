import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import QuestionContext from "../../Context/QuestionContext";
import TokenService from "../../Services/TokenService";

export class NavBar extends Component {
  static contextType = QuestionContext;

  componentDidMount() { }

  handleLogoutClick = () => {
    this.context.processLogout();
    window.location = "/login";
  };

  render() {

    return (
      <nav className="nav">
        <ul className="nav_navigation">
          <span className="logout-link" onClick={this.handleLogoutClick}>
              Logout
            </span>
          <Link to="/">
          <li id="logoicon">
            <img
              className="logoicon"
              src={require("./logoicon.png")}
              alt="omni--logo"
            />
          </li>
          </Link>
          <li className="selector">
            <span>
              Hello, {TokenService.getInfoFromToken().sub}!{"   "}
            </span>
            
          </li>
          <li>
          </li>
            <Link id="link" to="/Question">
              <button className="nav-btn " id="question-btn">Ask a question</button>
            </Link>
          
        </ul>
        <ul />
      </nav>
    );
  }
}

export default NavBar;
