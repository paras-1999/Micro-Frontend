import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from "Login/Login"
import HomePage from './HomePage'
import Home from "Home/Home"
import Profile from "Profile/Profile"
export default function AppRoutes() {
  return (
   <Router>
       <Routes>
           <Route path="/login" element={<Login/>}/>
           <Route path="/" element={<HomePage/>}>
            <Route path="" element={<Home/>}/>
            <Route path="profile" element={<Profile/>}/>
           </Route>
       </Routes>
   </Router>
  )
}
