import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Save} from '../../images/save.svg'
import  "../../images/woman.png"
import './LandingPage.css';
import Woman from '../../images/woman.png';
import {ReactComponent as Funnel} from '../../images/funnel.svg';
import {ReactComponent as Ios} from '../../images/ios.svg';
import {ReactComponent as Group} from '../../images/Group.svg';
import {ReactComponent as Check} from '../../images/check.svg';



export default class LandingPage extends Component {
  render() {
    return (
      <>
    <main>
      <section class="intro">
        <h1 className="intro__title">
          Easy Company Knowledge
        </h1>
        <p className="intro__subtitle">
          Omni is a knowledge management platform that makes you smarter by putting your company’s knowledge at your fingertips.
        </p>
        <Link to="/registration"className="button">Get started</Link>
<img src={Woman} className="intro__illustration" alt="woman"/>

      </section>
      <section id="features" class="features">
        <h2 class="visuallyhidden">Features</h2>
        <ul class="features__list">
          <li>
            <Funnel className="svg"/>
            <p><strong>Use quick filters </strong>to find knowledge anywhere. </p>
          </li>
          <li>
            <Save className="svg"/>
            <p><strong>Save your liked questions</strong> to a private list.</p>
          </li>
          <li>
            <Ios className="svg"/>
            <p><strong>Works on any device, </strong> mobile and web.</p>
          </li>
        </ul>
      </section>
      <section id="how-it-works" class="grow">
        <h2 class="section__title grow__title">Knowledge management software for the future of work
</h2>
        <p>
          Omni captures your team's most valuable information and organizes it into a single source of truth.
        </p>
        <Group className="svg"/>
      </section>
      <div class="arrow-1"></div>
      <section class="get-feedback">
        <h2 class="section__title get-feedback__title">
          Transforms it into knowledge
        </h2>
        <p>
          Answers are verified by your companies experts with upvotes <strong>(coming soon!)</strong>.
        </p>
        <Check className="svg"/>

      </section>
      <div class="arrow-2"></div>
      <section class="learning">
        <h2 class="section__title learning__title">
          Start learning immediately
        </h2>
        <p>
          It takes no time to start learning with us, This means, once you sign up for an account, you can start
          learning immediately and get access to our community.
        </p>
       
      </section>
      <div id="get-started" class="get-started">
        <ul>
          <li>
          
            <p><strong class="counter community-members">1.2</strong><strong>K+</strong></p>
            <p>Community Members</p>
          </li>
          <li>
            
            <p><strong class="counter number-of-pages">1.9</strong><strong>K+</strong></p>
            <p>Pages with content for you to learn</p>
          </li>
        </ul>
      </div>
    </main>
    </>
    
    );
  }
}
