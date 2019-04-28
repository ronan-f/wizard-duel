import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Game from './Game.js';
import Instructions from './Instructions';
import Navigation from './Navigation.js';
import Login from './Login.js';
import Setup from './Setup.js';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route path='/' component={Login} exact />
          <Route path='/game' component={Game} />
          <Route path='/instructions' component={Instructions}/>
          <Route path='/setup' component={Setup}/>
        </div>
      </BrowserRouter>
    )
  }
}



export default App;