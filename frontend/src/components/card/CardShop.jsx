import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export default function CardShop() {
    const [data, setData] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetch('http://localhost:3001/products/', {
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
    <Row xs={2} sm={2} md={2} lg={4} xl={4} className="g-3 mt-0">
      {data.toReversed().map((product) => (
        <Col key={product._id}>
          <Card
          style={{height:'auto'}}>
            <Link to={`/products/${product._id}`} style={{textDecoration:"none"}}>
            <Card.Img
            variant="top"
            style={{objectFit:'cover', height:'200px'}}
            src={product.immagine} />
            </Link>
            <Card.Body>
            <Link to={`/products/${product._id}`} style={{textDecoration:"none"}}>
              <Card.Title><h2 style={{fontSize:"25px", color:"#3B2313"}}>{product.prodotto}</h2></Card.Title>
              </Link>
              <Card.Text>
              <p style={{fontSize:"14px"}}>
                Prezzo: {product.prezzo}€
              </p>
              </Card.Text>
              <Button
              variant="dark"
              style={{backgroundColor:'#3B2313'}}
              onClick={() => addToCart(product)}>
                Aggiungi al carrello
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}
