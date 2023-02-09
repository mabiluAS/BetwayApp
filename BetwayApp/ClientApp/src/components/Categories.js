import React, { Component } from 'react';

export class Categories extends Component {
    static displayName = Categories.name;

render() {
      return (
        <div className="Categories">
          <div className='sports'>sports</div>
          <div className='live'>live & real</div>
          <div className='casino'>casino</div>
          <div className='esports'>esports</div>
          <div className='vegas'>vegas</div>
         </div>
      );
    }
}