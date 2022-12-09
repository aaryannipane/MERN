import React from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.css";

// react-bootstrap
import {Button} from "react-bootstrap";

export const App = () => {

  return (
    <div>
        <button type="button" className="btn btn-primary">Primary</button>
        <Button variant='success'>Success btn</Button>
    </div>
  )
}
