import React from 'react'
import { useState } from 'react';

export const App = () => {

    const [data, setData] = useState({
        name:"",
        password:"",
    })

    function handleChange(e) {
        if(e.target.name === "name"){
            setData({
                ...data,
                [e.target.name]: e.target.value
            })
        }
        
        if(e.target.name === "password") {
            setData({
                ...data,
                [e.target.name] : e.target.value
            })
        }
    }

    function handleSubmit(e) {
        // take value from form tag 
        console.log(e.target[0].value);
        // or take value from state
        console.log(data.name);
        e.preventDefault();
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:
                <input type="text" name='name' id='name' value={data.name} onChange={handleChange} />
            </label>
            <label htmlFor="pass">Password:
                <input type="password" name="password" id="pass" value={data.password} onChange={handleChange} />
            </label> 
            <br /><br />
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}
