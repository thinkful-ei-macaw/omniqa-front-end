import React, { Component } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";
import AuthApiService from "../../Services/auth-api-service";
import UserContext from "../../Context/UserContext";

export class Registration extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  static contextType = UserContext;

  state = { error: null };
  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, username, password } = ev.target;

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
        this.onRegistrationSuccess(user);
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  onRegistrationSuccess = () => {
    const { history } = this.props;
    history.push("/Dashboard");
  };
  render() {
    const { error } = this.state;
    return (
      <div className="Registration">
        <div role="alert">{error && <p>{error}</p>}</div>

        <form id="signup" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>sign up here</legend>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                className="form-control"
                type="text"
                name="username"
                id="username"
                placeholder="james.bond"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                placeholder="James Bond"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="********"
                required
              />
            </div>

            <div className="submit--reg">
              <button className="submit-form" type="submit">
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
