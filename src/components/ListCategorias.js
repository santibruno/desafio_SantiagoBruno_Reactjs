import React from 'react';
import { Link } from "react-router-dom"; 

const ListCategorias = ({ items }) => {
    return (
        <div className='py-1 mx-auto my-5 display-flex row text-align-center w-75'>{items.length ? (
            items.map((item) =>  (
               <div className='border border-solid w-25'>
                   <Link to={"../products/category/" + item}>{item}</Link>
               </div>
            )

            )
        ) : (
            <h3>No Hay Resultados</h3>
        )}
        </div>
    );
};
export default ListCategorias;