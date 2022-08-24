import React, {Component} from "react";


// class based component 
class App extends Component{

  state = {
    name:"Aryan",
    roll: this.props.roll
  }
  
  handleClick = ()=>{
    console.log(`btn click and function called`);
    if(this.state.roll === 10)
      this.setState({roll:100, name:"Jhon"});
    else 
      this.setState({roll:10, name:"Aryan"});

    this.setState((state, props)=>{
      console.log(state);
      console.log(props);
    })
    
  }
  
  render(){
    return (
      <>
        <h1>Hello event handling {this.state.name} {this.state.roll}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </>
    )
  }
}

export default App;