import React, { Component } from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';
import AuthApiService from '../../Services/auth-api-service';
import QuestionContext from '../../Context/QuestionContext';
import TokenService from '../../Services/TokenService';
export class Registration extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  static contextType = QuestionContext;

  state = { error: null };
  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, username, password, confirmpassword } = ev.target;
    this.setState({ error: null });

    if (password.value !== confirmpassword.value) {
      alert('Passwords do not match.');
    } else {
      AuthApiService.postUser({
        username: username.value,
        password: password.value,
        name: name.value
      })
        .then((user) => {
          this.onRegistrationSuccess(username.value, password.value);
          name.value = '';
          username.value = '';
          password.value = '';
        })
        .catch((res) => {
          this.setState({ error: res.error });
        });
    }
  };
  onRegistrationSuccess = (username, password) => {
    AuthApiService.postLogin({
      username: username,
      password: password
    })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        const { history } = this.props;
        history.push('/dashboard');
      })
      .catch((res) => {
        this.setState({
          error: res.error.message
        });
      });
  };
  render() {
    const { error } = this.state;
    return (
      <div className='login-page'>
        <div className="form-header">
          <div className="form">
        <div role='alert'>{error && <p>{error}</p>}</div>
        <form id='signup' onSubmit={this.handleSubmit}>
          
            <h1>Sign Up</h1>
            <label htmlFor='username'>Username: </label>
            <input
              className='form-control'
              type='text'
              name='username'
              id='username'
              placeholder='james.bond'
              required
            />
           
            <label htmlFor='name'>Your Name: </label>
            <input className='form-control' type='text' name='name' id='name' placeholder='James Bond' required />
          
            <label htmlFor='password'>Password:</label>
            <input
              className='form-control'
              type='password'
              name='password'
              id='password'
              placeholder='Password123!'
              required
            />
          
            <label htmlFor='password'>Confirm Password:</label>

            <input
              className='form-control'
              type='password'
              name='confirmpassword'
              id='confirmpassword'
              placeholder='Password123!'
              required
            />
           
            <button className='submit-form' type='submit'>
              Register
            </button>

            <Link to='/dashboard'>
               <p class="message">Already have an account? <span>Login</span></p>
            </Link>
        </form>
        </div>
        </div>
      </div>
    );
  }
}

export default Registration;
