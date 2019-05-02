import React, { Component } from 'react';
import './styles/App.css';
import PlayerSpellList from "./PlayerSpellList.js";
import NotificationBar from "./NotificationBar.js";
import MyCharacter from './MyCharacter.js'
import OpponentCharacter from './OpponentCharacter.js';
import socketIOClient from "socket.io-client";


class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
        opponentChar: null,
        opponentImg: ''
    }
}
  setOpponentChar = (char) => {
    console.log('THIS IS CHAR', char)
    let opponentCharacter = JSON.parse(char);
    this.setState({
      opponentChar: opponentCharacter
    })
    console.log('CURRENT STATE', this.state);
  }

  componentDidMount(){
    this.socket = socketIOClient('http://localhost:5000/');
    this.socket.emit('updateCharacter', JSON.stringify(this.props.state.myCharacter))
    this.socket.on('updateCharacter', this.setOpponentChar)
  }


    render() {

      // console.log('current state', this.props.state)
      const { notifications, myCharacter } =  this.props.state
      return (
        <div className="App">
          <div className='infoBar'>
            < PlayerSpellList chooseSpell={this.props.chooseSpell} userSpells={this.props.state.mySpells}/>
            < NotificationBar notifications={notifications} />
          </div>

          <div className='characterSection'>
            < MyCharacter characterInfo={myCharacter} />
            < spellAnimation />
            < OpponentCharacter charImg={this.state.opponentChar ? this.state.opponentChar.right_image : ''} />
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

