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
    const full_name = ev.target[0];
    const user_name = ev.target[1];
    const password = ev.target[3];
    const nick_name = ev.target[4];

    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
      nickname: nick_name.value,
    })
      .then((user) => {
        full_name.value = "";
        nick_name.value = "";
        user_name.value = "";
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
                  <input class="btn btn--form" type="submit" value="Register" />
                </li>
                <li>
                  <Link to="/login">
                    {" "}
                    <button type="button">I am already a member</button>
                  </Link>
                </li>
              </ul>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Registration;
