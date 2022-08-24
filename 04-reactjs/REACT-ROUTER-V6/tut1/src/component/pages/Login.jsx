import React from "react";
import { useLocation } from "react-router-dom";


const Login = ()=>{
    let location = useLocation()

    let msg = '';
    if(location.state !== null){
        console.log(location);
        msg = location.state.msg;
    }
    return (
        <>
            <h1>Login page</h1>
            <h2>{msg}</h2>
        </>
    )
}

export default Login;