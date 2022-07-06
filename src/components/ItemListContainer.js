import React from "react";
import ItemCount from './ItemCount';

const ItemListContainer=({greeting})=>{
    return(
        <div>
            {greeting}
            <ItemCount stock={5} initial={1} onAdd={(n)=>alert (`Se agregaron ${n} Unidades al Carrito`)}/>
        </div>
    )
};
export default ItemListContainer;