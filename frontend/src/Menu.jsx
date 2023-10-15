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
    
    <nav class="navbar navbar-expand-sm " aria-label="Third navbar example">
                <div className="botones container-fluid">
               
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            <li className="nav-item">
          <Link className="nav-link active" aria-current="page"   to="/principal">Inicio</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/producto">Productos</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/proveedor">Proveedores</Link>
          </li>
          <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/marca">Marcas</Link>   </li>
          <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/presentacion">Presentación</Link> </li>
          <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/tipo_producto">Tipo de Productos</Link>    </li>
         </ul>
          <button className="cerrar" onClick={cerrarSesionHandler}>Cerrar Sesión</button>
        </div>
        
    </div>
      </nav>
      <div className="usuario-conectado" > <span class="nombre-usuario">Usuario: {usuario.user}</span></div>
  
    </>
  );
}