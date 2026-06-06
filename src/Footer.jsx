import './assets/style/Footer.css';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div className="d-flex flex-column flex-lg-row justify-content-lg-evenly gap-lg-5 py-4" style={{ backgroundColor: '#212529',
            width: '1400px'
         }}>
            <div className='d-flex flex-column'>
            <div className="d-flex flex-column align-items-center align-items-lg-start">
                <h3>Rémi PASSEREL</h3>
                <ul className="list-unstyled">
                    <li>60 Rue de L'avenir</li>
                    <li>14000 Caen</li>
                    <li><a href="tel:+3300000000">+33 00 00 00 00</a></li>
                    <li><a href="mailto:papasspro@gmail.com">papasspro@gmail.com</a></li>
                </ul>
            </div>
            <div className="d-flex flex-row justify-content-center justify-content-lg-start gap-2">
                <a className="logo" href="#"><img src="src/assets/illustrations/GitHub.png" alt="logo GitHub" /></a>
                <a className="logo" href="#"><img src="src/assets/illustrations/twitter.png" alt="logo GitHub" /></a>
                <a className="logo" href="#"><img src="src/assets/illustrations/GitHub.png" alt="logo GitHub" /></a>
            </div>
            </div>
            <div>
                
                <Nav className="d-flex flex-column align-items-center align-items-lg-start">
                    <h3>Liens Utiles</h3>
                    <Nav.Link as={NavLink} to="/Home" className="link">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/Services" className="link">Services</Nav.Link>
                    <Nav.Link as={NavLink} to="/Portefolio" className="link">Portefolio</Nav.Link>
                    <Nav.Link as={NavLink} to="/Contact" className="link">Contact</Nav.Link>
                    <Nav.Link as={NavLink} to="/MentionsLegales" className="link">Mentions Légales</Nav.Link>
                </Nav>
            </div>
            <div className="d-flex flex-column align-items-center align-items-lg-start">
                <h3>Mes dernières réalisations</h3>
                <Nav className="flex-column align-items-center align-items-lg-start">
                    <Nav.Link as={NavLink} to="/freshFood" className="link">Fresh Food</Nav.Link>
                    <Nav.Link as={NavLink} to="/restaurant" className="link">Restaurant Akira</Nav.Link>
                    <Nav.Link as={NavLink} to="/espace" className="link">Espace bien-être</Nav.Link>
                    <Nav.Link as={NavLink} to="/seo" className="link">SEO</Nav.Link>
                    <Nav.Link as={NavLink} to="/api" className="link">Création d'une API</Nav.Link>
                    <Nav.Link as={NavLink} to="/maquette" className="link">Maquette d'un site</Nav.Link>
                </Nav>
            </div>
        </div>
    );
} 

export default Footer;