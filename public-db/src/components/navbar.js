import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route } from "react-router-dom";
import '../App.css';
import Search from "../pages/search";
import Employee from "../pages/employees";
function NavBar() {
  return (
<>
<Navbar collapseOnSelect expand="sm" className="custom-nav" sticky="top">
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/search">Search</Nav.Link>
        <Nav.Link href="/employees">Employee</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Navbar.Collapse>
  </Navbar>
  <Route exact path="/search" component={Search} />
  <Route exact path="/employees" component={Employee} />
  <Route exact path="/" />
  </>
  )
}
 
export default NavBar;