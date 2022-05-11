import React from 'react'
import NavigationBar from 'ComponentShell/NavigationBar'
import Footer from 'ComponentShell/Footer'
import { Outlet } from 'react-router-dom'
export default function HomePage() {
  return (
      <>
    <NavigationBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
