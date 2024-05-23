import React from 'react'
import "./style.css"
import Barra from '../barra/Barra'

export default function SiteHomeChiSiamo() {
  return (
    <div
    className='home_chi_siamo_style'>
      <div
      className='home_chi_siamo_text_style'>
        <h2>CHI SIAMO</h2>
        <div className='riga_titolo'><span></span></div>
        <p>archimede nasce dall'idea di una famiglia di origini siciliane. oltre 30 anni di esperienza nel settore ci hanno permesso di far evolvere alcuni dei prodotti tipici siciliani viaggiando tra i sapori dell'emilia e quelli del resto del mondo...</p>
        <button className='button_chi_siamo'>leggi tutto</button>
      </div>
    <Barra></Barra>
    </div>
  )
}