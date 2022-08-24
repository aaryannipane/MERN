import React, {Component} from "react";


// class based component with event handling

class App extends Component{

  constructor(props){
    super(props);

    // below line is used to use this keyword that refer to current obj in normal functions
    this.normalFunction = this.normalFunction.bind(this);
    
  }

  state = {
    name:"Aryan",
    roll: this.props.roll
  }

  normalFunction(){
    console.log(this);
  }
  
  handleClick = (e)=>{
    alert(`btn click and function called`);
    console.log(this.state.roll);
    this.normalFunction();
  }
  
  render(){
    return (
      <>
        <h1>Hello event handling</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </>
    )
  }
}


// function based component with event handling
// const App = (props)=>{

//   const handleClick = (e)=>{
//     e.preventDefault();
//     console.log(`Btn clicked ${props.roll}`);
//   }
  
//   return (
//     <>
//       <h1>Hello function</h1>
//       <a href="www.google.com" target="_blank" onClick={handleClick}>Click Me</a>
//     </>
//   )
// }

export default App;