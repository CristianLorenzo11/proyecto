// Menu.jsx
import React, { useEffect, useState } from "react";
import "./Menu.css"
import { Link } from "react-router-dom";

export function Menu(){
  const [usuario, setUsuario]= useState('')
  
  useEffect(() => {
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'))
    if (usuarioLogueado) {
      setUsuario(usuarioLogueado);
    } else {
      window.location.href = '/';
    }
  }, []);

  const cerrarSesionHandler = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      
        <div className="botones">
        
          <Link to="/principal">Inicio</Link>
          <Link to="/producto">Productos</Link>
          <Link to="/proveedor">Proveedores</Link>
          <Link to="/marca">Marcas</Link>
          <Link to="/presentacion">Presentación</Link>
          <Link to="/tipoproducto">Tipo de Productos</Link>
         
          <button className="cerrar" onClick={cerrarSesionHandler}>Cerrar Sesión</button>
        </div>
        
    
      </nav>
      <div className="usuario-conectado" > <span class="nombre-usuario">Usuario: {usuario.user}</span></div>
  
    </>
  );
}