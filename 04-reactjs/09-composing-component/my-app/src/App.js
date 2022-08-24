import React, {Component} from "react";
import Student from "./Student.js";


// another react component
const App = ()=>{
  return (
    <div>
      // composing components
      <Student name="Aryan"/>
      <Student name="Babu"/>
      <Student name="Jhon"/>
    </div>
  )
}

export default App;