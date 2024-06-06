import React, { useState } from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';
import CardShop from '../../components/card/CardShop';
import Alert from 'react-bootstrap/Alert';

export default function Shop() {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <>
    <SiteNavbar/>
    <Container>
        <Row className='pt-4 pb-4'>
            <Col md={12}>
              <h2>shop online</h2>           
            </Col>
            <Col md={12}>
              <CardShop showShopAlert={handleShowAlert}/>
            </Col>
        </Row>
    </Container>
    <SiteHomeFooter/>

    {showAlert && (
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '99', width:'400px' }}>
        <Alert variant='success pb-0'>
          <p style={{textAlign:'center', fontWeight:'600'}}>Prodotto aggiunto al carrello!</p>
        </Alert>
      </div>
    )}
    </>
  )
}