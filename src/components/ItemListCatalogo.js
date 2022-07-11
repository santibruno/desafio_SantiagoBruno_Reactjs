import React, { useState, useEffect } from "react";
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
  const [listLoading, setlistLoading] = useState([]);
  useEffect(() => {
    setTimeout(setlistLoading, 2000, false);
  }, []);
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
