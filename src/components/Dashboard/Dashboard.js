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
            <p class="questions">What is the phone number for 911?</p>
          </div>
          <div class="image-info">
            <div>
              <p>Asked By</p>
              <img src="Spongebob_squarepants.png" />
            </div>
          </div>
          <div class="image-stats">
            <p>Spongebob Squarepants</p>
            <p>Lord of the Sea</p>
          </div>
        </section>
        <section>
          <div>
            <p class="questions">
              If you can buy a dozen donuts for 12 cents, how many donuts can
              you buy for $1.00?
            </p>
          </div>
          <div class="image-info">
            <div>
              <p>Asked By</p>
              <img src="Spongebob_squarepants.png" />
            </div>
            <div class="image-stats">
              <p>Spongebob Squarepants</p>
              <p>Lord of the Sea</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <p class="questions">Durrrrrr can't think of anything</p>
          </div>
          <div class="image-info">
            <div>
              <p>Asked By</p>
              <img src="Spongebob_squarepants.png" />
            </div>
            <div class="image-stats">
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
