import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons';


const URI = "http://localhost:8000/producto/";

const CompShowProd = () => {
  const [productos, setProducto] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  //procedimiento para mostrar todo los productos
  const getProduct = async () => {
    const res = await axios.get(URI);
    setProducto(res.data);
  };

  const DelProduct = async (id) => {
    await axios.delete(`${URI}${id}`);
    getProduct();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
            <Link to="/create" className="btn btn-primary mt-2 mb-2"><FontAwesomeIcon icon={faPlus} beat /></Link>
          <table className="table table-dark table-hover">
            <thead className="table-primary">
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((producto) =>(
                    <tr key={producto.id}>
                        <td>{producto.Nombre}</td>
                        <td>{producto.Precio}</td>
                        <td>
                            <Link to={`/edit/${producto.id}`} className="btn btn-info"><FontAwesomeIcon icon={faPenToSquare}  /></Link>
                            <button onClick={ ()=> DelProduct(producto.id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button>
                        </td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompShowProd;
