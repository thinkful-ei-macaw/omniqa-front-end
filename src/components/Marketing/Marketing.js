import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

export class Marketing extends Component {
  render() {
    return (
      <div className="marketing">
        <NavBar />
        all Marketing qas
        <Link to="/Dashboard">
          <button type="button">go back</button>
        </Link>
      </div>
    );
  }
}

export default Marketing;
