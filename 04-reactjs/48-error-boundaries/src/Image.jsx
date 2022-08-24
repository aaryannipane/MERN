import React, { Component } from 'react'

export default class Image extends Component {
  render() {

    if(this.props.name === "NoImage"){
        throw new Error("Image Not Found");
    }

    return (
        <>
            <img src={this.props.name} alt="" />
        </>
    )
  }
}
