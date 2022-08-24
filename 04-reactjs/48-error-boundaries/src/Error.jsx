import React, { Component } from 'react'

export default class Error extends Component {
    state = {
        hasError:false,
    }

    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    componentDidCatch(error, info){
        console.error(error)
        console.info(info)
    }

  render() {

    if(this.state.hasError){
        return <h3>Error : Image not found</h3>
    }

    return this.props.children;
  }
}
