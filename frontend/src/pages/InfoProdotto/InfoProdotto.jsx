import React, { useContext } from 'react'
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './style.css'
import { CartContext } from '../../context/CartContext'; 

export default function InfoProdotto() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            //console.log(data);
        })
        .catch(error => console.log(error))
      },[]);

  return (
    <>
    <SiteNavbar/>
    <Container>
        <Row className='pt-4 pb-4'>
            <Col md={12}
            className='mb-4'>
                <h2>shop online</h2>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={6}>
              <div className='d-flex align-items-center justify-content-center'>
                <img src={data.immagine} alt="immagine_prodotto"
                style={{maxWidth:'400px', border:'solid 1px #3B2313', borderRadius:'30px', objectFit:'center'}} />
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={6}
            className='mt-2'>
              <div>
                <h3 id='nome_prodotto'>{data.prodotto}</h3>
                <p>{data.descrizione}</p>
                <p><span style={{fontWeight:'500'}}>Prezzo:</span> {data.prezzo}€</p>
                <Button variant="dark" className='mb-4'
                style={{backgroundColor:'#3B2313'}}
                onClick={() => addToCart(data)}
                >Aggiungi al carrello</Button>
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
    </>
  )
}
