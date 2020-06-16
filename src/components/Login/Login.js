import React, { Component } from "react";
import "./Login.css";
import AuthApiService from "../../Services/auth-api-service";
import QuestionContext from "../../Context/QuestionContext";
import TokenService from "../../Services/TokenService";

export class Login extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = QuestionContext;

  state = { error: null };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { username, password } = ev.target;
    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error.message });
      });
  };
  onLoginSuccess = () => {
    this.context.loadData()
    const { history } = this.props;
    history.push("/Dashboard");
  };

  render() {
    const { error } = this.state;
    return (
      <div className="Login">
        <div className="form">
        <div role="alert">{error && <p>{error}</p>}</div>
        <form className="register-form" onSubmit={this.handleSubmitJwtAuth}>
          <fieldset>
            <h1>Log In</h1>
            <label htmlFor="username">Username: </label>
            <input
              className="form-control"
              type="text"
              name="username"
              id="username"
              placeholder="james.bond"
              required
            />
            <br />
            <label htmlFor="password">Password: </label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="********"
              required
            />
            <br />
            <button type="submit">Log In</button>
          </fieldset>
          
        </form>
        </div>
      </div>
    );
  }
}

export default Login;
