import React from 'react'
import { Link } from "react-router-dom";

const Item = ({ id, name, image }) => {
    return (
        <div className="py-1 m-5 display-flex row border border-solid ">
            <img className="w-50 img-responsive" src={image} alt={name} />
            <div>
                <Link to={"../products/" + id}>{name}</Link>
            </div>

        </div>
    )
}

export default Item