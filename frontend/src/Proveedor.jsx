import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios'
import reactLogo from './assets/react.svg'




export function Proveedor(){
    const[proveedor, setProveedor]= useState([])
    useEffect(()=>{
        API.getProveedor().then(setProveedor)}, []
        )

    return(
<>
<a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
<table>
    <tr>
       
        <td className="h2">Nombre del Proveedor</td>
        <td className="h2">Estado</td>

    </tr>
    {proveedor.map((p)=>(
    <tr>
    <td>{p.nombre_proveedor}</td>
    <td>{p.estado}</td>
    </tr>
    ))}
    
</table>
    </>
    )
    
}