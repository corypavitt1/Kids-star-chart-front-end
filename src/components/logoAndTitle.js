import React, { Component } from 'react';
import WOW from 'wow.js'
import logo from '../images/logo.png';


const LogoAndTitle = props => {

  componentDidMount(){
    const wow = new WOW();
    wow.init();
  }


    return (
      <div>
      <header className="App-two wow rubberBand"   animation-delay="3" data-wow-offset="1"  data-wow-iteration="1">

        <img src={logo} className="App-logo" alt="logo" />

        <a>
        <h3>

      <small className="text-muted"> ⭐️KIDS REWARDS CHART⭐️</small>
      </h3>

        </a>

      </header>

      </div>
    );
  

}

export default LogoAndTitle;
