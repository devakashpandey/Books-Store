import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AddBookModal from '../components/AddBookModal';
import "./NavBar.css"
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <>
    <div className='nav-bar'>

    <Navbar className='my-navbar' bg="dark" variant="dark" expand="lg">
      <Container className='main-container'>
        <Navbar.Brand className='logo' href="#home">Books Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
     <div className='my-nav'>
          <Nav className="me-auto mynav">
          <NavLink className="my-nav-link" to="/">Home</NavLink>""
           <span className='my-nav-link'> <AddBookModal  /> </span>""
            <NavLink className="my-nav-link" to="/contact">Contact</NavLink>""
                   
          </Nav>
          
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>

 


</div>
    </>
  )
}

export default NavBar;
