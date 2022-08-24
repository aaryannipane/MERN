import React from "react";
import { useState } from "react";

const App = ()=>{

    const [users, setUsers] = useState([
        {id:10, name:"Aryan", password:"sfsd8fs5"},
        {id:20, name:"Rahul", password:"sfsd8fs5"},
        {id:30, name:"Geek", password:"sfsd8fs5"},
    ])

    const newArr = users.map((user, index) => {
        return ( <h1 key={user.id}>{user.name}</h1> );
    })

    return (
        <div>
            {newArr}
        </div>
    )
}

export default App;