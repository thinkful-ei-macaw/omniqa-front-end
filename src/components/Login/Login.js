import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import AuthApiService from "../../Services/auth-api-service";
import UserContext from "../../Context/UserContext";

export class Login extends Component {
  //===================uncomment this out once login is ready!!==========

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
          <form className="LoginForm" onSubmit={this.handleSubmit}>
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
