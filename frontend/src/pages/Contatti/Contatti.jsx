import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';
import negozio from '../../assets/negozio.jpg'

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
              <div className='contatti_div_style'>
                <p className='contatti_title_style'><ion-icon name="call-outline" style={{marginRight:'3px'}}></ion-icon>telefono</p>
                <p>+39 389 538 0724</p>
              </div>
              <div className='contatti_div_style'>
                <p className='contatti_title_style'><ion-icon name="location-outline" style={{marginRight:'3px'}}></ion-icon>indirizzo</p>
                <p>Via Don Enrico Maffacini, 3</p>
                <p>43036, Fidenza PR</p>
              </div>
              <div className='contatti_div_style'>
                <p className='contatti_title_style'><ion-icon name="mail-outline" style={{marginRight:'3px'}}></ion-icon>email</p>
                <p>archimede.ld@gmail.com</p>
              </div>
              <div className='contatti_div_style'>
                <p className='contatti_title_style'><ion-icon name="time-outline" style={{marginRight:'3px'}}></ion-icon>orario</p>
                <p>Lunedì: chiuso</p>
                <p>Martedì-Sabato: 9-14 / 16-20</p>
                <p>Domenica: 9-13</p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={6} className='contatti_map_style'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d687.505503380443!2d10.06520946071357!3d44.86538634763051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47805e3ae686389d%3A0x2a9389a67ee4fd77!2sPasticceria%20Archimede!5e0!3m2!1sit!2sit!4v1716393747531!5m2!1sit!2sit" height="500" style={{width:'100%', padding:'2px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="archimede map"></iframe></Col>
          <Col md={12} className='social_contatti_style'>
          <button className='button_facebook'><ion-icon name="logo-facebook" style={{marginRight:'5px'}}></ion-icon>facebook</button>
          <button className='button_instagram'><ion-icon name="logo-instagram" style={{marginRight:'5px'}}></ion-icon>instagram</button>
          <button className='button_whatsapp'><ion-icon name="logo-whatsapp" style={{marginRight:'5px'}}></ion-icon>whatsapp</button>
          </Col>
        </Row>
      </Container>
    <SiteHomeFooter></SiteHomeFooter>
    </>
  )
}