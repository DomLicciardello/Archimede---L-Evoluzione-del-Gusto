import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './style.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from '../../context/CartContext';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

function CartShop() {
  const [show, setShow] = useState(false);
  const { cartItems, cartCount, incrementQuantity, decrementQuantity } = useContext(CartContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.prezzo * item.quantity, 0);
  };

  return (
    <>
      <Button variant="link" onClick={handleShow} className='cart_style'>
      <ion-icon name="cart-outline"></ion-icon>
      <span>{cartCount}</span>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Il tuo carrello:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {cartItems.length === 0 ? (
            <p>Il carrello è vuoto.</p>
          ) : (
            <>
              <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item
                key={item._id}
                className='d-flex justify-content-between align-items-center'>
                  <div>
                  <img src={item.immagine} alt="img_prodotto" className='img_product_card'/>
                  <span
                  style={{fontWeight:'700', marginLeft:'10px'}}>{item.prodotto}</span>
                  <span
                  style={{fontWeight:'500', marginLeft:'5px'}}>{item.prezzo}€</span>
                  </div>
                  <div>
                  <Button className='px-2 py-0 mx-1' variant="success" onClick={() => incrementQuantity(item._id)}>+</Button>
                  <span
                  style={{fontWeight:'600', border:'solid black 1px', padding:'0px 3px 3px 3px'}}>x{item.quantity}</span>
                  <Button className='px-2 py-0 mx-1' variant="danger" onClick={() => decrementQuantity(item._id)}>-</Button>
                  </div>
                </ListGroup.Item>
                ))}
              </ListGroup>
              <div className="subtotal mt-3">
                <h6>Totale articoli: {cartCount}</h6>
                <h5>Subtotale: {calculateSubtotal()}€</h5>
              </div>
              <Button variant="dark" onClick={() => alert('Procedi al pagamento')}>Procedi al pagamento</Button>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartShop;