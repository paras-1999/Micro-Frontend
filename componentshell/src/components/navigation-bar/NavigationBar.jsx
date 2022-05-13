import React from 'react'
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
export default function NavigationBar() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Neosoft tech"
              src="https://www.neosofttech.com/sites/all/themes/neosoft2017/images/neosoft.svg"
              height="30"
              className="d-inline-block align-top"
            /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link >Features</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        </Container>

        <Button size="sm" variant='dark' className='me-3' onClick={() => { navigate("/login") }}>Log Out</Button>

      </Navbar>
    </>
  )
}
