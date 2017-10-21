import React, { Component } from 'react';
import './basicMe.css';
import { Jumbotron, Button } from 'reactstrap';
import {Animated} from "react-animated-css";

export default class BasicMe extends Component {

  render() {
    return (
      <Animated animationIn="fadeInUp" animationOut="fadeOutRight">
        <div>
          <Jumbotron>
            <h1 className="display-1">This is me</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
        </div>
      </Animated>
    );
  }
}
