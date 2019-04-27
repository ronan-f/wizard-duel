import React, { Component } from 'react';
import './spellList.css'

class Spell extends Component {
    render() {
        const { name, description, power, limit } = this.props;
        return (

            <div className='spell'>
                <h4>Spell name: {name}</h4>
                <h4>Description: {description}</h4>
                <h4>Power: {power}</h4>
                <h4>Limit: {limit}</h4>
                <button onClick={() => this.props.chooseSpell(name) }>
                        Select Spell
                </button>
            </div>


        );
    }
}


export default Spell;