import React, { Component } from "react";


// function based component
let el = React.createElement("h1", null, "Hello Aryan");
// instead of above code to create element use jsx below code
el = <h1>Hello Aryan</h1>;


class App extends Component {
  render() {
    // return React.createElement("h1", null, "Hello Aryan this is component");
    return <h1>Hello Aryan this is component using jsx</h1>
  }
}


export { el, App };