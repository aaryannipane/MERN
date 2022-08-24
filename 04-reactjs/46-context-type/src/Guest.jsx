import React, { Component } from 'react'
import { MyContext } from './Context'

export default class Guest extends Component {
    static contextType = MyContext;
    
  render() {
    console.log(this.context)
    return (
      <div>
        <h3>Guest Component</h3>
        {/* consuming data */}
        <p>{this.context.name}</p>
      </div>
    )
  }
}
