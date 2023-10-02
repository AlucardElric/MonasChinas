import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/cliente/";

function Login() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${URI}${nombre}`);
      const producto = response.data;
      if (response.data) {
        if (producto.Password === password) {
            if (producto.Tipo === 'Admin') {
              navigate("/InicioAdmin");
            } else {
              navigate("/Inicio");
            }

        } else {
          alert('Esa no es la contreseña e-e ')
        }
      } else {
        alert('Ese usuario no existe mi negro, ta loco')
      }
    } catch (error) {
      console.error('Error al buscar el producto:', error);
    }
    // Aquí puedes agregar la lógica de autenticación
    console.log('Nombre de usuario:',nombre);
    console.log('Contraseña:',password);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Iniciar sesión</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;