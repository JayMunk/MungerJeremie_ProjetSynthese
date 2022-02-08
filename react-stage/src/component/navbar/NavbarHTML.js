import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap'
import './NavbarCSS.css'
import logo from './logo.svg'
import { Link } from 'react-router-dom';
import { UserInfoContext } from '../../contexts/UserInfo';


const NavbarHTML = () => {
  const [loggedUser, setLoggedUser] = useContext(UserInfoContext)

  console.log(loggedUser,"loggedUser")


  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {!loggedUser.isLoggedIn ?
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            :
            null
          }

          {loggedUser.isLoggedIn ?
            <p>{loggedUser.prenom} {loggedUser.nom}</p>
            :
            null
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarHTML
