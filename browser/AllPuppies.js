import React, {Component} from 'react';
import {Link} from 'react-router';

export default class AllPuppies extends Component {

  render () {
    const puppies = this.props.allPuppies;

    return (
      <div>
        <ul className="list-unstyled">
          {puppies.map(puppy => {
            return <li key={puppy.id}><Link to={`/puppies/${puppy.id}`}>{puppy.name}</Link></li>
          })}
        </ul>
      </div>
    )
  }
}
