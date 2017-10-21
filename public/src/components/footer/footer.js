import React, { Component } from 'react';
import './footer.css';
import {Animated} from "react-animated-css";
import { FaGithub, FaLinkedin } from 'react-icons/lib/fa'

export default class Footer extends Component {
  render() {
    return (
      <Animated animationIn="fadeIn">
        <div className='footer'>
           Built By Denis Sicun (which is me) - Visit me on <a href="https://github.com/denisicun/MeetMe"><FaGithub /></a> & <a href="https://www.linkedin.com/in/denis-sicun/"><FaLinkedin /></a>
        </div>
      </Animated>
    );
  }
}
