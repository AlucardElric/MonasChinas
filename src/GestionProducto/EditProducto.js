import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './editar.css';



const URI = "http://localhost:8000/producto/";

const CompEditProduct = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [genero, setGenero] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const [imagen, setImagen] = useState("");

  const selecteHandler = (e) => {
    setImagen(e.target.files[0]);
  };

  const sendHandler = (e) => {
    if (!imagen) {
      alert("debes cargar un archivo huevon");
      return;
    }

    const formdata = new FormData();
    formdata.append("image", imagen);

    fetch('http://localhost:8000/producto/images/post', {
      method: "POST",
      body: formdata,
    })
    .then(response => response.text()) // Convertir la respuesta a texto
    .then(filename => {
      setImagen('http://localhost:8000'.concat('/').concat(filename));
      console.log(imagen)
    })
      .catch((err) => {
        console.error(err); 
      });

    //document.getElementById('fileInput').value = null // resetear el input
    
  };


  // procedimiento para actualizar
  const update = async (e) => {
    e.preventDefault();
    if (!imagen) {
      await axios.put(URI + id, {
        Nombre: nombre,
        Precio: precio,
        Genero: genero
      });
    }else{
      await axios.put(URI + id, {
        Nombre: nombre,
        Precio: precio,
        Genero: genero,
        Imagen: imagen
      });
    }
    
    navigate("/");
  };

  const getProductoId = async () => {
    const res = await axios.get(URI + id);
    setNombre(res.data.Nombre);
    setPrecio(res.data.Precio);
    setGenero(res.data.Genero);
    setImagen(res.data.Imagen);
  };

  useEffect(() => {
    getProductoId();
  }, []);

  return (
<div className="container mt-5">
  <div>
    <img
      src={imagen}
      alt="ImagenProducto"
      className="small-image"
    />
  </div>
  <h3>Edit Product</h3>
  <form onSubmit={update}>
    <div className="mb-3">
      <label htmlFor="nombre" className="form-label">Nombre</label>
      <input
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        type="text"
        className="form-control"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="precio" className="form-label">Precio</label>
      <input
        id="precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        type="text"
        className="form-control"
      />
    </div>


    <div className="mb-3">
          <label className="form-label">Genero</label>
          <input
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            type="text" 
            className='form-control'
            />
        </div>

    
    <div className="mb-3">
      <div className="card p-3">
        <div className="row">
          <div className="col-10">
            <input
              id="fileInput"
              onChange={selecteHandler}
              className="form-control"
              type="file"
            />
          </div>
          <div className="col-2">
            <button
              onClick={sendHandler}
              type="button"
              className="btn btn-primary col-12"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>

    <button type="submit" className="btn btn-primary">
      Update
    </button>
  </form>
</div>

  );
};

export default CompEditProduct;
