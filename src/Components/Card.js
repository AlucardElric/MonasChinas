import React from "react";


export default function Card({ id, title, image, precio, onBuyClick  }) {


  return (
    <div className="card text-center bg-dark mb-3 mt-3">
      <div className="card-body text-light">
        <img src={image} alt="" className="card-img-top" />
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary text-light">Precio: ${precio}</p>
        <button onClick={() => onBuyClick({ id, title, image, precio })} className="btn btn-outline-secondary rounded-0">
          añadir al carrito
        </button>
      </div>
    </div>
  );
}
