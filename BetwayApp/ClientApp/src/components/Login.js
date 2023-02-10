import { data } from 'jquery';
import React, { Component } from 'react';
import FormInput from './FormInput';
import { Welcome } from './Welcome';

export class Login extends Component {
  static displayName = Login.name;
  constructor(props) {
    super(props);
    this.state = 
      {
        name: "", 
        surname: "", 
        cellphone: "", 
        email: "", 
        password: "",
        confirmPassword: "",
        style: "hide",
        message: null
      }; 
  }

  inputs = [
    {
      id:1,
      name: "email",
      type:"email",
      errorMessage: "Please provide a valid email.",
      placeholder: "Email",
      label: "Email",
      required: true    
    },
    {
      id:2,
      name: "password",
      type:"password",
      errorMessage: "Password should be 8-20 characters and include at least 1 number and special character.",
      placeholder: "Password",
      pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$",
      label: "Password",
      required: true    
    }]

    handleChange(e) {
      e.preventDefault();
      this.setState({[e.target.name]: e.target.value});
    }
  
    handleSubmit(e) {
      e.preventDefault();
      var myHeaders = new Headers();

      myHeaders.append('Content-Type', 'application/json');
      const response = fetch("http://localhost:5199/api/login?email=" + this.state.email + "&password=" + this.state.password,
      {
        method: "POST",
        headers: myHeaders,
        mode: "cors",
        cache:"default"

      }).then(response => {
        if(response.status === 200){
          this.setState({ style: "Welcome-popup" });
        }else if(response.status === 204){
          this.setState({message: "Username and Password did not match, try again..."});
        }
      }).then(data => {
        this.setState(data);        
      }); 
    }
  
  render() {
    return (
      <>
      <div className={this.state.style === "hide" ? "Login" : "hide"}>
        
        <form id='login' onSubmit={this.handleSubmit.bind(this)}>
        <h1>Login</h1>
        <p>New Customer? <a href='/' onClick={this.props.onClick} >Register here</a></p>
        {this.state.message !== null && <span className="unhide-span-error">{this.state.message}</span>}
          {this.inputs.map((input) => (        
            <FormInput 
            key={input.id} 
            {...input}
            value={this.state[input.name]}   
            onChange={this.handleChange.bind(this)} ></FormInput>
          ))} 
          <button type='submit' className="btn">Login</button>
          <a className='forgot' href='/'>Forgot Username/Password</a>
          </form>
       </div>       
      <Welcome style={this.state.style} name={this.state.name} surname={this.state.surname}></Welcome>
      </>
      
    );
  }
}
