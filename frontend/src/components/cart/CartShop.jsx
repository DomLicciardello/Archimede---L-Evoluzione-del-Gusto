import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './style.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";

function CartShop() {
  const [show, setShow] = useState(false);
  const { cartItems, cartCount, incrementQuantity, decrementQuantity } = useContext(CartContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.prezzo * item.quantity, 0);
  };

  const formatPrice = (price) => {
    const priceNumber = parseFloat(price);
    return priceNumber.toLocaleString('it-IT', { minimumFractionDigits: 2 });
}

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
              <h6>Totale articoli: {cartCount}</h6>
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
                  style={{fontWeight:'500', marginLeft:'5px'}}>{formatPrice(item.prezzo)}€</span>
                  </div>
                  <div>
                  <Button className='px-2 py-0 mx-1' variant="success" style={{backgroundColor:'#558259', border:'none'}} onClick={() => incrementQuantity(item._id)}>+</Button>
                  <span
                  style={{fontWeight:'600', border:'solid black 1px', padding:'0px 4px 3px 4px'}}>x{item.quantity}</span>
                  <Button className='px-2 py-0 mx-1' variant="danger" style={{backgroundColor:'#FF4800', border:'none'}} onClick={() => decrementQuantity(item._id)}>-</Button>
                  </div>
                </ListGroup.Item>
                ))}
              </ListGroup>
              <div className="subtotal mt-3">
                <h5>Subtotale: {formatPrice(calculateSubtotal())}€</h5>
              </div>
              <Link to='/shop/sendorder'>
              <Button variant="dark" style={{backgroundColor:'#3B2313'}}>Procedi al pagamento</Button>
              </Link>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartShop;