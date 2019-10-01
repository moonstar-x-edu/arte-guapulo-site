import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BSNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BSNavbar bg="light" expand="lg">
      <BSNavbar.Brand as={Link} to="/">Arte</BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BSNavbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
        </Nav>
      </BSNavbar.Collapse>
    </BSNavbar>
  );
};

export default Navbar;
