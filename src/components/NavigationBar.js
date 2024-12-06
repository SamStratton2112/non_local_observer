
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="md" className="NavBar navbar-static-top NavBarBckground" data-bs-theme="dark">
      <Navbar.Brand as={Link} to="/" className='outlined nav-name NavBar-link'>
        Non Local Observer
      </Navbar.Brand>
      <Nav className="ms-auto">
        <Navbar.Toggle aria-controls="responsive-navbar-nav me-2"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav.Link className='NavBar-link outlined'  as={Link} to="/shop">Shop</Nav.Link>
          <Nav.Link className='NavBar-link outlined'  as={Link} to="/cart">Cart</Nav.Link>
          <Nav.Link className='NavBar-link outlined' as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link className='NavBar-link outlined'  as={Link} to="/">About Zoe</Nav.Link>
          <Nav.Link className='NavBar-link social' as={Link} to="https://www.instagram.com/djmikewhite_/"><FontAwesomeIcon icon={faInstagram} size="2x"/></Nav.Link>
        </Navbar.Collapse>
      </Nav>
    </Navbar>
  )
};

export default NavigationBar;