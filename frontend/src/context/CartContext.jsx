import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(item => item._id === product._id);
      if (itemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const incrementQuantity = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map(item => {
        if (item._id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return updatedItems;
    });
  };

  const decrementQuantity = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map(item => {
        if (item._id === productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter(item => item.quantity > 0);
      return updatedItems;
    });
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, incrementQuantity, decrementQuantity, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};