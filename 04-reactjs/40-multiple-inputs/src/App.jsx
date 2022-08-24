import React from 'react'
import { useState } from 'react'

export const App = () => {

    const [input, setInput] = useState({
        name:"",
        password:"",
    })

    function changeHandler(e) {
        if(e.target.name === "name"){
            setInput({
                ...input,
                [e.target.name] : e.target.value
            });
        }else if(e.target.name === "password") {
            setInput({
                ...input,
                [e.target.name] : e.target.value
            });
        }

        // setInput({
        //     ...input, 
        //     [e.target.name]: e.target.value, 
        // })
    }

  return (
    <div>
        <form> 
            <label>
                Name: <input type="text" name='name' value={input.name} onChange={(e)=>changeHandler(e)}/>
            </label>
            <br /><br />
            <label>
                Password: <input type="password" name='password' value={input.password} onChange={(e)=>changeHandler(e)}/>
            </label>
        </form>
    </div>
  )
}
