import React, { Component } from 'react';
import './spellList.css'

class Spell extends Component {
    render() {
        return (

            <div className='spell'>
                <h4>Spell name: {this.props.name}</h4>
                <h4>Description: {this.props.description}</h4>
                <h4>Power: {this.props.power}</h4>
                <h4>Limit: {this.props.limit}</h4>
                <button onClick={() => this.props.chooseSpell(this.props.name) }>
                        Select Spell
                </button>
            </div>


        );
    }
}


export default Spell;