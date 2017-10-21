import React, { Component } from 'react';
import Header from './header/header';
import Content from './content/content';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <Content />
      </div>
    );
  }
}
