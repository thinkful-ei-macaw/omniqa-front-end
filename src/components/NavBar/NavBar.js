import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export class NavBar extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <form>
              <label>Search for questions</label>
              <input type="text" />
              <button type="submit">Find</button>
            </form>
          </li>
          <li id="question-btn">
            <Link to="/Question">Ask a question</Link>
            {/* <button onClick="window.location.href='question.html'">Ask a question</button> */}
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
