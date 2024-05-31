import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';
import CardShop from '../../components/card/CardShop';

export default function Shop() {
  return (
    <>
    <SiteNavbar/>
    <Container>
        <Row className='pt-4 pb-4'>
            <Col md={12}>
                <h2>shop online</h2>
            </Col>
            <Col md={12}>
              <CardShop></CardShop>
            </Col>
        </Row>
    </Container>
    <SiteHomeFooter/>
    </>
  )
}