import React, { Component } from 'react';
// import Logo from './logo/logo';
import MyPics from './myPics/myPics';
import './header.css';

export default class Header extends Component {
  render() {
  // 	var divStyle = {
  // 		display: 'flex',
  //     backgroud: 'cadetblue'
	// };

    return (
      <div className='header'>
	       <MyPics/>
      </div>
    );
  }
}
