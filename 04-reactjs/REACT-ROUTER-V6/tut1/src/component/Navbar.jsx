import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ()=>{
    return (
        <>
            <ul>
                <li><Link to="/" className={styles.navlink}>Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/post/mobile/1">Post</Link></li>
            </ul>

            {/* NavLink is also same as Link and we can apply style on it */}
            <ul>
                <li><NavLink className={styles.navlink} to="/" style={({isActive})=>{return {background: isActive ? "green" : ""}}}>Home</NavLink></li>

                <li><NavLink to="/about" style={({isActive})=>{return {background: isActive ? "green" : ""}}}>About</NavLink></li>

                <li><NavLink to="/contact" style={({isActive})=>{return {background: isActive ? "green" : ""}}}>Contact</NavLink></li>

                <li><NavLink to="/post/laptop/10" style={({isActive})=>{return {background: isActive ? "green" : ""}}}>Post</NavLink></li>
            </ul>
        </>
    )
}

export default Navbar;