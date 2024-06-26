import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function CardShop() {
    const [data, setData] = useState([]);

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
        <Col>
          <Card
          style={{height:'auto'}}>
            <Card.Img
            variant="top"
            style={{objectFit:'cover', height:'200px'}}
            src={product.immagine} />
            <Card.Body>
              <Card.Title><h2 style={{fontSize:"25px"}}>{product.prodotto}</h2></Card.Title>
              <Card.Text>
              </Card.Text>
              <Link to={`/areariservata/modificaprodotto/${product._id}`} key={product._id}
              style={{textDecoration:"none"}}
              className='d-flex justify-content-center align-items-center'>
              <Button variant="warning" type="submit" className='me-2'>
                Gestisci prodotto
              </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}
