import React from 'react'
import './style.css'
import smartphone from '../../assets/smartphone.png'

function importAll(r) {
  return r.keys().map(r);
}

export default function SiteHomeInstagram() {
  const filenames = importAll(require.context('../../assets/insta_pics', false, /\.(png|jpe?g|svg)$/));
  
  return (
  
  <div
    className='home_instagram_style'>
        <h2>INSTAGRAM</h2>
        <div className='riga_titolo'><span></span></div>
        <div style={{width:'300px', height:'584px', backgroundImage: `url(${smartphone})`, backgroundSize:"cover", position:'relative'}}>
          <div className='insta_scroll'>
            {filenames.map(filename => {
            return <img
            src={filename} alt={filename}
            style={{width:'283px'}}
            />
            })}
          </div>
        </div>
  </div>
  )
}