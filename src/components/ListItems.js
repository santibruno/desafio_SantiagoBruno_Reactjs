import React from 'react';
import Item from './Item';

const List = ({ items }) => {
    return (
        <div className="d-flex flex-column align-items-center text-center " >{items.length ? (
            items.map((item) => <Item key={item.id} name={item.title} image={item.images[0]} id={item.id} />)
            ) : (
                <h3>No Hay Resultados</h3>
    )}
        </div>
    );
};

export default List