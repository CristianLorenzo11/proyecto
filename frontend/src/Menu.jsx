// Menu.jsx
import React, { useEffect, useState } from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

export function Menu() {
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    const usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));
    if (usuarioLogueado) {
      setUsuario(usuarioLogueado);
    } else {
      window.location.href = "/";
    }
  }, []);

  const cerrarSesionHandler = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm" aria-label="Third navbar example">
        <div className="botones container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/principal"
                  className="nav-link"
                  activeClassName="active"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/producto"
                  className="nav-link"
                  activeClassName="active"
                >
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/proveedor"
                  className="nav-link"
                  activeClassName="active"
                >
                  Proveedores
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/marca"
                  className="nav-link"
                  activeClassName="active"
                >
                  Marcas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/presentacion"
                  className="nav-link"
                  activeClassName="active"
                >
                  Presentación
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/tipo_producto"
                  className="nav-link"
                  activeClassName="active"
                >
                  Tipo de Productos
                </NavLink>
              </li>
            </ul>
            <button className="cerrar" onClick={cerrarSesionHandler}>
              Cerrar Sesión
            </button>
          </div>
        </div>
      </nav>
      <div className="usuario-conectado">
        <span className="nombre-usuario">Usuario: {usuario.user}</span>
      </div>
    </>
  );
}
