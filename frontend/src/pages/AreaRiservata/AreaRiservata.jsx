import React from 'react';
import CardShop from '../../components/card/CardShop';
import Button from 'react-bootstrap/Button';
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AreaRiservata() {
  return (
    <>
    <SiteNavbar></SiteNavbar>
    <Container>
        <Row className='pt-4 pb-4'>
            <Col md={12}>
                <h2>gestione prodotti</h2>
                <div
                className='d-flex flex-column justify-content-center align-items-center mt-3 mb-1'>
                <Button variant="dark"
                style={{backgroundColor:'#3B2313'}}>
                <a href="areariservata/aggiungiprodotto" style={{textDecoration:'none', color:'white'}}>Aggiungi Prodotto</a>
                </Button>
                </div>
            </Col>
            <Col md={12}>
              <CardShop></CardShop>
            </Col>
        </Row>
    </Container>
    <SiteHomeFooter></SiteHomeFooter>
    </>
  )
}