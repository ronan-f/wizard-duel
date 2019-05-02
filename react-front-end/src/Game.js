import React, { Component } from 'react';
import './styles/App.css';
import PlayerSpellList from "./PlayerSpellList.js";
import NotificationBar from "./NotificationBar.js";
import MyCharacter from './MyCharacter.js'
import OpponentCharacter from './OpponentCharacter.js';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opponentCharacter: null,
      myTurn: true,
      currentSpell: ''
    }
  }

  chooseSpell = (spell) => {
    // this.setState({currentSpell: spell}, () => {
    //   console.log(this.state.currentSpell);
    // })
    this.setState({currentSpell: spell})
  }

  updateTurn = () => {
    this.setState({ myTurn: !this.state.myTurn}, () => {
        console.log(this.state.myTurn)
    })
  }

  opponentCast = () => {
    if (opponent.attack.aim === this.props.state.myPosition) {
      if (this.props.state.myDefence <= 0) {
        // End game logic
      }
      this.props.takeDamage(opponent.attack.id);
    }
  }

  endPlayerTurn = () => {
    // if (this.state.myTurn) {
      this.updateTurn();
      this.props.newNotification(this.currentSpell);
      // console.log(this.state.myTurn, this.state.currentSpell);
    // }
  }

    render() {
      // console.log('current state', this.props.state)
      const { spells, notifications, myCharacter, opponentCharacter } =  this.props.state
      return (
        <div className="App">
          <div className='infoBar'>
            < PlayerSpellList chooseSpell={this.chooseSpell} userSpells={this.props.state.mySpells}/>
            < NotificationBar notifications={notifications} />
          </div>

          <div className='characterSection'>
            < MyCharacter characterInfo={myCharacter} />
            < spellAnimation />
            < OpponentCharacter characterInfo={opponentCharacter} />
          </div>

          <button className='castSpellBtn' onClick={() => this.endPlayerTurn()}>
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

