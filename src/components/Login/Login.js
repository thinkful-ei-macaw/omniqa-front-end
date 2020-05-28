import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import AuthApiService from "../../Services/auth-api-service";
import UserContext from "../../Context/UserContext";
import TokenService from "../../Services/TokenService";

export class Login extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

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
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  //===================uncomment this out once login is ready!!if needed????==========

  //  static defaultProps = {
  //     onLoginSuccess: () => {},
  //   };

  //   static contextType = UserContext;

  //   state = { error: null };

  //   firstInput = React.createRef();
  //   handleSubmit = (ev) => {
  //     ev.preventDefault();
  //     const { username, password } = ev.target;

  //     this.setState({ error: null });

  //     AuthApiService.postLogin({
  //       username: username.value,
  //       password: password.value,
  //     })
  //       .then((res) => {
  //         username.value = "";
  //         password.value = "";
  //         this.context.processLogin(res.authToken);
  //         this.props.onLoginSuccess();
  //       })
  //       .catch((res) => {
  //         this.setState({ error: res.error });
  //       });
  //   };

  //   componentDidMount() {
  //     this.firstInput.current.focus();
  //   }
  render() {
    return (
      <div>
        <section id="log-in">
          <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
            <fieldset>
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
                <button type="submit">Log In</button>
              </Link>
            </fieldset>
          </form>
        </section>
      </div>
    );
  }
}

export default Login;
