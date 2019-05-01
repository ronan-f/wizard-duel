import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Game from './Game.js';
import Instructions from './Instructions';
import Navigation from './Navigation.js';
import Login from './Login.js';
import Setup from './Setup.js';
import SpellSetup from './SpellSetup';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: '',
      currentSpell: '',
      spells:
      [
        {
          id: 1,
          name: 'Expelliarmus',
          description: 'Blast your opponent',
          power: 5,
          limit: 3
        },
        {
          id: 2,
          name: 'avadakadabra',
          description: 'kills opponent',
          power: 10,
          limit: 1
        }
      ],
      notifications: ['New player has joined', 'Player 1, your turn!'],
      myCharacter: {name: 'Dumbledore', image: 'https://vignette.wikia.nocookie.net/harrypotter/images/2/2f/101-albus_dumbledore.gif/revision/latest/scale-to-width-down/180?cb=20120622181924', health: 10},
      opponentCharacter: {name: 'Ron', image:'https://vignette.wikia.nocookie.net/harrypotter/images/2/2f/101-albus_dumbledore.gif/revision/latest/scale-to-width-down/180?cb=20120622181924' },

      wizards: null

    }
  }

  chooseSpell = (spell) => {
    this.setState({currentSpell: spell})
  }

  newNotification = () => {
    this.setState({notifications: this.state.notifications.concat(`Player 1 used ${this.state.currentSpell}`)})
  }

  newUser = (user) => {
    this.setState({currentUser: user})
  }

  fetchData = () => {
    axios.get('/api/spells') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API
      this.setState({
        message: response.data.message,
        spells: response.data.spells
      });
    })
    axios.get('/api/wizards') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API
      this.setState({
        message: response.data.message,
        wizards: response.data.wizards
      });
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route exact path='/'render={(props) => <Login {...props} newUser={this.newUser} state={this.state} loadDb={this.fetchData}/>} />
          <Route path='/game'render={(props) => <Game {...props} chooseSpell={this.chooseSpell} newNotification={this.newNotification} state={this.state}/>}/>
          <Route path='/instructions' component={Instructions}/>
          <Route path='/setup' component={Setup}/>
          <Route path='/spell_setup' component={SpellSetup}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
