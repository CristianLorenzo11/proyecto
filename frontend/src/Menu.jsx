import React from "react";
import "./Menu.css"
import { Link } from "react-router-dom";

export function Menu(){
return(
<>
<div>
      
        <ul>
        <li><Link to="/producto">Productos</Link></li>
        <li><Link to="/presentacion">Presentacion</Link></li>
        <li><Link to="/marca">Marca</Link></li>
        <li><Link to="/proveedor">Proveedor</Link></li>
        <li><Link to="/tipoproducto">Tipo de Producto </Link></li>
        <li><Link to="/ubicacion">Ubicacion</Link></li>
            <li><Link to="/">Volver</Link></li>
            
      </ul>
        </div>
</>
)
}