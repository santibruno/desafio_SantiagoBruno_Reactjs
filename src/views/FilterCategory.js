import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import { getProductsByCategoryId } from "../firebase";

const FilterCategory = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    getProductsByCategoryId(params.id).then((category) => {
      setData(
        category.docs.map((documento) => {
          
        console.log(documento.data());
          return {
            id: documento.id,
            ...documento.data(),
          };
        })
      );
    });
  }, [params.id]);

  return (
    <div>
      {data.length ? (
        data.map((d) => (
          <Item key={d.id} name={d.title} image={d.image} id={d.id} />
        ))
      ) : (
        <h3>No Hay Resultados</h3>
      )}
    </div>
  );
};

export default FilterCategory;
