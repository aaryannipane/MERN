import React, {Component} from "react";

// const App = (props)=>{
//   return (
//     <div>
//       <h1>Hello, {props.name}</h1>
//       <p>roll {props.roll}</p>
//     </div>
//   )
// }


class App extends Component{
  render(){
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <p>roll {this.props.roll}</p>
      </div>
    )
  }
}


export default App;
