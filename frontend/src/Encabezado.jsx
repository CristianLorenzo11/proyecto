// Encabezado.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './encabezado.css';

function Encabezado() {
  const [loggedIn, setLoggedIn] = useState(!!window.localStorage.getItem('token'));
  const usuario = JSON.parse(window.localStorage.getItem('usuario'));
  const nombreUsuario = (usuario && usuario.nombre) ? usuario.nombre : '';

  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setLoggedIn(!!window.localStorage.getItem('token'));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const cerrarSesionHandler = () => {
    window.localStorage.clear();
    navigate('/login');
  };

  if (!loggedIn) return null;

  return (
    <div className="encabezado">
      <div className="botones">
        <Link to="/producto">Productos</Link>
        <Link to="/proveedor">Proveedores</Link>
        <Link to="/marca">Marcas</Link>
        <Link to="/presentacion">Presentación</Link>
        <Link to="/tipoproducto">Tipo de Productos</Link>
        <button onClick={cerrarSesionHandler}>Cerrar Sesión</button>
      </div>
    </div>
  );
}

export default Encabezado;
