import React, { Component } from 'react';
import FormInput from './FormInput';
import { Welcome } from './Welcome';

export class Register extends Component {
  static displayName = Register.name;

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
      }; 
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:5199/api/register",
    {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name, 
          surname:this.state.surname,
          cellphone:this.state.cellphone,
          email:this.state.email,
          password: this.state.password
        })
    }).then(response => 
      {
        
        if(response.status === 200){
            this.setState({style: "Welcome-popup"})
        }
      });     

      this.setState({style: "Welcome-popup"})
  }

  inputs = [
    {
      id:1,
      name: "name",
      type:"text",
      errorMessage: "Name should be 2-16 characters and no special characters",
      placeholder: "Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      label: "Name",
      required: true
    },
    {
      id:2,
      name: "surname",
      type:"text",
      errorMessage: "Surname should be 2-30 characters and no special characters.",
      placeholder: "Surname",
      pattern: "^[A-Za-z0-9]{3,30}$",
      label: "Surname",
      required: true   
    },
    {
      id:3,
      name: "cellphone",
      type:"text",
      errorMessage: "Cellphone should be 10 numbers.",
      placeholder: "Cellphone",
      pattern: "^[0-9]{10}$",
      label: "Cellphone",
      required: true    
    },
    {
      id:4,
      name: "email",
      type:"email",
      errorMessage: "Please provide a valid email.",
      placeholder: "Email",
      label: "Email",
      required: true    
    },
    {
      id:5,
      name: "password",
      type:"password",
      errorMessage: "Password should be 8-20 characters and include at least 1 number and special character.",
      placeholder: "Password",
      pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$",
      label: "Password",
      required: true    
    },
    {
      id:6,
      name: "confirmPassword",
      type:"password",
      errorMessage: "Passwords do not match.",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      required: true    
    }
   ]

  render() {
    return (
      <>
      <div className={this.state.style === "hide" ? "Register" : "hide"}>
        <form id='register_user' onSubmit={this.handleSubmit.bind(this)}>
        <h1>Sign Up to Betway</h1>
        <hr></hr>
        {this.inputs.map((input) => (        
          <FormInput 
          key={input.id} 
          {...input}
          value={this.state[input.name]}   
          onChange={this.handleChange.bind(this)} ></FormInput>
        ))}          
        <button type='submit' className="btn">Register</button>
        </form>
       </div>
       <Welcome style={this.state.style} title="Welcome to Betway!" name={this.state.name} surname={this.state.surname}></Welcome>
      </>      
    );
  }
}