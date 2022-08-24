import React from "react"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Home from "./component/pages/Home";
import Layout from "./component/Layout";
import Post from "./component/pages/Post";

const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        {/* nested routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="post" element={<Post/>}/>
        </Route>

        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;