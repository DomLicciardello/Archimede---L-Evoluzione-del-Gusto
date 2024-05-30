import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';

export default function Shop() {
  return (
    <>
    <SiteNavbar/>
    <Container>
        <Row>
            <Col>
                <h2>shop</h2>
            </Col>
        </Row>
    </Container>
    <SiteHomeFooter/>
    </>
  )
}