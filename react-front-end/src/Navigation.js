import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div className='navBar'>
                <NavLink exact to='/' className='link'>Login</NavLink>
                <h1> Wizard Duels Nav Bar</h1>
                <NavLink to='/instructions' className='link'>Instructions</NavLink>
                <NavLink to='/game' className='link'>Game</NavLink>
            </div>
        );
    }
}


export default Navigation;



