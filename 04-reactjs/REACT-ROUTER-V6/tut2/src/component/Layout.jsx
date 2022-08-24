import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = ()=>{
    return (
        <>
            <h1>React Router Dom v6</h1>
            {/* NavLink is also same as Link and we can apply style on it */}
            <ul>
                <li><NavLink className={styles.navlink} to="/" style={({isActive})=>{return {background: isActive ? "green" : ""}}}>Home</NavLink></li>

                <li><NavLink to="/about" style={({isActive})=>{return {background: isActive ? "green" : ""}}}>About</NavLink></li>

                <li><NavLink to="/contact" style={({isActive})=>{return {background: isActive ? "green" : ""}}}>Contact</NavLink></li>

                <li><NavLink to="/post" style={({isActive})=>{return {background: isActive ? "green" : ""}}}>Post</NavLink></li>
            </ul>

            {/* this component is used when we are using nested routes so we can decide where to show child element in layout */}
            <Outlet/>
        </>
    )
}

export default Layout;