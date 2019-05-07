import React, { Component } from 'react';
// import './styles/SpellAnimation.css';


class SpellAnimation extends Component {
    render() {
        return(
          <div className={this.props.spellDirection}>
          {/* className={this.props.spellDirection} */}
              <img src={this.props.currentSpell} alt='myspell'/>
          </div>
        )
    }
}


export default SpellAnimation;