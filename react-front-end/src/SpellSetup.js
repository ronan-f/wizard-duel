import React, { Component } from 'react';
import Spell from "./Spell.js";
import './styles/spellList.css';
import './styles/SpellSetup.css';
import { NavLink } from 'react-router-dom';

class SpellSetup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerPosition: 1
        }
    }
    // choosePosition = (positionNumber) => {
    //     this.setState({ playerPosition: positionNumber });
    // }
    sayPosition = (e) => {
        console.log(e.target.value);
        // console.log('Button was clicked')
    }
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
                <container className='playerPositioning'>
                <div>
                    <h3>Choose your wizard's position</h3>
                </div>
                <div>
                    <button value="Position 1" onClick={this.sayPosition}>Position: 1</button>
                    <button value="Position 2" onClick={this.sayPosition}>Position: 2</button>
                    <button value="Position 3" onClick={this.sayPosition}>Position: 3</button>
                </div>
                </container>

                <NavLink to='/game' id='START'>Start Game!</NavLink>

        </div>


    }
}


export default SpellSetup;