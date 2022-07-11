import React from "react";
//import ItemCount from './ItemCount';
import ItemList from './ItemListCatalogo';
import productos from '../products.json';
//<ItemCount stock={5} initial={1} onAdd={(n)=>alert (`Se agregaron ${n} Unidades al Carrito`)}/>
const ItemListContainer=({})=>{
    return(
        <div>
            <ItemList items={productos}/>
        </div>
    )
};
export default ItemListContainer;