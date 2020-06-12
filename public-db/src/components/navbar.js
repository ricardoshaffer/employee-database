import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route } from "react-router-dom";
import '../App.css';
import Container from 'react-bootstrap/Container';



function NavBar() {
  return (
<>

<Navbar collapseOnSelect expand="sm" className="custom-nav" sticky="top">
<Container><Navbar.Brand href="/">employee DB</Navbar.Brand>  </Container>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
      </Navbar.Collapse>
  </Navbar>

  </>
  )
}
 
export default NavBar;