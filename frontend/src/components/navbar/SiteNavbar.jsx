import React from 'react'
import logo from '../../assets/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartShop from '../cart/CartShop';
import "./style.css"

export default function SiteNavbar() {
  return (
    <Navbar expand="xl" className='archimede_navbar'>
      <Container>
      <Navbar.Brand href="http://localhost:3000/" className='logo_style d-xl-none'><img src={logo} alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto d-flex align-items-center">
            <div className='cart_first_style'>
            <CartShop></CartShop>
            </div>
            <Nav.Link className='link_style' href="http://localhost:3000/chisiamo">CHI SIAMO</Nav.Link>
            <Nav.Link className='link_style' href="http://localhost:3000/prodotti">PRODOTTI</Nav.Link>
            <Navbar.Brand href="http://localhost:3000/" className='logo_style d-none d-xl-block'><img src={logo} alt='logo'/></Navbar.Brand>
            <Nav.Link className='link_style mx-4' href="http://localhost:3000/shop">SHOP</Nav.Link>
            <Nav.Link className='link_style' href="http://localhost:3000/contatti">CONTATTI</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className='cart_second_style'>
        <CartShop></CartShop>
        </div>
      </Container>
    </Navbar>
  )
}