import React from 'react'
import logo from '../../assets/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import "./style.css"

export default function SiteNavbar() {
  const [navbar, setNavbar] = useState(false);

  const changeLogo = () => {
    if(window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeLogo);

  return (
    <Navbar expand="lg" className={navbar ? 'change_logo' : 'archimede_navbar'}>
      <Container>
      <Navbar.Brand href="http://localhost:3000/" className='logo_style d-lg-none'><img src={logo} alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto d-flex align-items-center">
            <Nav.Link className='link_style' href="http://localhost:3000/chisiamo">CHI SIAMO</Nav.Link>
            <Nav.Link className='link_style' href="http://localhost:3000/prodotti">PRODOTTI</Nav.Link>
            <Navbar.Brand href="http://localhost:3000/" className='logo_style d-none d-lg-block'><img src={logo} alt='logo'/></Navbar.Brand>
            <Nav.Link className='link_style mx-4' href="http://localhost:3000/shop">SHOP</Nav.Link>
            <Nav.Link className='link_style' href="http://localhost:3000/contatti">CONTATTI</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}