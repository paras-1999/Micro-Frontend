import React from 'react'
import { Form ,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import {useNavigate} from "react-router-dom"

export default function Login() {
  const navigate= useNavigate()
  return (
    <div className='centerMe bggrading'>
   <Form className='w-40 glassbg  p-4 ' onSubmit={()=>{navigate("/home")}}>
       <h1 className='text-center heading '>Login</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" className='inputfields' required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" className='inputfields' required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  <Button  className='w-100 inputfields' type="submit">
    Log In
  </Button>
  
  <p className='text-center mt-2 '><button className="forgetPassword">Forget Password</button></p>
</Form>
    </div>
  )
}
