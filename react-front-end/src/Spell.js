import React, { Component } from 'react';
import './styles/spellList.css'

class Spell extends Component {
    render() {
        const {  spellObj, name, description, power, limit } = this.props;
        return (

            <React.Fragment>
                <tr className='spellsTable'>
                    <td className='spellName'>{name}</td>
                    <td className='spellsDescription'>{description}</td>
                    <td className='spellsPower'>{power}</td>
                    <td className='spellsLimit'>{limit}</td>
                    <td>
                        <button className='spellChoiceBtn' onClick={() => this.props.chooseSpell(spellObj) }>
                            Summon Magic!
                        </button>
                    </td>
                </tr>

            </React.Fragment>

        );
    }
}


export default Spell;