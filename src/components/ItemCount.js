import {useState} from 'react';

const ItemCount = ({stock,initial,onAdd})=>{
    const [count, setCount]=useState(initial);
    const incremento = () =>{
        setCount(count+1);
    };
    const decremento =()=>{
        if (count >0)
        setCount(count -1)
    };
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={incremento}>Suma</button>
            <button onClick={decremento}>Resta</button>
            <button onClick={()=>{
                if (count>=stock){
                    onAdd(count)
                }else{
                    alert("No hay suficiente stock")
                }
            }}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount;