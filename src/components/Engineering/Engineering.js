import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export class Engineering extends Component {
  render() {
    return (
      <div className="engineering">
        <NavBar />
        all Engineering qas
        <Link to="/Dashboard">
          <button type="button">go back</button>
        </Link>
      </div>
    );
  }
}

export default Engineering;
