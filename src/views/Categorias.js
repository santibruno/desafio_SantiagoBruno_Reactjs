import React, { useState, useEffect } from 'react'
import ListCategorias from '../components/ListCategorias';
import {getAllCategorias} from "../firebase"

const Categorias = () => {
    const [data, setData] = useState([]);
    const [err, setErr] = useState("");

    useEffect(()=>{
        getAllCategorias().then(snapshot=>{
            setData(snapshot.docs.map((documento)=>{
            return{
              id:documento.id,
              ...documento.data()
            }
          }))
        }).catch(() => setErr("Ocurrio un error"));
      },[])
    return (
        console.log(data),
        <div className="display-flex row bg-dark">
            {err ? <span>{err}</span> : <ListCategorias items={data} />}
        </div>
    )
}
export default Categorias;