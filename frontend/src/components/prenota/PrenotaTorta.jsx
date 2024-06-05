import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function PrenotaTorta() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    cellulare: '',
    nome: '',
    cognome: '',
    data: '',
    ora: '',
    gusti: '',
    peso: '',
    scritta: '',
    altro: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/inviaemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Prenotazione inviata con successo!');
        handleClose();
      } else {
        const errorText = await response.text();
        console.error('Errore:', errorText);
        alert('Errore durante la prenotazione!');
      }
    } catch (error) {
      console.error('Errore:', error);
      alert('Errore durante la prenotazione!');
    }
  };

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
        
      <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="email">
          <Form.Label>Email*</Form.Label>
          <Form.Control type="email" placeholder="Email" required="required" onChange={handleChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="cellulare">
          <Form.Label>Cellulare*</Form.Label>
          <Form.Control type="tel" placeholder="Cellulare" maxLength="10" required="required" onChange={handleChange}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="nome">
        <Form.Label>Nome*</Form.Label>
        <Form.Control placeholder="Nome" required="required" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="cognome">
        <Form.Label>Cognome*</Form.Label>
        <Form.Control placeholder="Cognome" required="required" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="data">
        <Form.Label>Data ritiro*</Form.Label>
        <Form.Control type="date" required="required" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="ora">
        <Form.Label>Ora ritiro*</Form.Label>
        <Form.Control placeholder="00:00" required="required" onChange={handleChange}/>
      </Form.Group>

        <Form.Group className="mb-3" controlId="gusti">
          <Form.Label>Gusti*</Form.Label>
          <Form.Select defaultValue="Scegli..." required="required" onChange={handleChange}>
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

        <Form.Group className="mb-3" controlId="peso">
          <Form.Label>Peso*</Form.Label>
          <Form.Select defaultValue="Scegli..." required="required" onChange={handleChange}>
            <option>Scegli...</option>
            <option>1kg circa - 4/8 porzioni</option>
            <option>1,5kg circa - 6/12 porzioni</option>
            <option>2kg circa - 8/16 porzioni</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="scritta">
        <Form.Label>Scritta</Form.Label>
        <Form.Control placeholder="Es: Auguri Mario" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="altro">
        <Form.Label>Altro</Form.Label>
        <Form.Control placeholder="Aggiungi altri dettagli alla prenotazione..." onChange={handleChange}/>
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