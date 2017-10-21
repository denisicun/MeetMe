import React, { Component } from 'react';
import MyPics from '../myPics/myPics';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';
import {Animated} from "react-animated-css";
import { Link } from 'react-router-dom'

export default class Navb extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
      this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">
            <MyPics />
            <Animated animationIn="rotateInDownLeft">
              Denis Sicun - That is me up there :)
            </Animated>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/'><NavLink href="#" active={true}>Welcome</NavLink></Link>
              </NavItem>
                <NavItem>
                  <NavLink href="">Who am I?</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Military Service</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Special Stuff</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">Articals</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">CV files</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Animated>
        </Navbar>
      </div>
    );
  }
}
