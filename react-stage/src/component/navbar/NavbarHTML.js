import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap'
import './NavbarCSS.css'
import logo from './logo.svg'
import { Link } from 'react-router-dom';
import { UserInfoContext } from '../../contexts/UserInfo';


const NavbarHTML = () => {
  const [loggedUser, setLoggedUser] = useContext(UserInfoContext)

  console.log(loggedUser, "loggedUser")


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

          {loggedUser.isLoggedIn && loggedUser.role === "PARTICIPANT" ?
            <Nav.Link as={Link} to="/createcheval">Ajouter cheval</Nav.Link>
            :
            null
          }

          {
            loggedUser.isLoggedIn && loggedUser.role === "ORGANISATION" ?
              <Nav.Link as={Link} to="/createCompetition">Créer compétition</Nav.Link>
              :
              null
          }

          {
            loggedUser.isLoggedIn && loggedUser.role === "ORGANISATION" ?
              <Nav.Link as={Link} to="/afficherCompetitionOrganisation">Mes compétitions</Nav.Link>
              :
              null
          }

          {loggedUser.isLoggedIn ?
            <p id="navbarNom">{loggedUser.prenom} {loggedUser.nom}</p>
            :
            null
          }

          {loggedUser.isLoggedIn ?
            <Nav.Link className="logout" href="/">Déconnexion</Nav.Link>
            :
            null
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarHTML
