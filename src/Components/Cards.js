import React from "react";
import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";
import Carrito from "./carrito";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping }  from '@fortawesome/free-solid-svg-icons';


const URI = "http://localhost:8000/producto/";

const CompShowProd = () => {
  const [productos, setProducto] = useState([]);

  const [cartItems, setCartItems] = useState([]);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  //procedimiento para mostrar todo los productos
  const getProduct = async () => {
    try {
      const res = await axios.get(URI);
      setProducto(res.data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const DellItem = (item) => {
    // Realiza la venta y agrega el item a la lista de ventas
    setSales([...sales, item]);
    // Elimina el item del carrito
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const [panelOpen, setPanelOpen] = useState(false);

  const togglePanel = () => {
    setPanelOpen(!panelOpen);
  };

  return (
    <div className="container-fluid mt-0 mb-0 col mx-0 px-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse " >
          <ul className="list-unstyled ">
            <li className="float-right">
              <button className="nav-link btn btn-link" onClick={togglePanel}>
               <FontAwesomeIcon icon={faCartShopping} bounce size="xl"/>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className={`collapse mt-3 ${panelOpen ? "show" : ""}`}>
            <div className="card">
              <div className="card-body">
                <Carrito cartItems={cartItems} onSellClick={DellItem} />
              </div>
            </div>
          </div>

      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4" key={producto.id}>
            <Card
              key={producto.id}
              id={producto.id}
              title={producto.Nombre}
              image={producto.Imagen}
              precio={producto.Precio}
              onBuyClick={addToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompShowProd;
