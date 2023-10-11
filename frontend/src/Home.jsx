import React from "react";
import { Link } from "react-router-dom"; // Agrega esta importación

export function Home() {
  return (
    <>
      <div>
        <h1>Outlet Zona Deportiva</h1>
        <h3>Depósito</h3>
      </div>
      <div className="espacio-bajo-encabezado">
        <ul className="facebook-list">
          {/* <li><Link to="/">home</Link></li> */}
          <li><Link to="/login">Ingresar</Link></li>
          <li><Link to="/registro">Registro</Link></li>
        </ul>
      </div>
    </>
  );
}