import React from 'react'
import CartContext, {useCartContext} from "../components/CartContext";


const CartItem = ({ id, title, price, quantity  }) => {
    const { removeItem } = useCartContext(CartContext)
    const borrar = () => {
        removeItem(id)
    }

    return (
        <div>
        <label className="d-flex list-group-item">
          <div className="px-1 w-25">
            <span>Producto: {title}</span>
          </div>
          <div className="px-1 w-25">
            <span>Cantidad: {quantity}</span>
          </div>
          <div className="px-1 w-25">
            <span>Precio: {price}</span>
          </div>
          <div className="px-1 w-25">
            <span>Precio Final: {price*quantity}</span>
          </div>
          <button className="ms-auto btn-close" type="button" onClick={borrar}></button>
        </label>

      </div>
    )
}

export default CartItem;