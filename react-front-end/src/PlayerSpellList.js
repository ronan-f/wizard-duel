import React, { Component } from 'react';
import Spell from "./Spell.js";
import './spellList.css'

class PlayerSpellList extends Component {
    render() {

        const spellArray = this.props.userSpells.map(spell => {
            return(
                <React.Fragment>
                    <Spell
                        id={spell.id}
                        name={spell.name}
                        description={spell.description}
                        power={spell.power}
                        limit={spell.limit}
                        chooseSpell={this.props.chooseSpell}
                    />



                </React.Fragment>

            );
        });

        return <div className='spellContainer'>{spellArray}</div>

    }
}


export default PlayerSpellList;