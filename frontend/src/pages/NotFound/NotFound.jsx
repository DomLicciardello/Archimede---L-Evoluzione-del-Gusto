import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';

export default function NotFound() {
  return (
    <>
    <SiteNavbar/>
    <Container>
        <Row
        className='d-flex justify-content-center align-items-center ms-5 me-5'>
            <Col md={12}
            className='not_found'>
                <h2>OOPS...</h2>
                <h2>PAGINA NON TROVATA!</h2>
                <hr></hr>
                <h2 style={{fontSize:'20px'}}>PAGE NOT FOUND</h2>
                <h2 style={{fontSize:'60px'}}>404</h2>
                <h2>ERROR</h2>
                <hr></hr>
                <h2>TORNA AL SITO</h2>
            </Col>
        </Row>
    </Container>
    <SiteHomeFooter/>
    </>
  )
}