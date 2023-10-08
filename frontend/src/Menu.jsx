import React, { useEffect, useState } from "react";
import "./Menu.css"
import { Link } from "react-router-dom";

export function Menu(){
  const [usuario, setUsuario]= useState('')
    useEffect(()=>{
        const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'))
        if(usuarioLogueado){
          console.log(usuarioLogueado.user)
            setUsuario(usuarioLogueado)
        }else{
            window.location.href='/'
        }
      },[])
return(
<>
<div className="encabezado">
      <div className="botones">
      <Link to="/principal">Inicio</Link>
      <Link to="/producto">Productos</Link>
      <Link to="/proveedor">Proveedores</Link>
      <Link to="/marca">Marcas</Link>
      <Link to="/presentacion">Presentacion</Link>
      <Link to="/tipoproducto">Tipo de Productos </Link>
     
      <Link to="/login">Cerrar Sesion </Link>
      </div>
    </div>
    <div className="usuario"> Usuario:   {usuario.user}</div>
</>

)
}