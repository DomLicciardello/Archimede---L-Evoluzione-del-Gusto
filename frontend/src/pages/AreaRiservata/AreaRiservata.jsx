import React from 'react'
import CardShop from '../../components/card/CardShop'

export default function AreaRiservata() {
  return (
    <div>
        <h2>AREA RISERVATA</h2>
        <button><a href="areariservata/aggiungiprodotto">
            Aggiungi Prodotto</a></button>
        <CardShop></CardShop>
    </div>
  )
}