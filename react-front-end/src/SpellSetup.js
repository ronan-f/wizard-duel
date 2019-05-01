import React, { Component } from 'react';
import Spell from "./Spell.js";
import './styles/spellList.css'
import './styles/SpellSetup.css'
import { NavLink } from 'react-router-dom'


class SpellSetup extends Component {
    render() {
        const spellsArr =[
            {
              id: 1,
              name: 'Expelliarmus',
              description: 'Blast your opponent',
              power: 5,
              limit: 3
            },
            {
              id: 2,
              name: 'avadakadabra',
              description: 'kills opponent',
              power: 10,
              limit: 1
            }
          ]

        const spellArray = spellsArr.map((spell) => {
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

        return <div className='spellSetup'>
                    <h3>Arm Yourself!</h3>
                    <container>
                    <table className='spellsTable' id='spellsList'>
                    <thead className='spellsTable'>
                        <tr>
                            <th className='spellsTable'>Spell</th>
                            <th className='spellsTable'>Description</th>
                            <th className='spellsTable'>Value</th>
                            <th className='spellsTable'>Casts</th>
                            <th className='spellsTable'>Choose spell</th>
                        </tr>
                    </thead>
                    </table>
                    </container>
                    <container>
                    <table className='purchasedSpells'>
                    <thead className='purchasedSpells'>
                        <tr>
                            <th className='purchasedSpells'>Spell</th>
                            <th className='purchasedSpells'>Description</th>
                            <th className='purchasedSpells'>Value</th>
                            <th className='purchasedSpells'>Casts</th>
                            <th className='purchasedSpells'>Choose spell</th>
                        </tr>

                    </thead>
                    <tbody>
                        {spellArray}
                    </tbody>
                </table>
                </container>

                <NavLink to='/game' id='START'>Start Game!</NavLink>

        </div>


    }
}


export default SpellSetup;