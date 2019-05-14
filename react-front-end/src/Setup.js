import React, { Component } from 'react';
import OpponentCharacter from './OpponentCharacter.js'
import './styles/setup.css'
import { Redirect } from 'react-router'


class Setup extends Component {
    lightWizardObj = null;
    darkWizardObj = null;

    randomCharacter = () => {
        const { wizards } = this.props.state
        const lightImgs = [];
        const darkImgs = [];
        for(let wizard of wizards){
            if(wizard.army === 'Death Eater'){
                darkImgs.push(wizard)
            } else {
                lightImgs.push(wizard)
            }
        }
        const randomWiz = Math.floor(Math.random() * lightImgs.length)
        this.lightWizardObj = lightImgs[randomWiz];
        this.darkWizardObj = darkImgs[randomWiz];
    }

    componentWillMount() {
        this.randomCharacter();
    }

    render() {
        const {chooseWizard, state} = this.props;
        return (
            state.myCharacter ? (<Redirect to="/spell_setup"/>) :
            <React.Fragment>
                <div id='flipMe'><p>Please orient me to landscape!</p></div>
                <h1 id='textInfo'> {state.currentUser.username} choose your army!!!</h1>
                <div className='character-container'>
                    <div className='left-wizard-selection'>
                        <div className='left-wizard-selection' onClick={() => chooseWizard(this.lightWizardObj)}>
                        <h1 className='armyName'>Dumbledore's Army</h1>
                        <OpponentCharacter charImg={this.lightWizardObj.left_image}/>
                        <h1 id='WizardName'>{this.lightWizardObj.name}</h1>
                        </div>
                    </div>
                    <div className='right-wizard-selection' >
                        <div className='right-wizard-selection' onClick={() => chooseWizard(this.darkWizardObj)}>
                        <h1 className='armyName'>Death Eater</h1>
                        <OpponentCharacter charImg={this.darkWizardObj.right_image}/>
                        <h1 id='WizardName'>{this.darkWizardObj.name}</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Setup;