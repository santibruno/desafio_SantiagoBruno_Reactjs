import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Carrousel from '../components/Carrousel';

const Detail = () => {
    let params = useParams();
    const [data, setData] = useState();
    const [err, setErr] = useState("");

    console.log(params)

    useEffect(() => {
        fetch("https://dummyjson.com/products/" + params.id)
            .then((res) => res.json())
            .then((json) => {
                setData(json);

            })
            .catch(() => setErr(err));
    }, [params.id]);

    return (
        <div>
            {data && (
                <div>
                    <div className='d-flex justify-content-center'>
                        <Carrousel items={data.images} />
                    </div>
                    <div className='d-flex justify-content-center '>
                        <h3 className='m-1 p-2 border border-primary rounded'>{data.title}</h3>
                        
                        <h4 className='m-1 py-2 px-5 h3 border border-dark rounded'>${data.price}</h4>
                    </div>
                    <div className='d-flex justify-content-center h5'>
                    <p>{data.description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Detail