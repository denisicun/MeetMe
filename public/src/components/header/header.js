import React, { Component } from 'react';
// import Logo from './logo/logo';
//import MyPics from './myPics/myPics';
import Navb from './navigator/navbar';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
         <Navb />
      </div>
    );
  }
}
