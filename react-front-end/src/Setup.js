import React, { Component } from 'react';
import OpponentCharacter from './OpponentCharacter.js'
import './styles/setup.css'



class Setup extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className='textInfo'>Pick your character to get started</h1>
                <div className='characterContainer'>
                    <div className='left'><OpponentCharacter/></div>
                    <div className='right'><OpponentCharacter/></div>
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