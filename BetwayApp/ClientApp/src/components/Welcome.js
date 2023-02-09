import React, { Component } from 'react';

export class Welcome extends Component {
    static displayName = Welcome.name;

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
          <div className="Welcome">
            <div>
            <h2>Welcome to Betway!</h2>
            <p>Hi<span className='bolderSpan' >{this.props.name + " " + this.props.surname},</span>we are glad that you have joined us!</p>            
            </div>           
           </div>
        );
      }
} 