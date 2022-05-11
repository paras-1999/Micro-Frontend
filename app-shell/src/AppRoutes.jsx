import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from "Login/Login"
import HomePage from './HomePage'
import Home from "Home/Home"
export default function AppRoutes() {
  return (
   <Router>
       <Routes>
           <Route path="/" element={<Login/>}/>
           <Route path="/home" element={<HomePage/>}>
               <Route path="" element={<Home/>}/>
           </Route>
       </Routes>
   </Router>
  )
}
