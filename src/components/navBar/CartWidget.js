import React from "react";
import { Link } from "react-router-dom";
import CartContext,{useCartContext} from "../../context/CartContext";
const CartWidget=()=>{
    const {sumarCart,priceFinal}=useCartContext();
    return(
        <CartContext.Consumer>
        {({ carrito: items })=>(
        <Link className="text-white d-flex" to={"/cart"}>
            <button className="btn btn-outline-success ms-auto">            
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                <div className="badge px-1"> {items.length ? (sumarCart()): 0}</div>
                
            </button>
            <div className="p-2 text-dark">{items.length ? "$"+(priceFinal()): ""}</div>
                    
        </Link>
        )}
        </CartContext.Consumer>
    )
    
}
export default CartWidget;