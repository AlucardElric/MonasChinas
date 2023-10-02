import React from "react";
import Cards from "./Cards";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Inicio() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <a className="navbar-brand" href="/">
            中国の猿
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#productos">
                  Productos
                </a>
              </li>

             
              <li className="nav-item">
                <a className="nav-link ms-auto" href="/CreateCliente">
                  Crear Usuario
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link ms-auto" href="/login">
                  Iniciar Sesion
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="container-fluid mt-0 mb-0 col mx-0 px-0 ">
        <h1 className="display-4">MonasChinas.com</h1>
        <p className="lead">Descubre nuestra amplia selección de figuras</p>
        <Carousel controls={false}>
          <div>
            <img src="/assets/banner6.PNG" alt="Imagen 1" />
          </div>
          <div>
            <img src="/assets/banner1.png" alt="Imagen 2" />
          </div>
          <div>
            <img src="/assets/banner3.png" alt="Imagen 3" />
          </div>
        </Carousel>
      </div>

      {/* Pie de página */}
      <footer className="bg-dark text-light text-center py-3">
        <div className="container" id="productos">
          <div>
            <Cards></Cards>
          </div>
          <p>&copy; monas chinas</p>
        </div>
      </footer>
    </div>
  );
}

export default Inicio;
