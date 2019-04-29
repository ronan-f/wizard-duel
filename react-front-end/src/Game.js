import React, { Component } from 'react';
import './App.css';
import PlayerSpellList from "./PlayerSpellList.js";
import NotificationBar from "./NotificationBar.js";
import MyCharacter from './MyCharacter.js'
import OpponentCharacter from './OpponentCharacter.js';
import axios from 'axios';



class Game extends Component {
    constructor(props) {
      super(props)
      this.chooseSpell = this.chooseSpell.bind(this);
      this.state = {
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
        opponentCharacter: {name: 'Ron', image:'https://vignette.wikia.nocookie.net/harrypotter/images/2/2f/101-albus_dumbledore.gif/revision/latest/scale-to-width-down/180?cb=20120622181924' }

      }
    }

    chooseSpell(spell){
      this.setState({currentSpell: spell})
    }

    fetchData = () => {
      axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data) // The entire response from the Rails API

        console.log(response.data.message) // Just the message
        this.setState({
          message: response.data.message
        });
      })
    }

    render() {
      const { spells, notifications, myCharacter, opponentCharacter, currentSpell } =  this.state
      return (
        <div className="App">
          <div className='infoBar'>
            < PlayerSpellList chooseSpell={this.chooseSpell} userSpells={spells}/>
            < NotificationBar notifications={notifications} />
          </div>

          <div className='characterSection'>
            < OpponentCharacter characterInfo={opponentCharacter} />
            < MyCharacter characterInfo={myCharacter} />
          </div>

          <button className='castSpellBtn' onClick={() => this.setState({notifications: notifications.concat(`Player 1 used ${currentSpell}`)})}>
              Cast Spell
          </button>
        </div>

      );
    }
  }

  export default Game;

