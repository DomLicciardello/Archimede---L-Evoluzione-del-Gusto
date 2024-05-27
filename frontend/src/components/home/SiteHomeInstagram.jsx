import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import smartphone from '../../assets/smartphone.png'
import Barra from '../barra/Barra'

function importAll(r) {
  return r.keys().map(r);
}

export default function SiteHomeInstagram() {
  const filenames = importAll(require.context('../../assets/insta_pics', false, /\.(png|jpe?g|svg)$/));
  
  return (
  <>
    <Container fluid className='home_instagram_style'>
      <Row>
        <Col>
        <h2>SEGUICI SUI SOCIAL</h2>
        <div className='riga_titolo'><span></span></div>
        </Col>
      </Row>
      <Row>
        <Col
        md={12} lg={4}
        className='d-flex justify-content-center align-items-center pe-0 mt-1 mb-5'>
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
        </Col>
        <Col
        md={12} lg={8}
        className='d-flex justify-content-center align-items-center'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <p style={{fontSize:'20px', textAlign:'center', marginInline:'5px'}}>MANGIA, SCATTA E TAGGA @ARCHIMEDEIT SULLE TUE STORIE INSTAGRAM!</p>
          <p style={{fontSize:'20px', textAlign:'center', marginInline:'5px'}}>IN QUESTO MODO PARTECIPERAI OGNI MESE AD UN ESTRAZIONE PER VINCERE UN REGALO!</p>
          <button className='button_instagram d-flex align-items-center'><ion-icon name="logo-instagram" style={{marginRight:'5px'}}></ion-icon>seguici su instagram</button>
          <div className='riga_titolo'><span></span></div>
          <p style={{fontSize:'20px', textAlign:'center', marginInline:'5px'}}>METTI "MI PIACE" ALLA NOSTRA PAGINA FACEBOOK PER RESTARE AGGIORNATO SU TUTTE LE NOVITÀ!</p>
          <button className='button_facebook d-flex align-items-center'><ion-icon name="logo-facebook" style={{marginRight:'5px'}}></ion-icon>seguici su facebook</button>
          <div className='riga_titolo'><span></span></div>
          <p style={{fontSize:'20px', textAlign:'center', marginInline:'5px'}}>PRENOTA ARANCINI E CANNOLI D'ASPORTO CON IL NOSTRO CATALOGO WHATSAPP!</p>
          <button className='button_whatsapp d-flex align-items-center'><ion-icon name="logo-whatsapp" style={{marginRight:'5px'}}></ion-icon>catalogo whatsapp</button>
          <div className='riga_titolo'><span></span></div>
        </div>
        </Col>
      </Row>
      <Barra></Barra>
    </Container>
  </>
  )
}