import React, { Component } from 'react';
import Spell from "./Spell.js";
import './styles/spellList.css';
import './styles/SpellSetup.css';
import './styles/radio_button.css';
import { NavLink } from 'react-router-dom';

class SpellSetup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerPosition: 2
        }
    }
    // choosePosition = (positionNumber) => {
    //     this.setState({ playerPosition: positionNumber });
    // }
    choosePosition = (e) => {
        let numberified = Number(e.target.value);
        this.setState({ playerPosition: numberified }, () => {
            console.log(this.state.playerPosition);
        });
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

        // const spellArray = spellsArr.map((spell) => {
        //     return(
        //         <React.Fragment>
        //             <Spell
        //                 name={spell.name}
        //                 description={spell.description}
        //                 power={spell.power}
        //                 limit={spell.limit}
        //                 chooseSpell={this.props.chooseSpell}
        //             />
        //         </React.Fragment>
        //     );
        // });

        // const spellList = spellsArr.map((spell) => {
        //     return{

        //     }
        // })

        return <div className='spellSetup'>
            <h1>Arm Yourself!</h1>
            <div className="spells">
                <container className="spell-selection">
                    <div className="wizard-info">
                        <h2>Harry's Spells</h2>
                        <span class="dot">6</span>
                    </div>
                    <div className="available-spells">
                    </div>
                </container>
                <container  className="purchased-spells">
                    <div>
                        <ul>
                            <li>spell1.name</li>
                            <li>spell2.name</li>
                            <li>spell3.name</li>
                        </ul>
                    </div>
                </container>
            </div>
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
            </container>
                <NavLink to='/game' id='start'>Start Game!</NavLink>

        </div>


    }
}


export default SpellSetup;