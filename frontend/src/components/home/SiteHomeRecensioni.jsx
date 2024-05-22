import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'

export default function SiteHomeRecensioni() {
  return (
    <div className='home_recensioni_style'>
      <h2>RECENSIONI</h2>
        <Container>
        <Row className='home_recensioni_content_style'>
          <Col md={6} lg={3} className='recensione_style'><p>RECENSIONE 1</p></Col>
          <Col md={6} lg={3} className='recensione_style'><p>RECENSIONE 2</p></Col>
          <Col md={6} lg={3} className='recensione_style'><p>RECENSIONE 3</p></Col>
          <Col md={6} lg={3} className='recensione_style'><p>RECENSIONE 4</p></Col>
        </Row>
      </Container>
    </div>
  )
}