import React, {Component} from "react";


// class based component 
class App extends Component{

  state = {
    id:10,
    name:"Aryan"
  }
  
  handleClick = (id)=>{
    console.log(`${id} is deleted successfuly`);
  }
  
  render(){
    return (
      <>
        <h1>Hello, {this.state.name}</h1>
        <button onClick={ (e)=>{ this.handleClick(this.state.id,e) } }>Click Me (arrow function type)</button>
        <button onClick={this.handleClick.bind(this, this.state.id)}>Click Me (bind type)</button>
      </>
    )
  }
}

export default App;