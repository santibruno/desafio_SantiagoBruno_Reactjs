import React from 'react'
import { Link } from "react-router-dom";

const Item = ({ id, name, image }) => {
    return (
        <div className="py-1 m-5 d-flex flex-column border w-50 ">
            <img className=" img-responsive" src={image} alt={name} />
            <div>
                <Link to={"../products/" + id}>{name}</Link>
            </div>

        </div>
    )
}

export default Item