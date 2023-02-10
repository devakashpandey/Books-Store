import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AddBookModal from '../components/AddBookModal';
import "./NavBar.css"

const NavBar = () => {
  return (
    <>
    <div className='nav-bar'>

    <Navbar className='my-navbar' bg="dark" variant="dark" expand="lg">
      <Container className='main-container'>
        <Navbar.Brand className='logo' href="#home">Books List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto mynav">
            <Nav.Link href="#home">Home</Nav.Link>
            <AddBookModal />
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

</div>
    </>
  )
}

export default NavBar;
