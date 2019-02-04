import React, { Component } from 'react';
import {Link} from "react-router-dom";

class StartScreen extends Component {

  state = {
    userName1: '',
    userName2: ''
  }

  setName = (event) => {
    this.setState ({
      userName1: event.target.value,
      userName2: event.target.value
    });
  }

 
  render () {
    return (
      <div className="startScreen">
        <h1>Welcome!</h1> 
        
        <input type = 'text' onChange = {this.setName} value = {this.state.userName1} />
        <input type = 'text' onChange = {this.setName} value = {this.state.userName2} />

        <Link to={{
          pathname: "/game",
          state: {
            fromStartScreen: true,
            userName1: this.state.userName1,
            userName2: this.state.userName2
            }
          }} >
           Let's play!
        </Link>

      </div>

    )
  }
}

export default StartScreen;
// setName определять игрока из евента.