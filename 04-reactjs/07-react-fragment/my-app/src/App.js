import React, {Component, Fragment} from "react";


class App extends Component{
  render(){
    
    return (

      // <div>
      //   <h1>Hello this is used to return multiple elements</h1>
      //   <p>instead of React.Fragment we can use div but div will be shown in the html but fragment will not</p>
      // </div> 

      // OR
      
      <Fragment>
        <h1>Hello this is used to return multiple elements</h1>
        <p>instead of React.Fragment we can use div but div will be shown in the html but fragment will not</p>
      </Fragment> 

      // OR

      // <>
      //   <h1>Hello this is used to return multiple elements</h1>
      //   <p>instead of React.Fragment we can use div but div will be shown in the html but fragment will not</p>
      // </> 
    )
  }
}


export default App;