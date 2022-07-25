import React, { useState, useEffect } from "react";
import List from "../components/ListItems";

const Home = () => {
  const [listLoading, setlistLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [err, setErr] = useState("");
  
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setResults(json.products);
        setTimeout(() => {
          setlistLoading(false);
        }, 2000);
      })
      .catch(() => setErr("Ocurrio un error"));
  }, []);
  if (listLoading) {
    return <span>CARGANDO...</span>; 

  }
  return (
    <div className="display-flex row">
      {err ? <span>{err}</span> : <List items={results} />}
    </div>
  );
};
export default Home;
