import React from 'react'
import SiteNavbar from '../../components/navbar/SiteNavbar';
import SiteHomeFooter from '../../components/home/SiteHomeFooter';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AggiungiProdotto() {
    const [prodotto, setProdotto] = useState();
    const [descrizione, setDescrizione] = useState();
    const [prezzo, setPrezzo] = useState();
    const [immagine, setImmagine] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:3001/products", {
            method: `POST`,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                prodotto: prodotto,
                descrizione: descrizione,
                prezzo: prezzo,
                immagine:
                  "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg",
            }),
          });
    
          if (!response.ok) {
            throw new Error("Aggiunta prodotto fallita!");
          }

          if (immagine) {
            const { _id } = await response.json();
            await uploadImg(_id, immagine);
            navigate("/areariservata");
          }

        } catch (error) {
          alert("Aggiunta prodotto fallita: ", error);
        }
      };
    
      const uploadImg = async (productId, imgFile) => {
        try {
          const imgData = new FormData();
          imgData.append("immagine", imgFile);
    
          const response = await fetch(`http://localhost:3001/products/${productId}/img`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`
              },
            body: imgData,
          });
    
          if (!response.ok) {
            throw new Error("Caricamento immagine fallito!");
          }
    
          const { immagine } = await response.json();
          alert("Il nuovo prodotto è stato aggiunto allo shop!");
        } catch (error) {
          console.error("Errore caricamento immagine:", error);
        }
      };

  return (
    <>
    <SiteNavbar></SiteNavbar>
    <div>
        <h2>aggiungi prodotto</h2>
    </div>
    <div>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formImmagine" className="mb-3">
        <Form.Label>Immagine</Form.Label>
        <Form.Control type="file"  onChange={(e) => setImmagine(e.target.files[0])}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formProdotto" className="mb-3">
          <Form.Label>Prodotto</Form.Label>
          <Form.Control type="text" placeholder="Prodotto" onChange={(e) => setProdotto(e.target.value)}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formPrezzo" className="mb-3">
        <Form.Label>Prezzo</Form.Label>
        <Form.Control type="number" placeholder="Prezzo" onChange={(e) => setPrezzo(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescrizione">
        <Form.Label>Descrizione</Form.Label>
        <Form.Control as="textarea" placeholder="Descrizione..." onChange={(e) => setDescrizione(e.target.value)}/>
      </Form.Group>

      <Button variant="dark" type="submit">
        Aggiungi
      </Button>
    </Form>
    </div>
    <SiteHomeFooter></SiteHomeFooter>
    </>
  )
}