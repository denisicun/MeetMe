import React, { Component } from 'react';
import './content.css';
import Welcome from './welcome/welcome';
import { Switch, Route } from 'react-router-dom';
import {Animated} from "react-animated-css";

export default class Content extends Component {

  render() {
    return (
      <Animated animationIn="fadeInUp" animationOut="fadeOutRight">
        <div className='content'>
          <Switch>
            <Route exact path='/' component={Welcome} />
          </Switch>
        </div>
      </Animated>
    );
  }
}
