import React from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function HeaderSection() {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='/Page/Home'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/Page/Products'>Products</Nav.Link>
            <Nav.Link href='/Page/Cart'>Cart</Nav.Link>
            
            <Nav.Link href='/Page/About'>About Us</Nav.Link>
            <Nav.Link href='/Page/Contact'>Contact  Us</Nav.Link>
           
           
          </Nav>
          <Nav>
          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default HeaderSection;
