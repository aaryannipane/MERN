import React, { Component } from 'react'
import User from './User'
import { Provider } from './Context'

// we are using separate file for this
// export const MyContext = React.createContext("default value");

export default class App extends Component {
    // we will use this state value in guest component without props

    state = {
        name:"Aryan",
    }

  render() {
    return (
        <Provider value={this.state.name} >
            <User />
        </Provider>
    )
  }
}
