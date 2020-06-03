import React, { Component } from "react";
import UserContext from "../../Context/UserContext";

export class Sidebar extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div className="Sidebar">
        this is a side bar but its not on the side yet
        <span id="user-name">
          this is your navigation: {this.context.user.username}
        </span>{" "}
        <section className="departments">
          <ul className="departments">
            Departments:
            <li>Marketing</li>
            <li>Sales</li>
            <li>HR</li>
            <li>Finance</li>
            <li>Engineering</li>
          </ul>
          <p>these links will be clickable</p>
        </section>
      </div>
    );
  }
}

export default Sidebar;
