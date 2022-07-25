import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Item from '../components/Item';

const FilterCategory = () => {
  let params = useParams();
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/" + params.id)
      .then((res) => res.json())
      .then((json) => {
        setData(json.products);

        console.log(json.products)
      })
      .catch(() => setErr(err));
  }, [params.id]);


  return (
    <div>{data.length ? (
        data.map((d) => <Item key={d.id} name={d.title} image={d.images[0]} id={d.id} />)
        ) : (
            <h3>No Hay Resultados</h3>
)}
    </div>
);
}

export default FilterCategory;