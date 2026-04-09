import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">JOHN DOE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#link">Mes services</Nav.Link>
            <NavDropdown title="Mes réalisations" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Réalisation 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Réalisation 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Réalisation 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contact
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;