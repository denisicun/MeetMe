import React, { Component } from 'react';
import Logo from './logo/logo';
import MyPics from './myPics/myPics';

export default class Header extends Component {
  render() {
  	var divStyle = {
  		display: 'flex'
	};

    return (
      <nav className="navbar navbar-light bg-faded">
	      <div style={divStyle}>
	        <Logo/>
	        <MyPics/>
	      </div>
      </nav>
    );
  }
}
