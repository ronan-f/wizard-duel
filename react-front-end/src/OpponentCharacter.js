import React, { Component } from 'react';
import './styles/frog_cards.css';



class OpponentCharacter extends Component {
    render() {
        return(
            <div className='characterSelection'>
            <div className='opponentDiv'>
                <img className='myChar' src={this.props.charImg} alt='my character'/>
            </div>
        </div>
        )
    }
}


export default OpponentCharacter;