import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import magn from "./search.png";
import QuestionContext from "../../Context/QuestionContext";
import TokenService from "../../Services/TokenService";

export class NavBar extends Component {
  static contextType = QuestionContext;

  componentDidMount() { }

  handleLogoutClick = () => {
    console.log("clicked");
    this.context.processLogout();
    window.location = "/login";
  };

  render() {



    return (
      <nav className="nav">
        <ul id="wholeNav">
          <li id="logoicon">
            <img
              className="logoicon"
              src={require("./logoicon.png")}
              alt="omni--logo"
            />
          </li>
          <li className="selector">
            <span>
              Hello, {TokenService.getInfoFromToken().sub}!{"   "}
            </span>
            <span onClick={this.handleLogoutClick} id="logoutlink">
              Logout
            </span>
          </li>
          <li>
            {/* <form className="search-bar">
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
            </form> */}
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
