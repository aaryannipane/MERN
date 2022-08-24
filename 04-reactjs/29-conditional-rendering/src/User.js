import React from "react";

const User = ({onClick})=>{
    return (
        <div>
            <h1>User Page</h1>
            <button onClick={onClick}>Logout</button>
        </div>
    )
}

export default User;