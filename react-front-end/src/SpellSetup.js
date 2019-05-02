import React, { Component } from 'react';
import AvailableSpell from "./AvailableSpell.js";
import './styles/spellList.css';
import './styles/SpellSetup.css';
import './styles/radio_button.css';
import { NavLink } from 'react-router-dom';

class SpellSetup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerMana: 10,
            playerPosition: 2,
            chosenSpells: []
        }
    }
    // choosePosition = (positionNumber) => {
    //     this.setState({ playerPosition: positionNumber });
    // }

    choosePosition = (e) => {
        let numberified = Number(e.target.value);
        this.setState({ playerPosition: numberified }, () => {
            // console.log(this.state.playerPosition);
        });
    }
    findSpell = (id) => {
        for (let spell of this.props.state.spells) {
            if (id === spell.id && this.state.playerMana >= spell.cost) {
                let updatedSpells = this.state.chosenSpells;
                updatedSpells.push(spell);
                this.setState({ chosenSpell: updatedSpells, playerMana: (this.state.playerMana - spell.cost) })
                // console.log("Found the spell");
                // console.log('========');
                // console.log('BOOYA', this.state);
            }
        }
    }
    selectSpell = (id) => {
        this.findSpell(id);
    }

    removeSpell = (id) => {
        for (let spell of this.state.chosenSpells) {
            if (id === spell.id) {
                let updatedSpells = this.state.chosenSpells;
                updatedSpells.pop(spell);
                this.setState({ chosenSpell: updatedSpells, playerMana: (this.state.playerMana + spell.cost) })
            }
        }
    }

    render() {

        const spellArray = this.props.state.spells.map((spell) => {
            return(
                <React.Fragment>
                    <AvailableSpell
                        id={spell.id}
                        name={spell.name}
                        description={spell.description}
                        cast_limit={spell.cast_limit}
                        cost={spell.cost}
                        turns={spell.turns}
                        selectSpell={this.selectSpell}
                    />
                </React.Fragment>
            );
        });

        const chosenSpellArray = this.state.chosenSpells.map((spell) => {
            return(
                <div onClick={() => this.removeSpell(spell.id)}>
                    {spell.name}
                </div>
            )
        })

        return <div className='spellSetup'>
            <div className="wizard-info">
                    <h2>{this.props.state.myCharacter.name}'s Spells</h2>
                    <h1>Arm Yourself!</h1>
                    <span class="dot">Remaining Mana:{this.state.playerMana}</span>
                </div>
            <container className="spell-selection">
                <div className="available-spells">
                    {spellArray}
                </div>
            </container>
            <div className='bottom'>
                <container  className="purchased-spells">
                    <h1>Your battle spells!</h1>
                    <div className='spellArray'>
                        {chosenSpellArray}
                    </div>
                </container>
                <div className='bottom-right'>
                <container className='playerPositioning'>
                    <div>
                        <h3>Choose your wizard's position</h3>
                    </div>
                    <div className="radio-pillbox">
                        <radiogroup>
                            <div>
                                <input value="1" type="radio" name="radio-group" id="test" onClick={this.choosePosition}>
                                </input>
                                <label for="test" className="radio-label">1</label>
                            </div>
                            <div>
                                <input value="2" type="radio" name="radio-group" id="test2" onClick={this.choosePosition}>
                                </input>
                                <label for="test2" className="radio-label">2</label>
                            </div>
                            <div>
                                <input value="3" type="radio" name="radio-group" id="test3" onClick={this.choosePosition}>
                                </input>
                                <label for="test3" className="radio-label">3</label>
                            </div>
                        </radiogroup>
                    </div>
                    <div className='StartGame'>
                    <NavLink className='dot2' to='/game' id='start' onClick={() => this.props.setPlayerOptions(this.state.chosenSpells, this.state.playerPosition)}>Start Game!</NavLink>
                </div>
                </container>
                </div>
            </div>
        </div>


    }
}


export default SpellSetup;