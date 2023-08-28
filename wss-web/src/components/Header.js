import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

function Header() {
  return (
    <Navbar className="header" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Whitesoft Solutions" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="mx-2" >Home</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;