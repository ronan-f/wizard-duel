import React, { Component } from 'react';
import './App.css';
import PlayerSpellList from "./PlayerSpellList.js";
import NotificationBar from "./NotificationBar.js";
import MyCharacter from './MyCharacter.js'
import OpponentCharacter from './OpponentCharacter.js';
import axios from 'axios';



class Game extends Component {
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
      console.log(this.props.state)
      const { spells, notifications, myCharacter, opponentCharacter } =  this.props.state
      return (
        <div className="App">
          <div className='infoBar'>
            < PlayerSpellList chooseSpell={this.props.chooseSpell} userSpells={spells}/>
            < NotificationBar notifications={notifications} />
          </div>

          <div className='characterSection'>
            < OpponentCharacter characterInfo={opponentCharacter} />
            < MyCharacter characterInfo={myCharacter} />
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

