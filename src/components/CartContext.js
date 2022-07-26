import React, { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addItems = ({ id, title, price, quantity }) => {    
    if (!isInCard(id)) {
      const _items = items.concat({ id, title, price, quantity });
      setItems(_items);
    }else{
      const index = items.findIndex(i => i.id == id)
      const _items=items.slice()
      _items[index].quantity=_items[index].quantity+quantity
      
      alert("el producto ya se encuentra agregado")
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
  const isInCard = (id ) => {
    if (items.find((i) => i.id == id)) {
      return true;
    } else {
      return false;
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
