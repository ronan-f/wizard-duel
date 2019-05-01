import React, { Component } from 'react';
import OpponentCharacter from './OpponentCharacter.js'
import './styles/setup.css'



class Setup extends Component {
    lightWizard = null;
    darkWizard = null;

    randomCharacter = () => {
        const { wizards } = this.props.state
        const lightImgs = [];
        const darkImgs = [];
        for(let wizard of wizards){
            if(wizard.army === 'Death Eater'){
                darkImgs.push(wizard.right_image)
            } else {
                lightImgs.push(wizard.right_image)
            }
        }
        console.log('shoud be light', lightImgs);
        console.log(darkImgs)
        this.lightWizard = lightImgs[Math.floor(Math.random() * lightImgs.length)];
        this.darkWizard = darkImgs[Math.floor(Math.random() * darkImgs.length)];
    }

    render() {
        this.randomCharacter();

        return (
            <React.Fragment>
                <h1 className='textInfo'> {this.props.state.currentUser} choose your army!!!</h1>
                <div className='characterContainer'>
                    <div className='left'>
                    <p className='leftCharacter'>Dumbledore's Army</p>
                    <OpponentCharacter charImg={this.lightWizard}/>
                    </div>
                    <div className='right'>
                    <p>Death Eater</p>
                    <OpponentCharacter charImg={this.darkWizard}/>
                    </div>
                </div>
                <div  className='charBtn'>
                    <button>
                        button to choose character
                    </button>
                    <button>
                        button to choose character
                    </button>
                </div>

            </React.Fragment>
        );
    }
}


export default Setup;