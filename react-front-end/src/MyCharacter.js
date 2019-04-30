import React, { Component } from 'react';
import './myCharacter.css';

class MyCharacter extends Component {
    render() {
        const { characterInfo } = this.props
        return(
            <div>
                <img className='myChar' src={characterInfo.image} alt='my character'/>
                <h4 className='health'>My Defence: {characterInfo.health}</h4>
            </div>
        )
    }
}


export default MyCharacter;