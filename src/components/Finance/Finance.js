import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

export class Finance extends Component {
  render() {
    return (
      <div className="finance">
        <NavBar />
        all finance qas
        <Link to="/Dashboard">
          <button type="button">go back</button>
        </Link>
      </div>
    );
  }
}

export default Finance;
