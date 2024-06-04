import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function PrenotaTorta() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{backgroundColor:'#558259', border: 'none'}} onClick={handleShow}>
        Prenota una torta
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Prenotazione torta:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
      <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control type="email" placeholder="Email" required="required"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCel">
          <Form.Label>Cellulare*</Form.Label>
          <Form.Control type="tel" placeholder="Cellulare" maxLength="10" required="required"/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridName">
        <Form.Label>Nome*</Form.Label>
        <Form.Control placeholder="Nome" required="required"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridSurname">
        <Form.Label>Cognome*</Form.Label>
        <Form.Control placeholder="Cognome" required="required"/>
      </Form.Group>

        <Form.Group className="mb-3" controlId="formGridGusti">
          <Form.Label>Gusti*</Form.Label>
          <Form.Select defaultValue="Scegli...">
            <option>Scegli...</option>
            <option>Crema</option>
            <option>Cioccolato</option>
            <option>Pistacchio</option>
            <option>Ricotta</option>
            <option>Ricotta al Pistacchio</option>
            <option>Crema e Cioccolato</option>
            <option>Cioccolato e Pistacchio</option>
            <option>Ricotta e Cioccolato</option>
            <option>Ricotta al Pistacchio e Cioccolato</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPeso">
          <Form.Label>Peso*</Form.Label>
          <Form.Select defaultValue="Scegli...">
            <option>Scegli...</option>
            <option>1kg circa - 4/8 porzioni</option>
            <option>1,5kg circa - 6/12 porzioni</option>
            <option>2kg circa - 8/16 porzioni</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridText">
        <Form.Label>Scritta</Form.Label>
        <Form.Control placeholder="Es: Tanti Auguri Mario" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Altro</Form.Label>
        <Form.Control placeholder="Aggiungi altri dettagli alla prenotazione..." />
        </Form.Group>

      <p>* campi obbligatori</p>
      <p>Riceverai un'email di conferma entro 1-2 giorni lavorativi. Le prenotazioni con meno di 48h di anticipo non riceveranno conferma. Se hai prenotato con oltre 48h di anticipo e non ricevi alcuna mail di conferma contattaci al 3895380724.</p>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Privacy" required="required"/>
      </Form.Group>

      <Button className='me-2' variant="primary" type="submit">
        Prenota
      </Button>
      <Button variant="danger" onClick={handleClose}>
        Annulla
      </Button>
    </Form>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default PrenotaTorta;