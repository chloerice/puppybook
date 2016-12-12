import React, { Component } from 'react';

export default class SinglePuppy extends Component {

  render () {
    const puppy = this.props.selectedPuppy;

    return (
      <div key={puppy.id}>
        <h2>{puppy.name}</h2>
        <div>
          <img src={puppy.image} />
        </div>
      </div>
    )
  }
}
