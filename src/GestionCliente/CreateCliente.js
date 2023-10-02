import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/cliente/";

const ComCreateCliente = () => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // procedimiento guardar
  const store = async (e) => {
    e.preventDefault(); // sirve para que la pagina no se recargue al hacer un evento
    await axios.post(URI, { Nombre: nombre, Password: password, Tipo:'Cliente'});
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Crear Usuario</div>
            <div className="card-body">
              <form onSubmit={store}>
                <div className="form-group">
                  <label htmlFor="username">Nombre de usuario:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Crear Usuario</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComCreateCliente;
