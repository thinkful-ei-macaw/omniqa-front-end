import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

export class HR extends Component {
  render() {
    return (
      <div className="HR">
        <NavBar />
        all hr qas
        <Link to="/Dashboard">
          <button type="button">go back</button>
        </Link>
      </div>
    );
  }
}

export default HR;
