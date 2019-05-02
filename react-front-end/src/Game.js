import React, { Component } from 'react';
import './styles/App.css';
import PlayerSpellList from "./PlayerSpellList.js";
import NotificationBar from "./NotificationBar.js";
import MyCharacter from './MyCharacter.js'
import OpponentCharacter from './OpponentCharacter.js';

class Game extends Component {
    render() {
      console.log('current state', this.props.state)
      const { spells, notifications, myCharacter, opponentCharacter } =  this.props.state
      return (
        <div className="App">
          <div className='infoBar'>
            < PlayerSpellList chooseSpell={this.props.chooseSpell} userSpells={this.props.state.mySpells}/>
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

