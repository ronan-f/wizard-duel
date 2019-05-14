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
      mySpells: [],
      myPosition: 2,
      currentUser: {
        id: 0,
        username: '',
        experience_points: 0,
        wins: 0,
        losses: 0,
        email: 'noone@noone.com'
      },
      usersFromDb: null,
      spells: null,
      notifications: ['New player has joined', 'Player 1, your turn!'],
      myCharacter: null,
      opponentCharacter: null,
      wizards: null
    }
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  componentDidMount(){
    this.fetchUsers();
  }

  updateCurrentUser = () => {
    if (this.state.currentUser.username.length > 0 && this.state.currentUser.id === 0) {
      let allUsers = this.state.usersFromDb.users;
      for (let userObject of allUsers) {
        if (userObject.username === this.state.currentUser.username) {
          this.setState({ currentUser: userObject });
        };
      };
    };
  }

  newUser = (user) => {
    this.fetchData()
    .then(([{ data: { wizards: { wizards } } }, { data: { spells: { spells } } }]) => {
      if (this.checkIfUserExists(user)) {
        this.addNewUser(user);
      };
      this.setState({
        wizards, spells, currentUser: { username: user, id: 0, experience_points:100}
      }, () => {
        this.fetchUsers();
      })
    }).catch(console.error)
  }

  setUsers = (users) => {
    this.setState({
      usersFromDb: users 
    }); 
  }
  
  fetchUsers() {
    return axios.get('/api/users')
    .then(usersFromDb => this.setUsers(usersFromDb.data.usersFromDb));
  }

  checkIfUserExists = (username) => {
    for (let user of this.state.usersFromDb.users) {
      if (user.username === username) {
        return false
      } 
    }
    return true
  
  }

  addNewUser = (user) => {
    axios({
      method: "post",
      url: "/api/newuser",
      params: {
          username: user
      }
    });
  }

  endGame = (user) => {
    axios({
      method: "post",
      url: "/api/endgame",
      params: {
          username: user.username,
          experience: user.experience_points
      }
  });
  }

  chooseSpell = (spell) => {
    this.setState({myCurrentSpell: spell})
  }

  chooseWizard = (wizard) => {
    this.setState({myCharacter: wizard})
  }

  setPlayerOptions = (spells, position) => {
    this.setState({ mySpells: spells, myPosition: position })
  }

  newNotification = (user, spell) => {
    console.log(`${user} and ${spell}`);
    this.setState({notifications: this.state.notifications.concat(`${user} has cast ${spell}.`)})
  }


  fetchSpells() {
    return axios.get('/api/spells')
  }

  fetchWizards() {
    return axios.get('/api/wizards')
  }

  fetchData = () => {
    return Promise.all([this.fetchWizards(), this.fetchSpells()]);
  }

  render() {
    this.updateCurrentUser();
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route exact path='/'render={(props) => <Login {...props} newUser={this.newUser} state={this.state} loadDb={this.fetchData}/>} />
          <Route path='/game'render={(props) => <Game {...props} chooseSpell={this.chooseSpell} newNotification={this.newNotification} state={this.state} endGame={this.endGame}/>}/>
          <Route path='/instructions' component={Instructions}/>
          <Route path='/setup'render={(props) => <Setup {...props} state={this.state} chooseWizard={this.chooseWizard}/>}/>
          <Route path='/spell_setup' render={(props) => <SpellSetup {...props} state={this.state} setPlayerOptions={this.setPlayerOptions}/>}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
