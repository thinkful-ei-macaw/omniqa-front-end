import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <NavBar />
        Dashboard
      </div>
    );
  }
}

export default Dashboard;
