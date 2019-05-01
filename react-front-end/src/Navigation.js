import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './styles/navigation.css';


class Navigation extends Component {
    render() {
        return (
            <div className='navBar'>
                <NavLink exact to='/' className='link'>Login</NavLink>
                <NavLink to='/instructions' className='link'>Instructions</NavLink>
                <img className='header' src="https://fontmeme.com/permalink/190501/0ec3ff4a20fe42010a0123f38bc873e7.png" alt='header' />
                <NavLink to='/setup' className='link'>Setup</NavLink>
                <NavLink to='/spell_setup' className='link'>Spell Setup</NavLink>
            </div>
        );
    }
}


export default Navigation;



