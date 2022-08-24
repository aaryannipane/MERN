import React, { useState } from "react"

const App = ()=>{

    const btnStyle = {
        display:'block',
        color:"white",
        backgroundColor:"tomato",
        margin:"10px",
        padding:"5px 10px",
        cursor:"pointer",
        fontWeight:"bold",
        textTransform:"uppercase"
    }

    const borderStyle = {
        border:"2px solid green",
        borderRadius:"10px"
    }

    const [change, setChange] = useState(false);

    const animeBtn = {
        backgroundColor:'black',
        color:'white',
    }

    
    const clickHandler = ()=>{
        setChange(true);
    }

    if(change){
        animeBtn.backgroundColor = 'white';        
        animeBtn.color = 'black';        
    }

    return (
        <div>
            <button style={btnStyle}>Submit</button>
            <button style={{...btnStyle, ...borderStyle}}>Second Submit btn</button>
            <button style={animeBtn} onClick={clickHandler}>Animated btn</button>
        </div>
    )
}

export default App;