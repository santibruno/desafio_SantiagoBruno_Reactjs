import CartContext, { useCartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  
  const { clearCart } = useCartContext();
  return (
    <CartContext.Consumer>
      {({ carrito: items }) => (
        <div>
          {items.length ? (
            items.map((item) => (
              <div>
                <CartItem
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                />
              </div>
            ))
          ) : (
            <h3>No Hay Resultados</h3>
          )}
        <button className="btn-warning" onClick={clearCart}>
            BORRAR TODO
        </button>
        </div>
      )}
    </CartContext.Consumer>
  );
};
export default Cart;
