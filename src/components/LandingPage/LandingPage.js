import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Group} from '../../images/Group.svg'
import './LandingPage.css';
import img from './logo.png';

export default class LandingPage extends Component {
  render() {
    return (
      <>
      <main>
         <section className="landing_page">
           <div className="hero">
            <h1>Create healthier coding&nbsp;habits</h1>
            <Group/>
            <div className="button_container">
             <Link to={'/registration'}>
            <button>Get started</button>
             </Link>
            </div>
             </div>
             <div className="features_section_container">
            <div className="features_section">
            <h1>Focus on what&nbsp;matters</h1>
            <p>Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list (no matter where you are or what device you use).
            </p>
            <div className="image_container">
              <div>
                {/* <img src={MobileDevice} alt="mobile devices"></img> */}
              </div>
            </div>
            </div>
            </div>
              <div className="features_section">
            <h1>Stay motivated with&nbsp;streaks</h1>
            <p>Reward yourself with motivating streaks and check off tasks to level up your emoji!
            </p>
            <div className="image_container">
              <div>
                {/* <img src={HappyFeeling} alt="happy woman walking"></img> */}
              </div>
            </div>
            </div>
            
            <div className="features_section">
            <h1>Keep track of your breaks&nbsp;</h1>
            <p>Get reminded to take breaks after completing coding sessions. Taking breaks can boost productivity, spark creative ideas, and retain information (coming soon!).
            </p>
            <div className="image_container">
              <div>
                {/* <img src={TakeBreaks} alt="woman taking a break"></img> */}
              </div>
            </div>
            </div>
         </section>
       </main>
     </>
    );
  }
}
