import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import ItemCount from "../components/ItemCount";
import { useCartContext } from "../context/CartContext";

const Detail = () => {
  let params = useParams();
  const [data, setData] = useState();
  const [err, setErr] = useState("");
  const [cart, setCart] = useState(true);
  const [msjStock, setMsjStock] = useState("");

  const { addItems } = useCartContext();

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + params.id)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch(() => setErr(err));
  }, [params.id]);

  const onAdd = (c) => {
    addItems({
      id: data.id,
      title: data.title,
      price: data.price,
      quantity: c,
    });

    setCart(false);
    return setMsjStock(c);
  };
  return (
    <div>
      {data && (
        <div className="">
          <div className="d-flex justify-content-center">
            <Carrousel items={data.images} />
          </div>
          <div className="d-flex justify-content-center ">
            <h3 className="m-1 p-2 border border-primary rounded">
              {data.title}
            </h3>

            <h4 className="m-1 py-2 px-5 h3 border border-dark rounded">
              ${data.price}
            </h4>
          </div>
          <div className="d-flex justify-content-center ">
            <div className="m-1 p-2 border border-dark">
              {cart ? (
                <ItemCount stock={data.stock} onAdd={(c) => onAdd(c)} />
              ) : (
                <div>
                  <h3>
                    {data.title} fue ingresado {msjStock} veces al carrito
                  </h3>
                  <button className="btn btn-primary">
                    <Link className="text-white" to={"/cart"}>
                      Ir al carrito
                    </Link>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center h5">
            <p>{data.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
