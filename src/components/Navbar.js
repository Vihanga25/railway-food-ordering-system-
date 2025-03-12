import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const NavigationBar = ({ user }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="100"
            height="100"
            className=" h-full rounded-full absolute left-[10px]"
            alt="Sri Lanka Railway"
          />
          Sri Lanka Railway Canteen Service
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Food Menu</Nav.Link>
            <Nav.Link as={Link} to="/cart">Add to Cart</Nav.Link>
            <Nav.Link as={Link} to="/orders">My Orders</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            
            {/* User Profile Icon */}
            {user ? (
              <Nav.Link as={Link} to="/profile">
                <i className="fas fa-user-circle"></i>
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                <i className="fas fa-user"></i>
              </Nav.Link>
            )}
            <Button as={Link} to="/login" variant="outline-light" className="ms-2">
              Login
            </Button>
            <Button as={Link} to="/signup" variant="outline-light" className="ms-2">
              Sign Up
            </Button>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;


