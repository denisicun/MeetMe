import React, { Component } from 'react';
import MyPics from '../myPics/myPics';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css'

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
          <NavbarBrand href="/"><MyPics /> Denis Sicun </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="" active={true}>Welcome</NavLink>
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
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
