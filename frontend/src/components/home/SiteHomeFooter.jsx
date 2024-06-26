import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function SiteHomeFooter() {
  return (
    <Container fluid>
    <Row className='footer_style'>
      <Col xs={12} sm={12} md={4} lg={4} xl={4}
      className='footer_div_style'>
        <p className='title_div_footer'><ion-icon name="time-outline" style={{marginRight:'5px'}}></ion-icon>orario</p>
        <p>Lunedì: chiuso</p>
        <p>Martedì-Sabato: 9-14 / 16-20</p>
        <p></p>
        <p>Domenica: 9-13</p>
      </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4}
      className='footer_div_style'>
        <p className='title_div_footer'><ion-icon name="location-outline" style={{marginRight:'5px'}}></ion-icon>dove siamo</p>
        <p>Via Don Enrico Maffacini, 3</p>
        <p>43036, Fidenza PR</p>
      </Col>
      <Col xs={12} sm={12} md={4} lg={4} xl={4}
      className='footer_div_style'
      style={{flexDirection:'column'}}>
        <p className='title_div_footer'>social</p>
        <div>
        <Link to='https://www.facebook.com/ArchimedeIT' target="_blank" style={{textDecoration:'none', color:'white'}}>
        <ion-icon name="logo-facebook" style={{margin:'3px', fontSize:'25px'}}></ion-icon>
        </Link>
        <Link to='https://www.instagram.com/archimedeit/' target="_blank" style={{textDecoration:'none', color:'white'}}>
        <ion-icon name="logo-instagram" style={{margin:'3px', fontSize:'25px'}}></ion-icon>
        </Link>
        <Link to='https://wa.me/c/393895380724' target="_blank" style={{textDecoration:'none', color:'white'}}>
        <ion-icon name="logo-whatsapp" style={{margin:'3px', fontSize:'25px'}}></ion-icon>
        </Link>
        </div>
        <p style={{fontSize:'11px', margin:'2px 0px'}}>Privacy Policy</p>
        <Link to='/areariservata' style={{textDecoration:'none', color:'white'}}><p style={{fontSize:'11px'}}>Area Riservata</p></Link>
      </Col>
      <Col md={12}
      className='copyright'>
      <p>2024 © Archimede di L&D S.R.L.</p>
      </Col>
    </Row>
  </Container>
  )
}