import React, { Component } from "react";
import UserContext from "../../Context/UserContext";
import "./Sidebar.css";

export class Sidebar extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div className="Sidebar">
        <section className="myQs">
          <label>Q's that I...</label>
          <ul className="barUl">
            <li>Asked</li>
            <li>Answered</li>
            <li>Voted</li>
            <li>Liked</li>
          </ul>
        </section>
        <section className="departments">
          <label>Q's with tags...</label>
          <ul className="barUl">
            <li>All tags</li>
            <li>Marketing</li>
            <li>Engineering</li>
            <li>Sales</li>
            <li>Support</li>
            <li>Success</li>
            <li>General</li>
            <li>R&D</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Sidebar;
