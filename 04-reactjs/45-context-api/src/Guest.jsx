import React, { Component } from 'react'
// we are using separate file for this
// import { MyContext } from './App'

import { Consumer } from './Context'

export default class Guest extends Component {
  render() {
    return (
      <div>
        <h3>Guest Component</h3>
        <Consumer>
            {
                value => {
                    return <h4>{value}</h4>
                }
            }
        </Consumer>
      </div>
    )
  }
}
