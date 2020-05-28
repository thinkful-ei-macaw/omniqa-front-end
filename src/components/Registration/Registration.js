import React, { Component } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";
import AuthApiService from "../../Services/auth-api-service";

export class Registration extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };
  state = { error: null };
  handleSubmit = (ev) => {
    ev.preventDefault();
    const name = ev.target[0];
    const username = ev.target[1];
    const password = ev.target[2];

    this.setState({ error: null });
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
      name: name.value,
    })
      .then((user) => {
        name.value = "";
        username.value = "";
        password.value = "";
        this.props.onRegistrationSuccess(user);
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };
  render() {
    return (
      <div className="Registration">
        <form id="signup" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>sign up here</legend>
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
              <label for="name">Your name</label>
              <input
                class="form-control"
                type="text"
                name="name"
                id="name"
                placeholder="James Bond"
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

            <div class="submit--reg">
              <button class="submit-form" type="submit">
                Register
              </button>

              <Link to="/login">
                {" "}
                <button type="button">I am already a member</button>
              </Link>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Registration;
