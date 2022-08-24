import React from "react"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Home from "./component/pages/Home";
import Navbar from "./component/Navbar";
import Post from "./component/pages/Post";
import Login from "./component/pages/Login";
import Dashboard from "./component/pages/Dashboard";

const App = ()=>{
  
  const isLoggedIn = true; 
  const data = {
    msg: "User is not logged in"
  }
  
  return (
    <BrowserRouter>

      {/* for all pages component */}
      <Navbar/>

      {/* render component for specific route */}
      <Routes>
        {/* home page or root path */}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />


        <Route path="/login" element={<Login/>} />

        {/* conditional login */}
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard/> : <Navigate to="/login" replace state={data} />} />
        {/* send data with navigate component in object and recive in redirected component using hook useLocation */}
        {/* replace is used to clear history stack in browser */}
        {/* we can use hook named useNavigate to navigate on btn click from one page to other see file Dashboard  */}

        {/* dynamic route */}
        <Route path="/post/:category/:id" element={<Post/>} />

      {/* invalid route */}
      <Route path="*" element={<h1>404 page not found!!</h1>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;