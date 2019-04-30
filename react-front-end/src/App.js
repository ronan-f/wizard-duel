import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Game from './Game.js';
import Instructions from './Instructions';
import Navigation from './Navigation.js';
import Login from './Login.js';
import Setup from './Setup.js';
import SpellSetup from './SpellSetup';



class App extends Component {

  render() {
    const test = ' HELLO WORLD'
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route path='/'render={(props) => <Login {...props} test={test}/>}/>
          <Route path='/game' component={Game} />
          <Route path='/instructions' component={Instructions}/>
          <Route path='/setup' component={Setup}/>
          <Route path='/spell_setup' component={SpellSetup}/>
        </div>
      </BrowserRouter>
    )
  }
} 



export default App;
