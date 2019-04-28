import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Game from './Game.js';
import Instructions from './Instructions';
import Navigation from './Navigation.js';


<<<<<<< HEAD
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
=======
>>>>>>> 37023f99cf47da26fcfab21e567a167ea4a0eb60

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>
      </div>
    );
=======
      <BrowserRouter>
        <div>
          <Navigation />
          <Route path='/' component={Game} exact />
          <Route path='/instructions' component={Instructions}/>
        </div>
      </BrowserRouter>
    )
>>>>>>> 37023f99cf47da26fcfab21e567a167ea4a0eb60
  }
}



export default App;
