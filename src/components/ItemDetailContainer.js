import React from "react";

const ItemDetailContainer = ({ imagen, descr }) => {
  return (
    <div>
      <img src={imagen}></img>
      <p>{descr}</p>
    </div>
  );
};

export default ItemDetailContainer;
