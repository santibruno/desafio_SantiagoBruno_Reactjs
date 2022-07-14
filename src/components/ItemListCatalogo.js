import React,{ useState, useEffect } from "react";
import Item from "./Item";


import ItemDetailContainer from "./ItemDetailContainer";


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
  
  const [listDetails, setlistDetails] = useState(true);
  const [results, setResults] = useState([]);
  useEffect(()=>{
    fetch('https://dummyjson.com/products?limit=2')
    .then(res => res.json())
    .then(json => {
      setResults(json.products)
      setTimeout(() => {
        setlistLoading(false)
        setTimeout(() => {
          setlistDetails(false)
        }, 2000);
      }, 2000);
      
    }).catch(err=>console.log(err))
},[]);

  return (
    <div className="display-flex row">
      {listLoading ? (
        <h2>CARGANDO...</h2>
      ) : (
            
          <Item items={results}/>              
        
      )}
      {listDetails ? (
        <h3>CARGANDO Detalles...</h3>
      ) : (
          
          results.map(elem=>
            <ItemDetailContainer imagen={elem.images[0]} descr={elem.description} /> )            
      )}

    </div>
  );
};
export default ItemList;
