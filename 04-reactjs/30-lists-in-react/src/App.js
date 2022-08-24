import React from "react"

const App = ()=>{
    const arr = [10, 20, 30, 40];
    // using map method we can create new array with return an object that made using jsx
    const newArr = arr.map((num)=>{
        return <li>{num*2}</li>;
    })

    return (
        <div>
            <ul>
                {newArr}
                <hr/>
                {
                    arr.map((num)=>{
                        return <li>{num + 10}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default App;