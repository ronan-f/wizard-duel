import React, { Component } from 'react';

class SpellAnimation extends Component {

    render() {
        const {myCurrentSpell, oppCurrentSpell, spellDirection} = this.props;
        if (!myCurrentSpell && oppCurrentSpell){
                return (<div className={spellDirection}><img className='spellAnimationLimit' src={oppCurrentSpell} alt='myspell'/></div>)
        }
        if (myCurrentSpell){
            if(oppCurrentSpell){
            return (<div className={spellDirection}><img className='spellAnimationLimit' src={oppCurrentSpell} alt='myspell'/></div>)
            } else {
            return (<div className='mySpellDirection'><img className='spellAnimationLimit' src={myCurrentSpell} alt='myspell'/></div>)
        }
        } else {
            return (<div></div>)
        }
    }
}


export default SpellAnimation;