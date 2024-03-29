import React,{useState,useEffect} from 'react'
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { useNavigate,Link } from "react-router-dom"
export default function Header() {
  const navigate = useNavigate()
  const [logInCheck, setLogInCheck] = useState(false)
  useEffect(() => {
   if(sessionStorage.getItem("_token")){
     setLogInCheck(true)
   }
   else{
     setLogInCheck(false)
   }
  }, [])
  
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
            <Link to="/" className="nav-link" >Home</Link>
            <Nav.Link >About</Nav.Link>
            {logInCheck && <Link to="/profile" className="nav-link">Profile</Link>}
          </Nav>
        </Container>
        {logInCheck?
        <Button size="sm" variant='dark' className='me-3' onClick={() => { navigate("/login");sessionStorage.removeItem("_token")}}>Log Out</Button>
        :
        <>
        <Button size="sm" variant='dark' className='me-3' onClick={() => { navigate("/login") }}>Log In</Button>
        <Button size="sm" variant='dark' className='me-3' onClick={() => { navigate("/signup") }}>Sign Up</Button>
        </> }

      </Navbar>
    </>
  )
}