import React, { Component } from 'react';
import './content.css';
import Welcome from './welcome/welcome';
import BasicMe from './basicMe/basicMe';
import { Switch, Route } from 'react-router-dom';
import {Animated} from "react-animated-css";

export default class Content extends Component {

  render() {
    return (
      <div className='content'>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/basic' component={BasicMe} />
        </Switch>
      </div>
    );
  }
}
