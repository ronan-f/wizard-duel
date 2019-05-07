import React, { Component } from 'react';
// import './styles/SpellAnimation.css';


class SpellAnimation extends Component {
    render() { if(this.props.currentSpell){
        return(
            <div className={this.props.spellDirection}>
                <img src={this.props.currentSpell} alt='myspell'/>
            </div>
          )
    } else {
        return (
            <div></div>
        )
    }
    }
}


export default SpellAnimation;