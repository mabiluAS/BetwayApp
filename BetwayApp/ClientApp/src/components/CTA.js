import React, { Component } from 'react';

export class Cta extends Component {
    static displayName = Cta.name;

constructor(props){
    super(props)
}    

render() {
      return (
        <div className="cta-container">
          <h4>SPORTS NEW CUSTOMER OFFER</h4>
          <p>Get up to £10 in Free Bets</p>
          <button type="button" className="btn" onClick={this.props.onClick}>Join Now</button>
         </div>
      );
    }
}
