import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'

export default function Contatti() {
  return (
    <div className='home_contatti_style'>
      <h2>CONTATTI</h2>
        <Container>
        <Row className='home_contatti_content_style'>
          <Col sm={12} md={12} lg={6} className='home_map_style'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d687.505503380443!2d10.06520946071357!3d44.86538634763051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47805e3ae686389d%3A0x2a9389a67ee4fd77!2sPasticceria%20Archimede!5e0!3m2!1sit!2sit!4v1716393747531!5m2!1sit!2sit" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="archimede map"></iframe></Col>
          <Col sm={12} md={12} lg={6} className='negozio_pic_style'>
            <div>
              <div>
                <div><p>icona</p></div>
                <div><p>numero telefono</p></div>
              </div>
              <div>
                <div><p>icona</p></div>
                <div><p>indirizzo</p></div>
              </div>
              <div>
                <div><p>icona</p></div>
                <div><p>orario</p></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}