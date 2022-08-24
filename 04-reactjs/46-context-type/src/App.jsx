import React, { Component } from 'react'
import { Provider } from './Context'
import User from './User'

export default class App extends Component {
    state = {
        name:"Aryan",
    }
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <Provider value={this.state}>
            <User/>
        </Provider>
      </div>
    )
  }
}
