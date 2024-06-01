import React from 'react';
import CardShop from '../../components/card/CardShop';
import Button from 'react-bootstrap/Button';
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';

export default function AreaRiservata() {
  return (
    <>
    <SiteNavbar></SiteNavbar>
    <h2 className='mt-4'>gestione prodotti</h2>
    <div
    className='d-flex flex-column justify-content-center align-items-center mt-3 mb-1'>
        <Button variant="dark"
        style={{backgroundColor:'#3B2313'}}>
          <a href="areariservata/aggiungiprodotto" style={{textDecoration:'none', color:'white'}}>Aggiungi Prodotto</a>
        </Button>
    </div>
    <div className='mb-4'>
      <CardShop></CardShop>
    </div>
    <SiteHomeFooter></SiteHomeFooter>
    </>
  )
}