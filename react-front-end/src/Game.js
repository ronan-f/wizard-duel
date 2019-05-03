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
      myDefence: 10,
      opponentImg: '',
      myTurn: false,
      currentSpell: ''
    }
  }
  
  componentDidMount(){
    this.socket = socketIOClient('http://localhost:5000/');
    this.socket.on('updateCharacter', this.setOpponentChar);
    this.socket.on('newUser', this.socket.emit('updateCharacter', JSON.stringify(this.props.state.myCharacter)));
    this.socket.on('attack', this.test);
    this.socket.on('turnSetup', this.updateTurn);
  }
  
  test = (id) => {
    console.log('Socket Sent something');
    // console.log(JSON.parse(id));
    console.log(JSON.parse(id));
    this.updateTurn();
  }

  setOpponentChar = (char) => {
    this.setState({
      opponentChar: JSON.parse(char)
    })
  }
  chooseSpell = (spell) => {
    this.setState({currentSpell: spell}, () => {
      console.log(this.state.currentSpell);
    })
    // this.setState({currentSpell: spell})
  }

  updateTurn = () => {
    this.setState({ myTurn: !this.state.myTurn}, () => {
        console.log('Turn state is now: ', this.state.myTurn)
    })
  }

  // opponentCast = (spell) => {
  //   const { id, aim } = JSON.parse(spell);
  //   if ( aim === this.props.state.myPosition) {
  //     if (this.props.state.myDefence <= 0) {
  //       // End game logic
  //     }
  //     this.props.takeDamage(id);
  //   }
  // }

  endPlayerTurn = () => {
    if (this.state.myTurn) {
      this.updateTurn();
      this.props.newNotification(this.state.currentSpell.name);
      this.socket.emit('attack', JSON.stringify(this.state.currentSpell));
      // console.log(this.state.myTurn, this.state.currentSpell);
    }
  }

    render() {

      // console.log('current state', this.props.state)
      const { notifications, myCharacter } =  this.props.state
      return (
        <div className="App">
          <div className='infoBar'>
            < PlayerSpellList chooseSpell={this.chooseSpell} userSpells={this.props.state.mySpells}/>
            < NotificationBar notifications={notifications} />
          </div>

          <div className='characterSection'>
            < MyCharacter characterInfo={myCharacter} />
            < spellAnimation />
            < OpponentCharacter charImg={this.state.opponentChar ? this.state.opponentChar.right_image : ''} />
          </div>

          <button className='castSpellBtn' onClick={() => this.endPlayerTurn()}>
              Cast Spell
          </button>

          <div>
            <h1>{ this.props.state.message }</h1>
            <button onClick={this.fetchData} >
              {this.state.myTurn ? 'Your turn' : 'Enemy Turn'}
            </button>
          </div>
        </div>

      );
    }
  }

  export default Game;

