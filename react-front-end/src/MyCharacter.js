import React, { Component } from 'react';
import './styles/frog_cards.css';


class MyCharacter extends Component {
    render() {
        const { characterInfo } = this.props
        return(
            <div className='characterSelection'>
            <div className='playerDiv'>
                {/* <img className='playerFrog' src='/frog_card_template.png' alt='my character'/>   */}
                <img className='myChar' src='/character_gifs/right_view/ron.gif' alt='my character'/>
            </div>
            <div className='playerDiv'>
                {/* <img className='myChar' src='/character_gifs/right_view/ron.gif' alt='my character'/> */}
            </div>
            <div className='opponentDiv'>
                {/* <img className='opponentFrog' src='/frog_card_template.png' alt='my character'/> */}
                <h4 className='health'>My Defence: {characterInfo.health}</h4>
            </div>
            </div>
        )
    }
}


export default MyCharacter;