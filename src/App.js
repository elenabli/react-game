import React, { Component } from 'react';
import StartScreen from './components/startScreen'
import Game from './components/game';
import {HashRouter, Route} from 'react-router-dom';
import EndScreen from './components/endScreen';


class App extends Component {
  render () {
    return (
    <HashRouter>
      <div>
        <Route path = "/" exact component = {StartScreen} />
        <Route path = "/game" component = {Game} />
        <Route path = "/end" component = {EndScreen} />

      </div>
    </HashRouter>
    )
  
  };
}


export default App;
