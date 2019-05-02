import React, { Component } from 'react';
import './styles/frog_cards.css';


class MyCharacter extends Component {
    render() {
        const { characterInfo } = this.props
        return(
            <div className='characterSelection'>
                <div className='playerDiv'>
                    <img className='myChar' src={characterInfo.left_image} alt='my character'/>
                    <h4 className='health'>My Defence: {characterInfo.health}</h4>
                </div>
            </div>
        )
    }
}


export default MyCharacter;