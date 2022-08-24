import React, {Component} from "react";

// function based component with props
// const Student = (props)=>{
//   return <h1>Hello, {props.name}</h1>;
// }

// class based component with props
class Student extends Component{
  render(){
    return <h1>Hello, {this.props.name}</h1>
  }
}

export default Student;