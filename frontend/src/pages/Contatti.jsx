import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'
import SiteNavbar from '../components/navbar/SiteNavbar';
import SiteHomeFooter from '../components/home/SiteHomeFooter';
import negozio from '../assets/negozio.jpg'

export default function Contatti() {
  return (
    <>
    <SiteNavbar></SiteNavbar>
        <Container fluid>
        <Row className='contatti_row_style'>
          <Col md={12} className='mb-4'>
            <h2>contatti</h2>
          </Col>
          <Col sm={12} md={12} lg={6} className='negozio_pic_style'
          style={{backgroundImage: `url(${negozio})`, backgroundSize:"cover"}}>
            <div className='contatti_info_style'>
              <div>
                <div><p><ion-icon name="call-outline"></ion-icon>chiamaci</p></div>
                <div><p>389 538 0724</p></div>
              </div>
              <div>
                <div><p><ion-icon name="location-outline"></ion-icon>indirizzo</p></div>
                <div>
                  <p>Via di Prova</p>
                  <p>Parma</p>
                </div>
              </div>
              <div>
                <div><p><ion-icon name="time-outline"></ion-icon>orario</p></div>
                <div><p>orario</p></div>
              </div>
              <div>
                <div>
                  <p><ion-icon name="mail-outline"></ion-icon>email</p>
                </div>
                <div>
                  <p>prova@email.it</p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6} className='contatti_map_style'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d687.505503380443!2d10.06520946071357!3d44.86538634763051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47805e3ae686389d%3A0x2a9389a67ee4fd77!2sPasticceria%20Archimede!5e0!3m2!1sit!2sit!4v1716393747531!5m2!1sit!2sit" height="500" style={{width:'100%', padding:'2px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="archimede map"></iframe></Col>
          <Col md={12} className='mt-4'>
            <h2>social network</h2>
          </Col>
        </Row>
      </Container>
    <SiteHomeFooter></SiteHomeFooter>
    </>
  )
}