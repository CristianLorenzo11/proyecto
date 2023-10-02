import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios'
import reactLogo from './assets/react.svg'
import Encabezado from "./Encabezado";




export function Proveedor(){
    const[proveedor, setProveedor]= useState([])
    useEffect(()=>{
        API.getProveedor().then(setProveedor)}, []
        )

        const eliminar = (e, idproveedor)=>{
            e.preventDefault();
            console.log( "el id que vamos a eliminar es el ", idproveedor);
            API.deleteProveedor(idproveedor);
            API.getProveedor().then(setProveedor);
        }

    return(
<>
<Encabezado/>
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
    <td><button  onClick={(e)=>eliminar(e, p.idproveedor)}>ELIMINAR</button></td>
    </tr>
    ))}
    
</table>
    </>
    )
    
}