import React from 'react'
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function InfoProdotto() {
    const { id } = useParams();
    const [data, setData] = useState([]);

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
    <div>
        <Card>
        <Card.Img variant="top" src={data.immagine}/>
        <Card.Body>
          <Card.Text>
            <div>
              <h2>{data.prodotto}</h2>
              <p>{data.descrizione}</p>
              <p>Prezzo: {data.prezzo}€</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <SiteHomeFooter/>
    </>
  )
}
