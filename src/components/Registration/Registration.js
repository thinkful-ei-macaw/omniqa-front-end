import React, { Component } from "react";
import "./Registration.css";

export class Registration extends Component {
  render() {
    return (
      <div>
        <main>
          <form id="signup">
            <fieldset>
              <legend>sign up to save progress</legend>
              <div class="form-group">
                <label for="username">Username</label>
                <input
                  class="form-control"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="james.bond"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  class="form-control"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="james.bond@spectre.com"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  class="form-control"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  required
                />
              </div>
              <div class="form-group">
                <label for="passwordRepeat">Repeat Password</label>
                <input
                  class="form-control"
                  type="password"
                  name="passwordRepeat"
                  id="passwordRepeat"
                  placeholder="********"
                  required
                />
              </div>
              <div class="m-t-lg">
                <ul class="list-inline">
                  <li>
                    <input
                      class="btn btn--form"
                      type="submit"
                      value="Register"
                    />
                  </li>
                  <li>
                    <a class="signup__link" href="existing-member.html">
                      I am already a member (this will link to below)
                    </a>
                  </li>
                </ul>
              </div>
            </fieldset>
          </form>
        </main>
      </div>
    );
  }
}

export default Registration;
