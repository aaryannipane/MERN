import React from 'react'
import { useState } from 'react'

export const App = () => {

    const [text, setText] = useState("");

    function changeHandler(e){
        setText(e.target.value.toUpperCase().substr(0, 10));
        console.log(e.target.value)
    }

  return (
    <div>
        <form>
            <input type="text" onChange={(e) => changeHandler(e)} value={text} placeholder='Enter any text' />
        </form>
    </div>
  )
}
