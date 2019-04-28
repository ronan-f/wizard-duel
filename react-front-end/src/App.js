import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Game from './Game.js';
import Instructions from './Instructions';
import Navigation from './Navigation.js';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route path='/' component={Game} exact />
          <Route path='/instructions' component={Instructions}/>
        </div>
      </BrowserRouter>
    )
  }
}



export default App;
