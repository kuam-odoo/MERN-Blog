// import React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Dashboard" element={<Dashboard/>}/>
    <Route path="/sign-in" element={<Signin/>}/>
    <Route path="/sign-up" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}
