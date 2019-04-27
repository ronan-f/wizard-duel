import React, { Component } from 'react';
import './myCharacter.css';

class MyCharacter extends Component {
    render() {
        return(
            <div>
                <img className='myChar' src={this.props.characterInfo.image} alt='my character'/>
                <h4 className='health'>My Defence: {this.props.characterInfo.health}</h4>
            </div>
        )
    }
}


export default MyCharacter;