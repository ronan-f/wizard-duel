import React, { Component } from 'react';
import './styles/frog_cards.css';



class OpponentCharacter extends Component {
    render() {
        return(
            <div>
                <img className='opponentChar'src='/character_gifs/left_view/voldemort.gif' alt='opponent character'/>
            </div>
        )
    }
}


export default OpponentCharacter;