import React from 'react'
import barra from '../../assets/barra.png'
import './style.css'

export default function Barra() {
  return (
    <div
    className='barra_style'>
    <img
    className='barra_pic_style'
    src={barra}
    alt='barra'
    />
    <img
    className='barra_pic_style'
    src={barra}
    alt='barra'
    />
    <img
    src={barra}
    alt='barra'
    />
    </div>
  )
}
