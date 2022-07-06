import React from "react";
import ItemCount from './ItemCount';

const ItemListContainer=({greeting})=>{
    return(
        <div>
            {greeting}
            <ItemCount stock={1} initial={0} onAdd={(n)=>alert (`Se agregaron ${n} al stock del producto`)}/>
        </div>
    )
};
export default ItemListContainer;