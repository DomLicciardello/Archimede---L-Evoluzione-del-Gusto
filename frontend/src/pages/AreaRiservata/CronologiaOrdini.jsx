import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

export default function CronologiaOrdini() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/orders/', {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            //console.log(data);
        })
        .catch(error => console.log(error))
      },[]);

  return (
    <>
    <SiteNavbar></SiteNavbar>
    <Container>
    <Row className='mt-4'>
        <Col>
        <h2>cronologia ordini</h2>
        </Col>
    </Row>
    <Row md={12} className="mt-3 mb-4">
      {data.toReversed().map((order) => (
        <Col key={order._id}>
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><span style={{fontWeight:'600', borderBottom:'solid 1px black', marginRight:'10px'}}>{order.email}</span>{order.createdAt}</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
        <ListGroup.Item><span style={{fontWeight:'600'}}>Nome:</span> {order.nome} {order.cognome}</ListGroup.Item>
            <ListGroup.Item><span style={{fontWeight:'600'}}>Email:</span> {order.email}</ListGroup.Item>
            <ListGroup.Item><span style={{fontWeight:'600'}}>Cellulare:</span> {order.cellulare}</ListGroup.Item>
            <ListGroup.Item><span style={{fontWeight:'600'}}>Indirizzo:</span> {order.indirizzo}</ListGroup.Item>
            <ListGroup.Item><span style={{fontWeight:'600'}}>Città:</span> {order.citta} {order.cap} - {order.provincia}, {order.stato}</ListGroup.Item>
            <ListGroupItem className='pb-0'>
            <span style={{fontWeight:'600'}}>Prodotti acquistati:</span>
            <ul>
            {order.products.map((product, index) => (
                <li key={index}>{product.prodotto} - {product.prezzo}€</li>
            ))}
            </ul>
            </ListGroupItem>
            <ListGroup.Item><span style={{fontWeight:'600'}}>Totale spesa:</span> {order.prezzototale}€ / spedizione inclusa</ListGroup.Item>
            <ListGroup.Item><span style={{fontWeight:'600'}}>Data ordine:</span> {order.createdAt}</ListGroup.Item>
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>
      ))}
    </Row>
    </Container>
    <SiteHomeFooter></SiteHomeFooter>
    </>
  )
}
