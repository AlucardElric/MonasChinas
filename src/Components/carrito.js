import React from "react";

export default function Carrito({ cartItems, onSellClick }) {
  const Venta = () => {
    const enlaceExterno = "https://youtu.be/mCdA4bJAGGk";
    window.location.href = enlaceExterno;
  };

  const total = cartItems.reduce((acc, producto) => acc + producto.precio, 0);

  return (
    <div className="cart">
      <ul className="list-group ">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="container-fluid mt-0 mb-0 col mx-0 px-0">
              {item.title}
            </span>
            <span className="container-fluid mt-0 mb-0 col mx-0 px-0">
              ${item.precio}
            </span>
            <button
              className="btn btn-danger"
              onClick={() => onSellClick(item)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <div>
        <ul className="ul-row">
          <li className="li-row">
            <span>Total ${total.toFixed(2)}</span>
          </li>
        </ul>
      </div>

      {cartItems.length > 0 && (
        <button className="btn btn-danger" onClick={Venta}>
          Comprar
        </button>
      )}
    </div>
  );
}
