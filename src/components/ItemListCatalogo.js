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

const ItemList = () => {
  const [listLoading, setlistLoading] = useState(true);
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=2")
      .then((res) => res.json())
      .then((json) => {
        setResults(json.products);
        setTimeout(() => {
          setlistLoading(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="display-flex row">
      {listLoading ? <h2>CARGANDO...</h2> : <Item items={results} />}
    </div>
  );
};
export default ItemList;
