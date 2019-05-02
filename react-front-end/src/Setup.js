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
        this.lightWizardObj = lightImgs[Math.floor(Math.random() * lightImgs.length)];
        this.darkWizardObj = darkImgs[Math.floor(Math.random() * darkImgs.length)];
    }

    render() {
        this.randomCharacter();
        // console.log(this.props.state.myCharacter)

        return (
            this.props.state.myCharacter ? (<Redirect to="/spell_setup"/>) :
            <React.Fragment>
                <h1 className='textInfo'> {this.props.state.currentUser} choose your army!!!</h1>
                <div className='characterContainer'>
                    <div className='left'>
                    <p className='leftCharacter'>Dumbledore's Army</p>
                    <OpponentCharacter charImg={this.lightWizardObj.right_image}/>
                    <h1>{this.lightWizardObj.name}</h1>
                    </div>
                    <div className='right'>
                    <p>Death Eater</p>
                    <OpponentCharacter charImg={this.darkWizardObj.right_image}/>
                    <h1>{this.darkWizardObj.name}</h1>
                    </div>
                </div>
                <div  className='charBtn'>
                    <button onClick={() => this.props.chooseWizard(this.lightWizardObj.name) }>
                        button to choose character
                    </button>
                    <button onClick={() => this.props.chooseWizard(this.darkWizardObj.name)}>
                        button to choose character
                    </button>
                </div>

            </React.Fragment>
        );
    }
}


export default Setup;