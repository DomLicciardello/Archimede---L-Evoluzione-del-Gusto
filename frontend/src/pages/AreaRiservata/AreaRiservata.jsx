import React from 'react';
import Button from 'react-bootstrap/Button';
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardsAreaRiservata from './CardsAreaRiservata';

export default function AreaRiservata() {
  return (
    <>
    <SiteNavbar></SiteNavbar>
    <Container>
        <Row className='pt-4 pb-4'>
            <Col md={12}>
                <h2>area riservata</h2>
                <div
                className='d-flex flex-row justify-content-center align-items-center mt-3 mb-1'>
                <Button variant="dark"
                style={{backgroundColor:'#3B2313', marginRight:'10px'}}>
                <a href="areariservata/aggiungiprodotto" style={{textDecoration:'none', color:'white'}}>Aggiungi Prodotto</a>
                </Button>
                <Button variant="dark"
                style={{backgroundColor:'#3B2313', marginLeft:'10px'}}>
                <a href="areariservata/cronologiaordini" style={{textDecoration:'none', color:'white'}}>Cronologia Ordini</a>
                </Button>
                </div>
            </Col>
            <Col md={12}>
              <CardsAreaRiservata></CardsAreaRiservata>
            </Col>
        </Row>
    </Container>
    <SiteHomeFooter></SiteHomeFooter>
    </>
  )
}