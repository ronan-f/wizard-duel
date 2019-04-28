import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div className='navBar'>
                <NavLink exact to='/' className='link'>Home</NavLink>
                <NavLink to='/instructions' className='link'>Instructions</NavLink>
                <h1> Wizard Duels Nav Bar</h1>
            </div>
        );
    }
}


export default Navigation;



