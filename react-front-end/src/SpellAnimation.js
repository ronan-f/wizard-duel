import React, { Component } from 'react';
// import './styles/SpellAnimation.css';


class SpellAnimation extends Component {
    render() {
        // const { animation } = this.props.currentSpell
        return(
          <div className='spellAnimationDiv'>
              <img className='castSpells' src={this.props.currentSpell.animation} alt='myspell'/>
          </div>
        )
    }
}


export default SpellAnimation;