import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/producto/";

const CompCreateProducto = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [genero, setGenero] = useState("");
  const navigate = useNavigate();



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
    })
      .catch((err) => {
        console.error(err); 
      });
    };



  // procedimiento guardar
  const store = async (e) => {
    e.preventDefault(); // sirve para que la pagina no se recargue al hacer un evento
    await axios.post(URI, { Nombre: nombre, Precio: precio, Imagen: imagen, Genero: genero});
    navigate("/");
  };

  return (
    <div>
      <h3>Create Product</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text" 
            className='form-control'
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            type="text" 
            className='form-control'
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


        <button type="submit" className="btn btn-primary">Store</button>
      </form>
    </div>
  );
};

export default CompCreateProducto;
