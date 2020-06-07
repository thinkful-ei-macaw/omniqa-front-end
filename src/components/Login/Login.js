import React, { Component } from 'react';
import './Login.css';
import AuthApiService from '../../Services/auth-api-service';
import UserContext from '../../Context/UserContext';
import TokenService from '../../Services/TokenService';
import { Link } from 'react-router-dom';
import omniLogo from './logo.png';

export class Login extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  static contextType = UserContext;

  state = { error: null };

  handleSubmitJwtAuth = (ev) => {
 
    ev.preventDefault();
    this.setState({ error: null });
    const { username, password } = ev.target;
    console.log(username,password )
    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then((res) => {
        username.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        this.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error.message });
      });
  };

  onLoginSuccess = () => {
    const { history } = this.props;
    history.push('/Dashboard');
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
    const { error } = this.state;
    return (
      <div className='Login'>
        <div role='alert'>{error && <p>{error}</p>}</div>
        <img className='logo' src={omniLogo} alt='omni--logo' />
        <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>
          <fieldset>
            <legend>Log In</legend>
            <label htmlFor='username'>Username: </label>
            <input
              className='form-control'
              type='text'
              name='username'
              id='username'
              placeholder='james.bond'
              required
            />
            <br />
            <label htmlFor='password'>Password: </label>
            <input
              className='form-control'
              type='password'
              name='password'
              id='password'
              placeholder='********'
              required
            />
            <br />
            <button type='submit'>Log In</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Login;
