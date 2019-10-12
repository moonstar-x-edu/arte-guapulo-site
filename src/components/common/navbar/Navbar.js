import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BSNavbar, Nav } from 'react-bootstrap';
import Text from '../text';

const Navbar = () => {
  return (
    <BSNavbar bg="light" expand="lg">
      <BSNavbar.Brand as={Link} to="/"><Text phrase="Navbar.brand" /></BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BSNavbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/"><Text phrase="Navbar.home" /></Nav.Link>
          <Nav.Link as={Link} to="/gallery"><Text phrase="Navbar.gallery" /></Nav.Link>
        </Nav>
      </BSNavbar.Collapse>
    </BSNavbar>
  );
};

export default Navbar;
