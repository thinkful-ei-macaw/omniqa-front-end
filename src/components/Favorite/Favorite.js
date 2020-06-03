import React, { Component } from "react";
import QuestionContext from "../../Context/QuestionContext";

export class Favorite extends Component {
  static contextType = QuestionContext;

  render() {
    return (
      <div>
        <h2>this is where your likes go</h2>
      </div>
    );
  }
}

export default Favorite;
