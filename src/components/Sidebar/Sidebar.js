import React, { Component } from "react";
import UserContext from "../../Context/UserContext";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export class Sidebar extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div className="Sidebar">
        <section className="myQs">
          <label>Q's that I...</label>
          <ul className="barUl">
            <li>
              <Link id="side__tag" to="/asked">
                Asked
              </Link>
            </li>
            <li>
              <Link id="side__tag" to="/answeres">
                Answered
              </Link>
            </li>
            <li>
              <Link id="side__tag" to="/voted">
                Voted
              </Link>
            </li>
            <li>
              <Link id="side__tag" to="liked">
                Liked
              </Link>
            </li>
          </ul>
        </section>
        <section className="departments">
          <label>Q's with tags...</label>
          <ul className="barUl">
            <li>
              <Link id="side__tag" to="/Dashboard">
                All tags
              </Link>
            </li>
            <li>
              <Link id="side__tag" to="/marketing">
                Marketing
              </Link>
            </li>
            <li>
              <Link id="side__tag" to="/engineering">
                Engineering
              </Link>
            </li>
            <li>
              <Link id="side__tag" to="/sales">
                Sales
              </Link>
            </li>
            <li>
              <Link id="side__tag" to="/HR">
                Support
              </Link>
            </li>
            <li>
              <Link id="side__tag" to="/success">
                Success
              </Link>
            </li>
            <li>
              <Link id="side__tag" to="/general">
                General
              </Link>
            </li>
            <li>
              <Link id="side__tag" to="/finance">
                Finance{" "}
              </Link>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Sidebar;
