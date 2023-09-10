import React from "react";
import '../style/NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <>
            <Navbar expand="lg" className="bg-ligth">
                <Container>
                    <img src={require("../assets/iconAAMenu1.1.webp")} width={60} />
                    <Navbar.Brand href="#inicio"> Aluminios Antioquia S.A.S </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#inicio"> Inicio </Nav.Link>
                            <Nav.Link href="#nosotros"> Nosotros </Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#aluminioFundido"> Aluminio Fundido </NavDropdown.Item>
                                <NavDropdown.Item href="#madera"> Madera </NavDropdown.Item>
                                <NavDropdown.Item href="#aluminioRepujado"> Aluminio Repujado </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#contacto"> Contacto </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                < CartWidget />
            </Navbar>
        </>
    );
};

export default NavBar;