import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import img from './search.png';

export class NavBar extends Component {
  render() {
    return (
      <nav className='nav'>
        <ul>
          <li id='logo'>
            <img src={require('./logo.png')} alt='omni logo' />
          </li>
          <li>
            <form className='search-bar'>
              <input type='text' placeholder='Search for questions...' id='search-text-input' />
              <input type='image' name='submit' id='magn' src={img} />
            </form>
          </li>
          <li>
            <span>Q&A Home</span>
          </li>
          <li>
            <span>Answer Q's</span>
          </li>
          <li id='question-btn'>
            <Link to='/Question'>Ask a question</Link>
            {/* <button onClick="window.location.href='question.html'">Ask a question</button> */}
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
