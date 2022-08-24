import React, { Component } from 'react'
import Guest from './Guest'

export default class User extends Component {
  render() {
    return (
      <div>
        <h2>User Component</h2>
        <Guest/>
      </div>
    )
  }
}
