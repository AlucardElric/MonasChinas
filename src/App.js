import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./Components/inicio";
import Carrito from "./Components/carrito";
import ComCreateCliente from "./GestionCliente/CreateCliente";
import Login from "./GestionCliente/login";


//importar los componentes
import CompShowProd from "./GestionProducto/ShowProducto";
import CompCreateProducto from "./GestionProducto/CreateProducto";
import CompEditProduct from "./GestionProducto/EditProducto";
import Diseima from "./GestionProducto/GestionImage";
import InicioAdmin from "./Components/InicioAdmin";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/imagen" element={<Diseima />}></Route>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/InicioAdmin" element={<InicioAdmin />}></Route>
          <Route path="/gestionP" element={<CompShowProd />}></Route>
          <Route path="/create" element={<CompCreateProducto />}></Route>
          <Route path="/edit/:id" element={<CompEditProduct />}></Route>
          <Route path="/carrito" element={<Carrito />}></Route>
          <Route path="/CreateCliente" element={<ComCreateCliente />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
