import React, { Component } from 'react';
import './opponentCharacter.css';


class OpponentCharacter extends Component {
    render() {
        return(
            <div>
                <img className='opponentChar'src={this.props.characterInfo.image} alt='opponent character'/>
            </div>
        )
    }
}


export default OpponentCharacter;