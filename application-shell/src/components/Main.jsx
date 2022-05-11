import React from 'react'
import Login from "authentication/Login"
import Header from "component/Header"
import Footer from "component/Footer"

export default function Main() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Login />
      </div>
      <Footer />
    </div>
  )
}
