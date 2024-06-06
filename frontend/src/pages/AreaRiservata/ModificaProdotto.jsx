import React from 'react'
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function InfoProdotto() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [prodotto, setProdotto] = useState();
    const [descrizione, setDescrizione] = useState();
    const [prezzo, setPrezzo] = useState();
    const [immagine, setImmagine] = useState(null);
    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const formData = new FormData();
    formData.append('immagine', immagine);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            //console.log(data);
        })
        .catch(error => console.log(error))
      },[id]);

      const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:3001/products/${id}`, {
            method: `PUT`,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                prodotto: prodotto,
                descrizione: descrizione,
                prezzo: prezzo,
            }),
          });
    
          if (response.ok) {
            alert('Prodotto modificato con successo!');
            window.location.reload();
          } else {
            alert('Errore modifica prodotto!');
          }
      };

      const handleImg = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:3001/products/${id}/img`, {
            method: `PATCH`,
            headers: {
              Authorization: `Bearer ${token}`
            },
            body: formData,
          });
    
          if (response.ok) {
            alert('Immagine modificata con successo!');
            window.location.reload();
          } else {
            alert('Modifica immagine fallita!');
          }
      };

      const handleDelete = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:3001/products/${id}`, {
            method: `DELETE`,
            headers: {
              Authorization: `Bearer ${token}`
            },
          });
    
          if (response.ok) {
            alert('Prodotto eliminato con successo!');
            navigate('/areariservata');
          } else {
            alert('Il prodotto non è stato eliminato!');
          }
      };

      const formatPrice = (price) => {
        const priceNumber = parseFloat(price);
        return priceNumber.toLocaleString('it-IT', { minimumFractionDigits: 2 });
    }

  return (
    <>
    <SiteNavbar/>
    <Container>
        <Row className='pt-4 pb-4'>
            <Col md={12}
            className='mb-4'>
                <h2>modifica o elimina</h2>
            </Col>
            
            <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <Card
            className='mb-3'
            style={{height:'auto'}}>
            <Card.Img
            variant="top"
            style={{objectFit:'cover', height:'200px'}}
            src={data.immagine} />
            <Card.Body>
              <Card.Title><h2 style={{fontSize:"25px"}}>{data.prodotto}</h2></Card.Title>
              <Card.Text>
              <p style={{fontSize:"14px"}}>
                {data.descrizione}
              </p>
              <p style={{fontSize:"14px"}}>
                Prezzo: {formatPrice(data.prezzo)}€
              </p>
              </Card.Text>
            </Card.Body>
            </Card>
            </Col>

            <Col xs={12} sm={12} md={6} lg={4} xl={4}
            className='ps-4 pe-4'>
            <Form onSubmit={handleSubmit}>

            <Form.Group controlId="formProdotto" className="mb-3">
                <Form.Label>Prodotto</Form.Label>
                <Form.Control type="text" placeholder="Prodotto" onChange={(e) => setProdotto(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formPrezzo" className="mb-3">
                <Form.Label>Prezzo</Form.Label>
                <Form.Control type="number" placeholder="Prezzo" step="any" min="1" max="99" maxLength="4" onChange={(e) => setPrezzo(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescrizione">
                <Form.Label>Descrizione</Form.Label>
                <Form.Control as="textarea" placeholder="Descrizione..." onChange={(e) => setDescrizione(e.target.value)}/>
            </Form.Group>

            <div className='d-flex justify-content-center mb-2'>
            <Button variant="warning" type="submit">
            Modifica informazioni
            </Button>
            </div>
            </Form>
            </Col>

            <Col xs={12} sm={12} md={6} lg={4} xl={4}
            className='ps-4 pe-4'>
            <Form onSubmit={handleImg}>
                <Form.Group controlId="formImmagine" className="mb-3">
                <Form.Label>Immagine</Form.Label>
                <Form.Control type="file"  onChange={(e) => setImmagine(e.target.files[0])}/>
                </Form.Group>
                <div className='d-flex justify-content-center'>
                <Button variant="warning" type="submit">
                Modifica immagine
                </Button>
                </div>
            </Form>
            <div className='d-flex justify-content-center'>
            <Button variant="danger" onClick={handleShow} className='mt-3'>
            Elimina prodotto
            </Button>
            </div>
            </Col>

            <Col md={12}
            className='d-flex justify-content-center align-items-center mt-3'>
            <Link to='/areariservata'>
            <Button
            style={{backgroundColor:'#3B2313', border:'none'}}>
            Torna indietro
            </Button>
            </Link>
            </Col>
        </Row>
    </Container>
    <SiteHomeFooter/>

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
    <Modal.Title style={{fontSize:'18px'}}>Vuoi eliminare definitivamente il prodotto?</Modal.Title>
    </Modal.Header>
    <Modal.Footer>
    <Button variant="danger" onClick={handleDelete}>
        Elimina
    </Button>
    </Modal.Footer>
    </Modal>
    </>
  )
}