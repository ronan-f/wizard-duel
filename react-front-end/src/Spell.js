import React, { Component } from 'react';
import './spellList.css'

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
                        <button onClick={() => this.props.chooseSpell(name) }>
                            Select Spell
                        </button>
                    </td>
                </tr>

            </React.Fragment>

        );
    }
}


export default Spell;