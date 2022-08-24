import React, { useState } from "react";
import Guest from "./Guest";
import User from "./User";

const App = (props)=>{

    // const isRegister = props.consumer;
    
    // if condition
    // if(isRegister){
        //     return <User></User>;
        // }
        // return <Guest/>
        
        // && operator in jsx
        // return (
            //     <React.Fragment>
            //         <div>Welcome to website</div>
            //         {isRegister && <User/>}
            //     </React.Fragment>
            // )
            

    let [register, setRegister] = useState(props.consumer);

    function onLogout(){
        setRegister(false)
    }

    const onLogin = ()=>{
        setRegister(true)
    }

    // if else   (WE CAN'T USE IF ELSE STATEMENT IN JSX WE CAN USE EXPRESSIONS IN JSX)
    // if(register){
    //     return (<User onClick={onLogout}></User>)
    // }else{
    //     return (<Guest onClick={onLogin}></Guest>)
    // }


    // ternary operator
    // return (
    //     <div>
    //         {(register) ? (<User onClick={onLogout}></User>) : (<Guest onClick={onLogin}></Guest>)}
    //     </div>
    // )


    // IIFE
    return (
        <div>
            {
                (
                    ()=>{
                        // THIS WAY WE CAN USE IF ELSE STATEMENT IN JSX USING FUNCTION CALL
                        if(register){
                            return (<User onClick={onLogout}></User>);
                        }else{
                            return (<Guest onClick={onLogin}></Guest>);
                        }
                    }
                )()
            }
        </div>
    )

}

export default App;