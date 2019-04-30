import React, { Component } from 'react';
import './styles/frog_cards.css';


class MyCharacter extends Component {
    render() {
        const { characterInfo } = this.props
        return(
            <div>
                <img className='myChar' src='/character_gifs/right_view/ron.gif' alt='my character'/>
                <h4 className='health'>My Defence: {characterInfo.health}</h4>
            </div>
        )
    }
}


export default MyCharacter;