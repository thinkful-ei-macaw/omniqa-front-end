import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Group} from '../../images/Group.svg'
import  "../../images/woman.png"
import './LandingPage.css';
import Woman from '../../images/woman.png';
import {ReactComponent as Docs} from '../../images/docs.svg';

export default class LandingPage extends Component {
  render() {
    return (
      <>
     
      <main>
         <section className="landing_page">
           <div className="hero">
            <h1>Easy company knowledge</h1>
            <p>Omni is a place that connects your team's scattered knowledge so that you can always find what you're looking for.</p>
            <Group/>
            <div className="button_container">
             <Link to={'/registration'}>
            <button>Get started</button>
             </Link>
            </div>
             </div>
             <div className="features_section_container">
            <div className="features_section">
            <h1>Break out of asking questions to humans</h1>
            <p>Using quick filters gives you easy access to common knowledge across departments.</p>
            <div className="image_container">
              <img src={Woman} alt="woman"></img>
              <div>
              </div>
            </div>
            </div>
            </div>
              <div className="features_section">
            <h1>Save your favorite questions</h1>
            <p>Keep the questions that you liked or asked at your fingertips in a private list.
            </p>
            <div className="image_container">
              <div>
                <Docs/>
                {/* <img src={HappyFeeling} alt="happy woman walking"></img> */}
              </div>
            </div>
            </div>
         </section>
       </main>
     </>
    );
  }
}
