import React from "react";
import "./Menu.css"
import { Link } from "react-router-dom";

export function Menu(){
return(
<>
<div>
      
       <ul>
        <li className="h4"><Link to="/producto">Productos</Link></li>
        <li className="h4"><Link to="/proveedor">Proveedores</Link></li>
        <li className="h4"><Link to="/presentacion">Presentacion</Link></li>
        <li className="h4"><Link to="/marca">Marcas</Link></li>
        <li className="h4"><Link to="/tipoproducto">Tipo de Productos </Link></li>
        
            <li className="h4"><Link to="/login">Salir</Link></li>
            
      </ul>
        </div>
</>
)
}