import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";
import config from "../../config";
import QuestionContext from "../../Context/QuestionContext";

export class Dashboard extends Component {
  //handleDelete

  static contextType = QuestionContext;
  handleDelete = (e) => {
    e.preventDefault();
    const questionId = this.props.id;

    fetch(`${config.API_ENDPOINT}/api/questions/${questionId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then(() => {
        this.context.deleteQuestion(questionId);
        // allow parent to perform extra behaviour << you can tell Dasha wrote this
        //because I'm the only one who writes british style
        this.props.onDeleteQuestion(questionId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };
  render() {
    return (
      <div className="dashboard">
        <NavBar />
        <section>
          <div>
            <p className="questions">What is the phone number for 911?</p>
          </div>
          <div className="image-info">
            <div>
              <p>Asked By</p>
              <img src="Spongebob_squarepants.png" alt="user-profile-pic" />
            </div>
          </div>
          <div className="image-stats">
            <p>Spongebob Squarepants</p>
            <p>Lord of the Sea</p>
          </div>
        </section>
        <section>
          <div>
            <p className="questions">
              If you can buy a dozen donuts for 12 cents, how many donuts can
              you buy for $1.00?
            </p>
          </div>
          <div className="image-info">
            <div>
              <p>Asked By</p>
              <img src="Spongebob_squarepants.png" alt="user-profile-pic" />
            </div>
            <div className="image-stats">
              <p>Spongebob Squarepants</p>
              <p>Lord of the Sea</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <p className="questions">Durrrrrr can't think of anything</p>
          </div>
          <div className="image-info">
            <div>
              <p>Asked By</p>
              <img src="Spongebob_squarepants.png" alt="user-profile-pic" />
            </div>
            <div className="image-stats">
              <p>Spongebob Squarepants</p>
              <p>Lord of the Sea</p>
            </div>
          </div>
        </section>
        <button type="delete" onSubmit={this.handleDelete}>
          delete this question but only if you asked it
        </button>
      </div>
    );
  }
}

export default Dashboard;
