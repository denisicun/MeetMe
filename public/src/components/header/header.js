import React, { Component } from 'react';
import Navb from './navigator/navbar';
import './header.css';
import {Animated} from "react-animated-css";


export default class Header extends Component {
  render() {
    return (
      <div className='header'>
         <Navb />
      </div>
    );
  }
}
