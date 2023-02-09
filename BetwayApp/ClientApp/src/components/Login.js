import React, { Component } from 'react';
import FormInput from './FormInput';

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
        confirmPassword: ""
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
      const response = fetch("http://localhost:5199/api/login",
      {
          method: "POST",
          headers:{
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({ email : this.state.email, password : this.state.password})
      }).then(response => {
        response.json();
      }).then(data => {
        console.log(data);
        this.setState(data);
      });
      
      console.log(response);
    }
  
  render() {
    return (
      <div className="Login">
        <form id='login' onSubmit={this.handleSubmit.bind(this)}>
        <h1>Login</h1>
        <p>New Customer? <a href='/' onClick={this.props.onClick} >Register here</a></p>
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
    );
  }
}
