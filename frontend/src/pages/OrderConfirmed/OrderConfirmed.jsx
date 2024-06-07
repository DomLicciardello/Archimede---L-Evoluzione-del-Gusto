import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';
import { Link } from 'react-router-dom';

export default function OrderConfirmed() {
  return (
    <>
    <SiteNavbar/>
    <Container>
        <Row
        className='d-flex justify-content-center align-items-center ms-5 me-5'>
            <Col md={12}
            className='not_found'>
                <h2>ORDINE CONFERMATO</h2>
                <hr></hr>
                <h2 style={{fontSize:'24px', marginBottom:'10px'}}>GRAZIE PER L'ACQUISTO!</h2>
                <h2 style={{fontSize:'20px'}}>A BREVE RICEVERAI UNA EMAIL</h2>
                <h2 style={{fontSize:'20px'}}>CON IL RIEPILOGO DEL TUO ORDINE!</h2>
                <hr></hr>
                <Link to='/' style={{textDecoration:'none', borderBottom:'1px solid #3B2313'}}>
                <h2 style={{fontSize:'24px', color:'#3B2313'}}>torna alla home page</h2>
                </Link>
            </Col>
        </Row>
    </Container>
    <SiteHomeFooter/>
    </>
  )
}