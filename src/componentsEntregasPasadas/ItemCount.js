import {useState} from 'react';

const ItemCount = ({stock,initial,onAdd})=>{
    const [count, setCount]=useState(initial);
    const incremento = () =>{
        if (count < stock) {

            setCount(count+1);
        }
    };
    const decremento =()=>{
        if (count >1)
        setCount(count -1)
    };
    return(
        <div>
            <h2>{count}</h2>
            <button id='incremento' onClick={incremento}>Suma</button>
            <button id='decremento' onClick={decremento}>Resta</button>
            <button onClick={()=>{
                if (count<=stock){
                    onAdd(count);
                }
            }}>
                Agregar al carrito
            </button>
        </div>
    )
}
export default ItemCount;