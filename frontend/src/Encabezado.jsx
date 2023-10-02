import React from "react";
import { Link } from "react-router-dom";
 // Asegúrate de importar tu archivo de estilos aquí

function Encabezado() {
  return (
    <div className="encabezado">
      <div className="botones">
      <Link to="/producto">Productos</Link>
      <Link to="/proveedor">Proveedores</Link>
      <Link to="/marca">Marcas</Link>
      <Link to="/presentacion">Presentacion</Link>
      <Link to="/tipoproducto">Tipo de Productos </Link>
      <Link to="/login">Salir</Link>
      </div>
    </div>
  );
}

export default Encabezado;
