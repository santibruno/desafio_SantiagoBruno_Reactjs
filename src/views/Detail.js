import React,{ useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

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
            {data &&(
                <div>
            <img src={data.images[0]}/>
            <div>
                <h3>{data.title}</h3>
                <h5>{data.price}</h5>
            </div>
            
            <p>{data.description}</p>
            </div>
            )}
        </div>
    )
}

export default Detail