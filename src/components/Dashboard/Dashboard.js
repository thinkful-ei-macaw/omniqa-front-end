import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";

export class Dashboard extends Component {
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
              <img src="Spongebob_squarepants.png" />
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
              <img src="Spongebob_squarepants.png" />
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
              <img src="Spongebob_squarepants.png" />
            </div>
            <div className="image-stats">
              <p>Spongebob Squarepants</p>
              <p>Lord of the Sea</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
