import React, { Component } from 'react'

export default class User extends Component {
    componentWillMount(){
        console.log("Component will mount")
    }
  render() {
    return (
      <div>User</div>
    )
  }
}
