import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import magn from './search.png';
import UserContext from '../../Context/UserContext';
import TokenService from '../../Services/TokenService';

export class NavBar extends Component {
  static contextType = UserContext;

  componentDidMount() {}

  handleLogoutClick = () => {
    this.context.processLogout();
    window.location = '/login';
  };

  render() {
    return (
      <nav className='nav'>
        <ul id='wholeNav'>
          <li id='logoicon'>
            <img className='logoicon' src={require('./logoicon.png')} alt='omni--logo' />
          </li>

          <li>
            <form className='search-bar'>
              <input type='text' placeholder='Search for questions...' id='search-text-input' />
              <input type='image' name='submit' id='magn' src={magn} alt='magnifying-glass' />
            </form>
          </li>
        </ul>

        <ul id='navButtons'>
          <li className='span1'>
            <button>Q&A Home</button>
          </li>
          <li className='span2'>
            <button>Answer Q's</button>
          </li>
          <li>
            <Link id='link' to='/Question'>
              <button id='question-btn'>Ask a question</button>
            </Link>
          </li>
        </ul>
        <li className='selector'>
          <span>
            Hello, {TokenService.getInfoFromToken().sub}!{'   '}
          </span>
          <Link id='logoutlink'>Logout</Link>
        </li>
        <ul />
        <div className='line' />
      </nav>
    );
  }
}

export default NavBar;
