import React, { Component } from 'react';
import OpponentCharacter from './OpponentCharacter.js'
import './setup.css'


class Setup extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className='textInfo'> {this.props.state.currentUser} your character to get started</h1>
                <div className='characterContainer'>
                    <OpponentCharacter/>
                    <OpponentCharacter/>
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