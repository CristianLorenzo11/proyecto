import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios'
import reactLogo from './assets/react.svg'
import Encabezado from "./Encabezado";
import { Link } from "react-router-dom";


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
        const alta = (e, idproveedor)=>{
            e.preventDefault();
            console.log( "el id que vamos a dar de alta es el ", idproveedor);
            API.altaProveedor(idproveedor);
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
       
        <td className="h4">Nombre del Proveedor</td>
        <td className="h4">Estado</td>
<td><Link className="agregar" to="/agregarproveedor">+ Agregar Proveedor</Link></td>
    </tr>
    {proveedor.map((p)=>(
    <tr>
    <td>{p.nombre_proveedor}</td>
    <td>{p.estado}</td>
    <td> <Link  to={`/editproveedor/${p.idproveedor}`}> <button className="editar">Editar </button></Link> </td>
    {
        (p.estado== "A")?
        <td><button  onClick={(e)=>eliminar(e, p.idproveedor)}>Desactivar</button></td>
        :
        <td><button className="activar"  onClick={(e)=>alta(e, p.idproveedor)}>Activar</button></td>
    }
    
    
    </tr>
    ))}
    
</table>
    </>
    )
    
}