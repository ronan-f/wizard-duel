import React, { Component } from 'react';
import './opponentCharacter.css';


class OpponentCharacter extends Component {
    render() {
        return(
            <div>
                <img className='opponentChar'src='https://vignette.wikia.nocookie.net/harrypotter/images/2/2f/101-albus_dumbledore.gif/revision/latest/scale-to-width-down/180?cb=20120622181924' alt='opponent character'/>
            </div>
        )
    }
}


export default OpponentCharacter;