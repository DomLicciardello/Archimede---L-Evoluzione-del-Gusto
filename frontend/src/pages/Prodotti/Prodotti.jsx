import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';

import ragu from '../../assets/products/arancini/ragu.jpg'
import prosciutto from '../../assets/products/arancini/prosciutto.jpg'
import pistacchio from '../../assets/products/arancini/pistacchio.jpg'
import salame from '../../assets/products/arancini/salame.jpg'
import melanzane from '../../assets/products/arancini/melanzane.jpg'
import zucca from '../../assets/products/arancini/zucca.jpg'
import burger from '../../assets/products/arancini/burger.jpg'
import pollo from '../../assets/products/arancini/pollo.jpg'
import borgo from '../../assets/products/arancini/borgo.jpg'

function importAll(r) {
  return r.keys().map(r);
}

export default function Prodotti() {
  const filenames = importAll(require.context('../../assets/products/pasticceria', false, /\.(png|jpe?g|svg)$/));

  return (
    <>
    <SiteNavbar/>
    <Container fluid>
        <Row className='row_arancini_style'>
            <Col md={12}>
                <h2>arancini</h2>
                <div className='riga_titolo'><span></span></div>
            </Col>
            <Col md={12} lg={4}>
              <div className='arancino_style'>
                <div>
                  <img src={ragu} alt="arancino_ragu" />
                </div>
                <div className='d-flex flex-column justify-content-center'>
                  <h5>ragu</h5>
                  <p>Ragù, piselli e mozzarella.</p>
                </div>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className='arancino_style'>
                <div>
                  <img src={prosciutto} alt="arancino_prosciutto" />
                </div>
                <div className='d-flex flex-column justify-content-center'>
                  <h5>prosciutto</h5>
                  <p>Prosciutto cotto e mozzarella.</p>
                </div>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className='arancino_style'>
                <div>
                  <img src={pistacchio} alt="arancino_pistacchio" />
                </div>
                <div className='d-flex flex-column justify-content-center'>
                  <h5>pistacchio</h5>
                  <p>Pesto di pistacchio e speck.</p>
                </div>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className='arancino_style'>
                <div>
                  <img src={salame} alt="arancino_salame" />
                </div>
                <div className='d-flex flex-column justify-content-center'>
                  <h5>salame</h5>
                  <p>Salame ungherese e mozzarella.</p>
                </div>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className='arancino_style'>
                <div>
                  <img src={melanzane} alt="arancino_melanzane" />
                </div>
                <div className='d-flex flex-column justify-content-center'>
                  <h5>melanzane</h5>
                  <p>Melanzane, salsa di pomodoro e grana.</p>
                </div>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className='arancino_style'>
                <div>
                  <img src={zucca} alt="arancino_zucca" />
                </div>
                <div className='d-flex flex-column justify-content-center'>
                  <h5>zucca</h5>
                  <p>Zucca e salsiccia.</p>
                </div>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className='arancino_style'>
                <div>
                  <img src={burger} alt="arancino_burger" />
                </div>
                <div className='d-flex flex-column justify-content-center'>
                  <h5>aranburger</h5>
                  <p>Carne, bacon, cheddar e salsa BBQ.</p>
                </div>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className='arancino_style'>
                <div>
                  <img src={pollo} alt="arancino_pollo" />
                </div>
                <div className='d-flex flex-column justify-content-center'>
                  <h5>aranchicken</h5>
                  <p>Pollo al curry e panatura cornflakes.</p>
                </div>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className='arancino_style'>
                <div>
                  <img src={borgo} alt="arancino_borgo" />
                </div>
                <div className='d-flex flex-column justify-content-center'>
                  <h5>arancino del borgo</h5>
                  <p>Ripieno del tortello d'erbetta.</p>
                </div>
              </div>
            </Col>
        </Row>
        <Row className='pt-4 pb-4'>
          <Col md={12}>
            <h2>dolci & gelati</h2>
            <div className='riga_titolo'><span></span></div>
            <h3 style={{textAlign:'center', fontSize:'18px'}}>Vieni in negozio a scoprire tutte le nostre proposte!</h3>
          </Col>
          <Col md={12}>
            <div className='d-flex flex-wrap justify-content-center align-items-center pt-3'>
              {filenames.map(filename => {
              return <img
              src={filename} alt={filename}
              style={{width:'200px', height:'200px', objectFit:'cover', borderRadius:'20%', margin:'5px'}}
              />
              })}
            </div>
          </Col>
        </Row>
    </Container>
    <SiteHomeFooter/>
    </>
  )
}