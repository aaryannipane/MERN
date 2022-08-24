import React, {Component} from "react";


// DIRECTLY INSIDE CLASS:-
// class Student extends Component{
//   // state here inside class
//   state = {
//     name:"Aryan",
//     roll:this.props.roll
//   }

//   render(){
//     return <h1>Hello, {this.state.name}</h1>
//   }
// }



// INSIDE THE CONSTRUCTOR:-
class Student extends Component{
  constructor(props){
    super(props);

    this.state = {
      name:"Aryan",
      roll:this.props.roll
    }


    render(){
      return <h1>Hello, {this.state.name}</h1>
    }
    
  }
}

export default Student;