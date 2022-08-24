import React from "react";

const Guest = ({onClick})=>{
    return (
        <div>
            <h1>Guest Page</h1>
            <button onClick={onClick}>Login</button>
        </div>
    )
}

export default Guest;