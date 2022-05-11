import React from 'react'
import "./Home.css"
import {Spinner} from "react-bootstrap"
export default function Home() {
  return (
    <div className='loading'>
      {/* <Spinner animation="border"  /> */}
      <div class="wrapper">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
    <div class="shadow"></div>
</div>

      </div>
  )
}
