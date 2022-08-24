import React, { Component } from 'react'

export default class App extends Component {

    constructor(props){
        super(props);
        this.backRef = null;
        this.setBackRef = element => {
            this.backRef = element;
        }
    }

    componentDidMount() { 
        if(this.backRef)
            this.backRef.focus();
     }

  render() {
    return (
      <>
        <form>
            <input type="text" placeholder='enter name' ref={this.setBackRef} />
            <input type="text" placeholder='enter password' />
        </form>
      </>
    )
  }
}
