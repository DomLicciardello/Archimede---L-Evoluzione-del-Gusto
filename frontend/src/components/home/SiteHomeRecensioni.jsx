import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'
import feedback from '../../assets/recensioni/feedback.png'
import recensione1 from '../../assets/recensioni/recensione1.png'
import recensione2 from '../../assets/recensioni/recensione2.png'
import recensione3 from '../../assets/recensioni/recensione3.png'
import recensione4 from '../../assets/recensioni/recensione4.png'

export default function SiteHomeRecensioni() {
  return (
    <div className='home_recensioni_style'>
      <h2 style={{color:'white'}}>RECENSIONI</h2>
      <div className='riga_titolo'><span style={{border:'white solid 2px'}}></span></div>
        <Container>
        <Row className='home_recensioni_content_style'>
          <Col xs={12} lg={6} xl={3} className='recensione_style'>
            <div className='recensione_div_style'>
              <div className='recensione_logo_style'>
                <img src={recensione1} alt="avatar"/>
              </div>
              <div className='recensione_content_style'>
                <p style={{fontWeight:'bold'}}>Raffaella G.</p>
                <img src={feedback} alt="feedback" />
                <p style={{fontStyle:'oblique'}}>"Quando io e la mia famiglia vogliamo fare un tuffo culinariio in Sicilia, andiamo da Archimede, dove gli occhi si perdono nella vetrina piena di colori tra cassate e arancini di vari gusti, uno più buono dell'altro. Consiglio vivamente di farci un salto, vale davvero la pena!"</p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6} xl={3} className='recensione_style'>
          <div className='recensione_div_style'>
              <div className='recensione_logo_style'>
                <img src={recensione2} alt="avatar"/>
              </div>
              <div className='recensione_content_style'>
                <p style={{fontWeight:'bold'}}>Giada P.</p>
                <img src={feedback} alt="feedback" />
                <p style={{fontStyle:'oblique'}}>"Sono stata in questo posto diverse volte a colazione, che dire, le brioche sono buonissime, ho provato anche qualche dolcetto semifreddo mono porzione, fantastico anche quello, e personale gentile e simpatico. Hanno una vastissima quantità di arancini, ho provato quello con pistacchio e speck, favoloso."</p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6} xl={3} className='recensione_style'>
          <div className='recensione_div_style'>
              <div className='recensione_logo_style'>
                <img src={recensione3} alt="avatar"/>
              </div>
              <div className='recensione_content_style'>
                <p style={{fontWeight:'bold'}}>Barbara T.</p>
                <img src={feedback} alt="feedback" />
                <p style={{fontStyle:'oblique'}}>"Consiglio a tutti di provare questa esperienza di gusto! Splendida la torta che ho ordinato per domenica scorsa. Ottimi gli ingredienti, bellissima la decorazione. Semplicemente perfetta! Grazie mille allo staff! Non da ultima la gentilezza e la disponibilità! Continuate così!"</p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6} xl={3} className='recensione_style'>
          <div className='recensione_div_style'>
              <div className='recensione_logo_style'>
                <img src={recensione4} alt="avatar"/>
              </div>
              <div className='recensione_content_style'>
                <p style={{fontWeight:'bold'}}>Carlo D.</p>
                <img src={feedback} alt="feedback" />
                <p style={{fontStyle:'oblique'}}>"Finalmente una bellissima ed efficiente pasticceria a Fidenza, che offre tutte le prelibatezze della bellissima Sicilia. Offre anche degli ottimi arancini. Da non perdere cannoli e cassate... Da perdere la testa."</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}