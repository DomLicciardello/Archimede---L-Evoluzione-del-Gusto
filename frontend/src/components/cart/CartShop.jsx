import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './style.css'

function CartShop() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" onClick={handleShow} className='cart_style'>
      <ion-icon name="cart-outline"></ion-icon>
      <span>0</span>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrello</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Lista dei prodotti.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartShop;