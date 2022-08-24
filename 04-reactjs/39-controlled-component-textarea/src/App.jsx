import React from 'react'
import { useState } from 'react'

export const App = () => {

    const [text, setText] = useState("");

    function clickHandler(e) {
        setText(e.target.value);
    }

  return (
    <div>
        <textarea  cols="30" rows="10" value={text} onChange={(e)=>clickHandler(e)}></textarea>
    </div>
  )
}
