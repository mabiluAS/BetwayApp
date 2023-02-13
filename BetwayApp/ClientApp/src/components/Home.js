import React, { Component } from 'react';
import { Login } from './Login'
import { Cta } from './CTA';
import { Register } from './Register'
import { Categories } from './Categories'

export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
    super(props);
    this.state = {
        active : props.page === null ? "" : props.page,
        setActive : true
    }   
 }

  render() {
    return (
      <div>
        <Categories></Categories>
        {this.state.active === "Login" && <Login onClick={(e) => { e.preventDefault(); this.setState({active: "Register"})}}></Login>}
        {this.state.active === "Register" && <Register></Register>}
        {this.state.active != "Welcome" && <Cta onClick={() => this.setState({active: "Login"})} ></Cta>}
       </div>
    );
  }
}
