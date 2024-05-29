import React from 'react'
import logo from '../../assets/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css"

export default function SiteNavbar() {
  return (
    <Navbar expand="lg" id='archimede_navbar' className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="http://localhost:3000/" className='logo_style d-lg-none'><img src={logo} alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto d-flex align-items-center">
            <Nav.Link className='link_style' href="#">CHI SIAMO</Nav.Link>
            <Nav.Link className='link_style' href="#">PRODOTTI</Nav.Link>
            <Navbar.Brand href="http://localhost:3000/" className='logo_style d-none d-lg-block'><img src={logo} alt='logo'/></Navbar.Brand>
            <Nav.Link className='link_style mx-4' href="#">SHOP</Nav.Link>
            <Nav.Link className='link_style' href="http://localhost:3000/contatti">CONTATTI</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}