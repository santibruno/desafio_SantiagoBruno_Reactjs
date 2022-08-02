import React, { useState, useEffect } from "react";
import List from "../components/ListItems";
import { getProducts } from "../firebase";

const Home = () => {
  const [results, setResults] = useState([]);
  const [err, setErr] = useState("");
  console.log ("productos",results)

  useEffect(()=>{
    getProducts().then(snapshot=>{
      setResults(snapshot.docs.map((documento)=>{
        
        return{
          id:documento.id,
          ...documento.data()
        }
      }))
    }).catch(() => setErr("Ocurrio un error"));
  },[])
  /*useEffect(() => {
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
  */

  return (
    <div className="display-flex row">
      {err ? <span>{err}</span> : <List items={results} />}
    </div>
  );
};
export default Home;
