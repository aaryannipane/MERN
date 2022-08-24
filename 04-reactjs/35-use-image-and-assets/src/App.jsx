import React from "react";
import pic from "./images/pic.jpg";

const App = ()=>{
    return (
        <div>
            <h1>image from public used in App file</h1>
            <img src={process.env.PUBLIC_URL + "/images/pic.jpg"} width="500px" title="from App.jsx" />
            <h1>image from src used in App file</h1>
            <img src={pic} alt="image" width="500px" />
        </div>
    )
}

export default App;