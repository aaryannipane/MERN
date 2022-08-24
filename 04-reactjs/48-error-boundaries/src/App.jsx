import React, { Component } from 'react'
import Error from './Error'
import Image from './Image'

export default class App extends Component {
  render() {
    return (
      <div>
        <Error>
        <Image name="https://images.unsplash.com/photo-1474314170901-f351b68f544f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>
        </Error>
        <Error>
        <Image name="NoImage"/>
        </Error>
      </div>
    )
  }
}
