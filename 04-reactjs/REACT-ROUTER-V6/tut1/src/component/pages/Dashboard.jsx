import React from "react";
import { useNavigate } from "react-router-dom";


const Dashboard = ()=>{
    // useNavigate hook is used to redirect between pages 
    // we can also send data using this hook as a state
    let navigate = useNavigate();
    let data = {
        msg:"Thanks for using our services *user logout*"
    }
    return (
        <>
            <h1>Dashboard page</h1>
            <button onClick={()=>{navigate("/login", {state:data, replace:true})}}>Logout</button>
            {/* navigate forward and backward using number in navigate(2) or (-2) for 2 page backward in history stack */}
        </>
    )
}

export default Dashboard;