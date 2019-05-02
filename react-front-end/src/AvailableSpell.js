import React, { Component } from 'react';

class AvailableSpell extends Component {
  render() {
    const { id ,name, description, cast_limit, cost, turns } = this.props;
    return (
      <container onClick={() => this.props.selectSpell(id)}>
        <div>
          <h4>{id}</h4>
          <h3>{name}</h3>
          <h5 className="circle-display">{cost}</h5>
          <h5 className="circle-display">{turns}</h5>
          <h5 className="circle-display">{cast_limit}</h5>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </container>
    )
  }
}

export default AvailableSpell;