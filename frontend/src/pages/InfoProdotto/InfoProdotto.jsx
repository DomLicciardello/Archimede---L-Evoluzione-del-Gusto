import React, { useContext, useState, useEffect } from 'react'
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useParams, Link } from 'react-router-dom';
import './style.css'
import { CartContext } from '../../context/CartContext'; 
import Alert from 'react-bootstrap/Alert';

export default function InfoProdotto() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const { addToCart } = useContext(CartContext);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            //console.log(data);
        })
        .catch(error => console.log(error))
      },[id]);

      const formatPrice = (price) => {
        const priceNumber = parseFloat(price);
        return priceNumber.toLocaleString('it-IT', { minimumFractionDigits: 2 });
    }

    const handleAddToCart = (product) => {
      addToCart(product);
      setShowAlert(true);
      setTimeout(() => {
          setShowAlert(false);
      }, 3000);
    }

  return (
    <>
    <SiteNavbar/>
    <Container>
        <Row className='pt-4 pb-4'>
            <Col md={12}
            className='mb-4'>
                <h2>{data.prodotto}</h2>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={6}>
              <div className='d-flex align-items-center justify-content-center'>
                <img src={data.immagine} alt="immagine_prodotto"
                style={{maxWidth:'480px', border:'2px #3B2313 solid', borderRadius:'50px', objectFit:'center'}} />
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={6}
            className='mt-2'>
              <div>
              
                <p>{data.descrizione}</p>
                <p><span style={{fontWeight:'500'}}>Prezzo:</span> {formatPrice(data.prezzo)}€</p>
                <Button variant="dark"
                style={{backgroundColor:'#3B2313'}}
                className='button_shop_card mb-4'
                onClick={() => handleAddToCart(data)}>
                  <ion-icon name="cart-outline"></ion-icon>
                  <span className='ms-1'>Aggiungi al carrello</span>
                </Button>
                <p><b>Quando verrà spedito l'ordine?</b></p>
                <p>Le spedizioni vengono effettuate il martedì e il mercoledì. Gli ordini effettuati entro il mercoledì alle 8:00 verranno spediti il mercoledì stesso. Il corriere non può garantire la consegna entro il venerdì.</p>
                <p>Per maggiori informazioni <a href="/contatti">contattaci</a>.</p>
              </div>
            </Col>
            <Col md={12}
            className='d-flex justify-content-center align-items-center mt-3'>
            <Link to='/shop'>
            <Button
            style={{backgroundColor:'#558259', border:'solid 1px white'}}>
            Torna allo shop
            </Button>
            </Link>
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
