import { useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(0);
    const incremento = () => {
        if (count < stock) {

            setCount(count + 1);
        }
    };
    const decremento = () => {
        if (count > 1)
            setCount(count - 1)
    };
    return (
        <>
            <h2>{count}</h2>
            <button className='font-weight-bold btn btn-info mx-1' id='incremento' onClick={incremento}>+</button>
            <button className='font-weight-bold btn btn-info mx-1' id='decremento' onClick={decremento}>-</button>
            <p>El stock es de: {stock}</p>
            <button className='btn btn-info mx-1' onClick={() => {
                if (count <= stock && count > 0) {
                    onAdd(count)
                }
            }}>
                Agregar al carrito
            </button>
        </>
    )
}
export default ItemCount;