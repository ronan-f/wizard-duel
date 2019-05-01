import React, { Component } from 'react';
import './styles/spellList.css'

class Spell extends Component {
    render() {
        const {  name, description, power, limit } = this.props;
        return (

            <React.Fragment>
                <tr className='spellsTable'>
                    <td className='spellsTable'>{name}</td>
                    <td className='spellsTable'>{description}</td>
                    <td className='spellsTable'>{power}</td>
                    <td className='spellsTable'>{limit}</td>
                    <td>
                        <button className='spellChoiceBtn' onClick={() => this.props.chooseSpell(name) }>
                            Select
                        </button>
                    </td>
                </tr>

            </React.Fragment>

        );
    }
}


export default Spell;