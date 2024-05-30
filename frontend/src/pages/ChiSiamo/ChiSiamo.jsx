import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';
import ricotta from '../../assets/ricotta.jpg'

export default function ChiSiamo() {
  return (
    <>
    <SiteNavbar/>
    <Container fluid>
        <Row>
            <Col md={6}>
                <h2>chi siamo</h2>
            </Col>
            <Col md={6}
            className='chisiamo_div_dx'
            style={{backgroundImage: `url(${ricotta})`, backgroundSize:"cover"}}>
            </Col>
        </Row>
    </Container>
    <SiteHomeFooter/>
    </>
  )
}
