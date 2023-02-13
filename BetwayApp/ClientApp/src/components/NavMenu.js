import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      style: ""
    };
  }


  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm bg-black border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/"><img src="https://cdn.betway.co.za/images/Shared/sprite/site/Betway_White.png" className="mainlogo" alt="Betway" /></NavbarBrand>
          <ul className="navbar-nav">
              <NavItem>
                <button className="btn btn-green" to="/" onClick={()=> {this.setState({style: "Login"})}}>Login</button>
              </NavItem>
              <NavItem>
                <button className="btn btn-white" onClick={this.props.onClick}>Sign Up</button>
              </NavItem>
          </ul>
        </Navbar>
      </header>
    );
  }
}
