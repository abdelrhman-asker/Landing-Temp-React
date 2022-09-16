import React from "react"
import "./App.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { HashLink } from 'react-router-hash-link';
// import Home from "./Home"



function BasicExample() {
  return (
    <Navbar className="MainNavbarsec" expand="lg">
      <Container>
        <Navbar.Brand className='HashLinkMainLogo' href="#home">A-A Designs</Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <HashLink className='HashLink' to="/">Home</HashLink>
            <HashLink className='HashLink' to="/#Project">Project</HashLink>
            <HashLink className='HashLink' to="/#contact">Contact Us</HashLink>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;