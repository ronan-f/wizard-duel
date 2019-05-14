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
            playerMana: 5,
            playerPosition: 2,
            chosenSpells: [],
            playerLevel: 1
        }
    }

    componentDidMount() {
        const playerLevel = Math.floor(this.props.state.currentUser.experience_points / 100);
        this.setState({
            playerLevel: playerLevel,
            playerMana: playerLevel * 5
    })}

    choosePosition = (e) => {
        let numberified = Number(e.target.value);
        this.setState({ playerPosition: numberified }, () => {
        });
    }
    findSpell = (id) => {
        const {spells} = this.props.state;
        const {playerMana, chosenSpells} = this.state;
        for (let spell of spells) {
            if (id === spell.id && playerMana >= spell.cost) {
                let updatedSpells = chosenSpells;
                updatedSpells.push(spell);
                this.setState({ chosenSpell: updatedSpells, playerMana: (playerMana - spell.cost) })
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
        const {playerLevel} = this.state;
        const {spells} = this.props.state;
        const filteredSpells = playerLevel < 11 ?
        spells.filter(spell => (spell.unlock_level >= playerLevel - 2) && (spell.unlock_level <= playerLevel)) :
        spells


        const spellArray = filteredSpells.map((spell) => {
            return(
                <AvailableSpell
                    key={spell.id.toString()}
                    id={spell.id}
                    name={spell.name}
                    description={spell.description}
                    cast_limit={spell.cast_limit}
                    cost={spell.cost}
                    turns={spell.turns}
                    selectSpell={this.selectSpell}
                />
            );
        });

        const chosenSpellArray = this.state.chosenSpells.map((spell) => {
            return(
                <div key={Math.random().toString()} onClick={() => this.removeSpell(spell.id)}>
                    {spell.name}
                </div>
            )
        })


        return <div className='spellSetup'>
            <div className="wizard-info">
                    <h2>{this.props.state.myCharacter.name}'s Spells</h2>
                    <h1>Arm Yourself!</h1>
                    <span className="dot">Remaining Mana:{this.state.playerMana}</span>
                </div>
            <container className="spell-selection">
                <div className="available-spells">
                    {spellArray}
                </div>
            </container>
            <div className='bottom'>
                <container  className="purchased-spells">
                    <h1>Your level {this.state.playerLevel} battle spells!</h1>
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
                                <label htmlFor="test" className="radio-label">1</label>
                            </div>
                            <div>
                                <input value="2" type="radio" name="radio-group" id="test2" onClick={this.choosePosition}>
                                </input>
                                <label htmlFor="test2" className="radio-label">2</label>
                            </div>
                            <div>
                                <input value="3" type="radio" name="radio-group" id="test3" onClick={this.choosePosition}>
                                </input>
                                <label htmlFor="test3" className="radio-label">3</label>
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