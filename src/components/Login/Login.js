import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export class Login extends Component {
  render() {
    return (
      <div>
        <section id="log-in">
          <form>
            <fieldset>
              <form>
                <label for="username">Username</label>
                <input
                  class="form-control"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="james.bond"
                  required
                />
                <label for="password">Password</label>
                <input
                  class="form-control"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  required
                />
                <Link to="Dashboard">
                  {/* <button
                  type="button"
                  onClick="window.location.href='dashboard.html'"
                > */}
                  Log In
                </Link>
                {/* </button> */}
              </form>
            </fieldset>
          </form>
        </section>
      </div>
    );
  }
}

export default Login;
