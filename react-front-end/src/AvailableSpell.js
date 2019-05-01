import React, { Component } from 'react';

class AvailableSpell extends Component {
  render() {
    const { name, description, cast_limit, cost, turns } = this.props;
    return (
      <React.Fragment>
        <div>
          <h3>{name}</h3>
          <h4 className="circle-display">{cost}</h4>
          <h4 className="circle-display">{turns}</h4>
          <h4 className="circle-display">{cast_limit}</h4>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </React.Fragment>
    )
  }
}