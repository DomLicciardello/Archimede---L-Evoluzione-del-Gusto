import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import smartphone from '../../assets/smartphone.png'
import { Link } from 'react-router-dom';

function importAll(r) {
  return r.keys().map(r);
}

export default function SiteHomeInstagram() {
  const filenames = importAll(require.context('../../assets/insta_pics', false, /\.(png|jpe?g|svg)$/));
  
  return (
  <>
    <Container className='home_instagram_style py-5'>
      <Row>
        <Col md={12}>
        <h2>SOCIAL</h2>
        <div className='riga_titolo'><span></span></div>
        </Col>
        <Col md={12} lg={6} xl={6}
        className='d-flex justify-content-center align-items-center'>
        <div
        style={{
          width:'300px',
          height:'584px',
          backgroundImage: `url(${smartphone})`,
          backgroundSize:"cover",
          position:'relative'
          }}>
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
        <Col md={12} lg={6} xl={6}
        className='d-flex flex-column justify-content-center mt-4 p-0'>
            <div className='social_text_style'>
              <p>scatta, mangia e tagga @archimedeit sulle tue storie instagram! parteciperai ad un estrazione mensile per vincere un regalo!</p>
              <Link to='https://www.instagram.com/archimedeit/' target="_blank" style={{textDecoration:'none'}}>
              <button className='button_instagram'><ion-icon name="logo-instagram" style={{marginRight:'5px'}}></ion-icon>instagram</button>
              </Link>
            </div>
            <div className='riga_titolo_social'><span></span></div>
            <div className='social_text_style'>
              <p>metti "mi piace" alla nostra pagina facebook per rimanere aggiornato sulle ultime novità!</p>
              <Link to='https://www.facebook.com/ArchimedeIT' target="_blank" style={{textDecoration:'none'}}>
              <button className='button_facebook'><ion-icon name="logo-facebook" style={{marginRight:'5px'}}></ion-icon>facebook</button>
              </Link>
            </div>
            <div className='riga_titolo_social'><span></span></div>
            <div className='social_text_style'>
              <p>prenota arancini e cannoli take away comodamente dal nostro catalogo whatsapp!</p>
              <Link to='https://wa.me/c/393895380724' target="_blank" style={{textDecoration:'none'}}>
              <button className='button_whatsapp'><ion-icon name="logo-whatsapp" style={{marginRight:'5px'}}></ion-icon>whatsapp</button>
              </Link>
            </div>
            <div className='riga_titolo_social'><span></span></div>
        </Col>
      </Row>
    </Container>
  </>
  )
}