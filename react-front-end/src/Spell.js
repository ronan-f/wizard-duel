import React, { Component } from 'react';
import './styles/spellList.css'

class Spell extends Component {
    render() {
        const {  spellObj, name, power } = this.props;
        return (
            <div className='spellsTable'>
                <button className='spellChoiceBtn' onClick={() =>{
                    this.props.chooseSpell(spellObj)}}>
                Cast {name}!
                <br /> Power:{power}
                </button>
            </div>
        );
    }
}


export default Spell;