import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    // create ref
    this.textInput = React.createRef();

    this.state = {
      value:"",
    }
  }

  componentDidMount() {
    console.log(this.textInput);
    this.textInput.current.focus()
  }

  handleSubmit = e  =>{
    e.preventDefault();
    console.log(this.textInput.current);
    this.setState({value:this.textInput.current.value})
  }

  render() {
    return (
      <>
        <h1>Form:{this.state.value}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='enter name' />
          <input type="text" ref={this.textInput} placeholder="enter password"/>
          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }
}
