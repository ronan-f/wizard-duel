import React, { Component } from 'react';
import './myCharacter.css';

class MyCharacter extends Component {
    render() {
        const { characterInfo } = this.props
        return(
            <div>
                <img className='myChar' src='https://files.slack.com/files-pri/T2G8TE2E5-FJAHFNRL0/right_bellatrix.gif' alt='my character'/>
                <h4 className='health'>My Defence: {characterInfo.health}</h4>
            </div>
        )
    }
}


export default MyCharacter;