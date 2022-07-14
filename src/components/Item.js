import React, { useState } from "react";

import ItemDetailContainer from "./ItemDetailContainer";

const getItem = ({ btnImg, btnDescr }) => {
  <ItemDetailContainer imagen={btnImg} descr={btnDescr} />;
};

const Item = ({ items }) => {
  const [listDetails, setlistDetails] = useState(true);
  setTimeout(() => {
    setlistDetails(false);
  }, 2000);
  return (
    <div className="display-flex row">
      {items.length ? (
        items.map((el) => (
          <div className="p-3 m-1 h3 card w-25 align-item-center" key={el.id}>
            {el.title}
            {listDetails ? (
              <h3>CARGANDO Detalles...</h3>
            ) : (
              <ItemDetailContainer
                imagen={el.images[0]}
                descr={el.description}
              />
            )}
            <button
              onClick={() => {
                //Esta linea de codigo no funciona y nose porque
                getItem(el.images[0], el.description);
              }}
            >
              Ver Detalles
            </button>

            <div id="imagenydescripcion"></div>
          </div>
        ))
      ) : (
        <h2>No Hay Resultados</h2>
      )}
    </div>
  );
};

export default Item;
