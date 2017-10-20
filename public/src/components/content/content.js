import React, { Component } from 'react';
import './content.css';
import Welcome from './welcome/welcome';
export default class Content extends Component {

  render() {
    return (
      <div className='content'>
        <Welcome />
      </div>
    );
  }
}
