import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';
import ricotta from '../../assets/ricotta.jpg'

export default function ChiSiamo() {
  return (
    <>
    <SiteNavbar/>
    <Container fluid>
        <Row>
            <Col sm={12} md={12} lg={6}>
                <h2 className='mt-5'>chi siamo</h2>
                <div className='testo_chisiamo'>
                    <h6>Prima di tutto: perché Archimede?</h6>
                    <p>Il famoso matematico, fisico e inventore nacque a Siracusa, la nostra città d'origine.</p>
                    <h6>Chi siamo noi?</h6>
                    <p>Noi siamo una famiglia siciliana che dal 1989 coltiva la passione per la pasticceria e la rosticceria siciliana. Da 35 anni coltiviamo la passione per questo mestiere, che ci ha portato nel tempo a perfezione le antiche ricette della tradizione.</p>
                    <h6>Perché "L'Evoluzione del Gusto"?</h6>
                    <p>Pur rispettando le ricette della tradizione ci siamo spinti oltre, da "inventori", come Archimede, abbiamo unito i gusti più ricercati dalle persone al giorno d'oggi e abbiamo fatto "evolvere" i nostri prodotti proponendo delle nostre invenzioni uniche, come l'AranBurger o l'AranChicken.</p>
                    <h6>Perché Fidenza?</h6>
                    <p>Quando abbiamo deciso di trasferirci in Emilia non abbiamo avuto dubbi, con Fidenza è stato amore a prima vista.</p>
                    <h6>Quindi: cos'è Archimede?</h6>
                    <p>"Archimede - L'Evoluzione del Gusto" è l'idea di portare la vera Sicilia a Fidenza. L'idea di proporre il meglio della pasticceria siciliana, con cannoli, cassate e cassatine preparate con la ricotta di pecora della provincia di Enna. L'idea di proporre il nostro arancino in diversi gusti, percorrendo i sapori statunitensi, i sapori asiatici e i sapori... Emiliani! In questi anni infatti ci siamo appassionati alla cucina emiliana, e abbiamo deciso di dedicare a Fidenza un arancino: l'Arancino del Borgo, con il ripieno del tortello d'erbetta, fedele alla tradizione emiliana. Vieni a trovarci per gustare di persona le nostre ricette, e scopri in negozio anche tanti altri prodotti siciliani.</p>
                </div>
            </Col>
            <Col sm={12} md={12} lg={6}
            className='chisiamo_div_dx'
            style={{backgroundImage: `url(${ricotta})`, backgroundSize:"cover", backgroundPosition:"center"}}>
            </Col>
        </Row>
    </Container>
    <SiteHomeFooter/>
    </>
  )
}
