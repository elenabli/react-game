import React, { Component } from 'react';
import './cel.css';

class Cel extends Component {

  getString = () => {
    let user = 'user' + this.props.user;
    return user
  }
      
  render() {

    const myClass = `circle ${this.getString()}`;
    return <div className='cel'>
      <div className={myClass}></div>
    </div>
    
  };
}

export default Cel;
