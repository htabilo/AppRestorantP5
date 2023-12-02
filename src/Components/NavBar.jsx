import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css';
//importar la imagen
import mariscaleslogo from '../assets/img/icono.png';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"> 
        <img 
         src = { mariscaleslogo} //utilizar variable importada como fuente
         alt="icono mariscal"
         className='icono'
        />
        
        MyRestaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/nosotros">sobre nosotros</Nav.Link>
            <Nav.Link as={Link} to="/menu">menu</Nav.Link>
            <Nav.Link as={Link} to="/contacto">contacto</Nav.Link>
            <Nav.Link as={Link} to="/reservas">reservas</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
