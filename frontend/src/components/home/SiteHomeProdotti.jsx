import React from 'react'
import './style.css'
import arancini from '../../assets/products/home_arancini.jpg'
import cannoli from '../../assets/products/home_cannoli.jpg'
import lievitati from '../../assets/products/home_lievitati.jpg'
import granite from '../../assets/products/home_granite.jpg'
import { Link } from 'react-router-dom';

export default function SiteHomeProdotti() {
  return (
    <div
    className='home_prodotti_style'>
        <h2>PRODOTTI</h2>
        <div className='riga_titolo'><span></span></div>
        <div className='home_prodotti_content_style'>
        <div className='home_prodotto_style' style={{backgroundImage: `url(${arancini})`, backgroundSize:"cover", backgroundPosition:"center"}}>
        <Link to='/prodotti' style={{textDecoration:'none'}}><h6 className='text_product'>ARANCINI</h6></Link>
        </div>
        <div className='home_prodotto_style' style={{backgroundImage: `url(${cannoli})`, backgroundSize:"cover", backgroundPosition:"center"}}>
        <Link to='/prodotti' style={{textDecoration:'none'}}><h6 className='text_product'>DOLCI</h6></Link>
        </div>
        <div className='home_prodotto_style' style={{backgroundImage: `url(${lievitati})`, backgroundSize:"cover", backgroundPosition:"center"}}>
        <Link to='/prodotti' style={{textDecoration:'none'}}><h6 className='text_product'>LIEVITATI</h6></Link>
        </div>
        <div className='home_prodotto_style' style={{backgroundImage: `url(${granite})`, backgroundSize:"cover", backgroundPosition:"center"}}>
        <Link to='/prodotti' style={{textDecoration:'none'}}><h6 className='text_product'>GELATERIA</h6></Link>
        </div>
        </div>
        <div className='button_div_chi_siamo'>
        <Link to='/prodotti'>
        <button className='button_chi_siamo'>scopri i nostri prodotti</button>
        </Link>
        </div>
    </div>
  )
}
