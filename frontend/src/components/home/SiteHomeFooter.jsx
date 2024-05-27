import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SiteHomeFooter() {
  return (
    <Container fluid className='footer_style'>
    <Row>
      <Col sm={12} md={4} lg={4}
      className='footer_div_style'>
        <p style={{fontSize:'16px', marginBottom:'10px'}}><ion-icon name="time-outline" style={{marginRight:'5px', fontSize:'22px'}}></ion-icon>orario</p>
        <p>lun: chiuso</p>
        <p>mar-sab: 9-20</p>
        <p>dom: 9-13</p>
      </Col>
      <Col sm={12} md={4} lg={4}
      className='footer_div_style'>
        <p style={{fontSize:'16px', marginBottom:'10px'}}><ion-icon name="location-outline" style={{marginRight:'5px', fontSize:'22px'}}></ion-icon>dove siamo</p>
        <p>via maffacini, 3</p>
        <p>43036, Fidenza PR</p>
      </Col>
      <Col sm={12} md={4} lg={4}
      className='footer_div_style'
      style={{flexDirection:'column'}}>
        <p style={{fontSize:'16px', marginBottom:'10px'}}>social</p>
        <div>
        <ion-icon name="logo-facebook"style={{marginRight:'10px'}}></ion-icon>
        <ion-icon name="logo-instagram"style={{marginRight:'10px'}}></ion-icon>
        <ion-icon name="logo-whatsapp"></ion-icon>
        </div>
        <p style={{fontSize:'13px'}}>privacy policy</p>
      </Col>
      <Col>
      <p style={{margin:'0px', fontSize:'13px'}}>2024 © ARCHIMEDE DI L&D S.R.L.</p>
      </Col>
    </Row>
  </Container>
  )
}
