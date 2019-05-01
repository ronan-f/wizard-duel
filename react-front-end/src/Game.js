import React, { Component } from 'react';
import './styles/App.css';
import PlayerSpellList from "./PlayerSpellList.js";
import NotificationBar from "./NotificationBar.js";
import MyCharacter from './MyCharacter.js'
import OpponentCharacter from './OpponentCharacter.js';
import axios from 'axios';



class Game extends Component {
    fetchData = () => {
      axios.get('/api/spells') // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data) // The entire response from the Rails API
        this.setState({
          message: response.data.message,
          dbSpells: response.data.spells
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
      console.log(this.props.state)
      const { spells, notifications, myCharacter, opponentCharacter } =  this.props.state
      return (
        <div className="App">
          <div className='infoBar'>
            < PlayerSpellList chooseSpell={this.props.chooseSpell} userSpells={spells}/>
            < NotificationBar notifications={notifications} />
          </div>

          <div className='characterSection'>
            < MyCharacter characterInfo={myCharacter} />
            < spellAnimation />
            < OpponentCharacter characterInfo={opponentCharacter} />
          </div>

          <button className='castSpellBtn' onClick={() => this.props.newNotification()}>
              Cast Spell
          </button>

          <div>
            <h1>{ this.props.state.message }</h1>
            <button onClick={this.fetchData} >
              Fetch Data
            </button>
          </div>
        </div>

      );
    }
  }

  export default Game;

