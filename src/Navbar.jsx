import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

import './assets/style/Navbar.css'
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="NavBar">
        <div></div>
        <Navbar.Brand href="#home" className="linkHome">JOHN DOE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/Home" className="link">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/Services" className="link">Services</Nav.Link>
            <Nav.Link as={NavLink} to="/Portefolio" className="link">Portefolio</Nav.Link>
            <Nav.Link as={NavLink} to="/Contact" className="link">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/MentionsLegales" className="link">Mentions Légales</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;