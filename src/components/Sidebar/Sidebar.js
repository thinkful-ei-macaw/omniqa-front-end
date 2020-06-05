import React, { Component } from 'react';
import UserContext from '../../Context/UserContext';
import './Sidebar.css';
import { Link } from 'react-router-dom';

export class Sidebar extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div className='Sidebar'>
        <section className='myQs'>
          <Link id='side__tag' to='/Dashboard'>
            All Q&As
          </Link>
          <br />
          <br />
          <label>Q's that I...</label>
          <br />
          <ul className='barUl'>
            <li>
              <Link id='side__tag' to='/asked'>
                Asked
              </Link>
            </li>
            <br />
            <li>
              <Link id='side__tag' to='/answered'>
                Answered
              </Link>
            </li>
            <br />
            <li>
              <Link id='side__tag' to='/voted'>
                Voted
              </Link>
            </li>
            <br />
            <li>
              <Link id='side__tag' to='liked'>
                Liked
              </Link>
            </li>
            <br />
          </ul>
        </section>
        <section className='departments'>
          <label>Q's with tags...</label>
          <br />
          <ul className='barUl'>
            <li>
              <Link id='side__tag' to='/Dashboard'>
                All tags
              </Link>
            </li>
            <br />
            <li>
              <Link id='side__tag' to='/marketing'>
                Marketing
              </Link>
            </li>
            <br />
            <li>
              <Link id='side__tag' to='/engineering'>
                Engineering
              </Link>
            </li>
            <br />
            <li>
              <Link id='side__tag' to='/sales'>
                Sales
              </Link>
            </li>
            <br />
            <li>
              <Link id='side__tag' to='/HR'>
                Support
              </Link>
            </li>
            <br />
            <li>
              <Link id='side__tag' to='/success'>
                Success
              </Link>
            </li>
            <br />
            <li>
              <Link id='side__tag' to='/general'>
                General
              </Link>
            </li>
            <br />
            <li>
              <Link id='side__tag' to='/finance'>
                Finance{' '}
              </Link>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Sidebar;
