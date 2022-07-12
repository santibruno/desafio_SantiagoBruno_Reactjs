import React, { useState } from "react";
import Item from "./Item";

//import Dropdown from "react-bootstrap/Dropdown";
/*<Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          Seleccionar Titulo
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */

const ItemList = ({ items }) => {  
  const [listLoading, setlistLoading] = useState(true);
  new Promise((resolve,reject) => {
    if (items){
      resolve(setTimeout(setlistLoading,2000,false));
    }else{
      reject(console.log("error"));
    }
  })
  
  return (
    <>
      {listLoading ? (
        <h2>CARGANDO...</h2>
      ) : (
        <>
          {items.map((el) => (
            <Item {...el} />
          ))}
        </>
      )}
    </>
  );
};
export default ItemList;
