import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ListCategorias from '../components/ListCategorias';

const Categorias = () => {
    let params = useParams();
    const [data, setData] = useState([]);
    const [err, setErr] = useState("");
    const [listLoading, setlistLoading] = useState(true);


    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setTimeout(() => {
                    setlistLoading(false);
                }, 2000);
            })
            .catch(() => setErr("No hay Categorias Cargadas"));
    }, [params.id]);
    if (listLoading) {
        return <span >CARGANDO...</span>;

    }
    return (
        console.log(data),
        <div className="display-flex row bg-dark">
            {err ? <span>{err}</span> : <ListCategorias items={data} />}
        </div>
    )
}
export default Categorias;