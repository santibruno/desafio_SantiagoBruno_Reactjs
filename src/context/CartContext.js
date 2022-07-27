import React, { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItems = ({ id, title, price, quantity }) => {
    if (!isInCard(id)) {
      const _items = items.concat({ id, title, price, quantity });
      setItems(_items);
    } else {
      const index = items.findIndex((i) => i.id == id);

      const _items = items.slice();

      _items[index].quantity = _items[index].quantity + quantity;

      alert("el producto ya se encuentra agregado");
      setItems(_items);
    }
  };

  const removeItem = (id) => {
    const _items = items.filter((el) => el.id !== id);
    setItems(_items);
  };
  const clearCart = () => {
    setItems([]);
  };
  const isInCard = (id) => {
    if (items.find((i) => i.id == id)) {
      return true;
    } else {
      return false;
    }
  };

  const sumarCart = () => {
    if (items.length === 1) {
      return items[0].quantity;
    }
    {
      const _items = items.map((item) => item.quantity).reduce((a, b) => a + b);
      return _items;
    }
  };
  const priceFinal = () => {
    if (items.length === 1) {
      return items[0].price * items[0].quantity;
    }
    {
      const cant = items.map((item) => item.quantity);
      const prices = items.map((item) => item.price);
      const _items = cant.map((i,index) => cant[index] * prices[index]).reduce((a,b)=>a+b);      
      return _items;
    }
  };
  return (
    <CartContext.Provider
      value={{
        carrito: items,
        addItems,
        removeItem,
        clearCart,
        isInCard,
        sumarCart,
        priceFinal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const CartContextProvider = useContext(CartContext);
  return CartContextProvider;
};

export default CartContext;
