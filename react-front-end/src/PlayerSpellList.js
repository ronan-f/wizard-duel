import React, { Component } from 'react';
import Spell from "./Spell.js";
import './spellList.css'

class PlayerSpellList extends Component {
    render() {

        const spellArray = this.props.userSpells.map((spell) => {
            return(
                <React.Fragment>
                    <Spell
                        name={spell.name}
                        description={spell.description}
                        power={spell.power}
                        limit={spell.limit}
                        chooseSpell={this.props.chooseSpell}
                    />
                </React.Fragment>
            );
        });

        return <table className='spellsTable' id='mainTable'>
                    <thead className='spellsTable'>
                        <tr>
                            <th className='spellsTable'>Spell</th>
                            <th className='spellsTable'>Description</th>
                            <th className='spellsTable'>Value</th>
                            <th className='spellsTable'>Casts</th>
                            <th className='spellsTable'>Choose spell</th>
                        </tr>

                    </thead>
                    <tbody>
                        {spellArray}
                    </tbody>
                </table>

    }
}


export default PlayerSpellList;