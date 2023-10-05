import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios'
import reactLogo from './assets/react.svg'
import Encabezado from "./Encabezado";
import { Link } from "react-router-dom";



export function Presentacion(){
    const[presentacion, setPresentacion]= useState([])
    useEffect(()=>{
        API.getPresentacion().then(setPresentacion)}, []
        )
        const eliminar = (e, id_presentacion)=>{
            e.preventDefault();
            console.log( "el id que vamos a eliminar es el ", id_presentacion);
            API.deletePresentacion(id_presentacion);
            API.getPresentacion().then(setPresentacion);
        }

    return(
<>
<Encabezado/>
<a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
       
<table>
  
    <tr>
       
        <td className="h4">Presentacion de los Productos</td>
        <td> <Link className="agregar"  to="/agregarpresentacion">+ Agregar Presentacion</Link></td>
    </tr>
    {presentacion.map((p)=>(
    <tr>
    <td>{p.presentacion_del_producto}</td>
    <td> <Link  to={`/editpresentacion/${p.id_presentacion}`}> <button className="editar">Editar </button></Link> </td>
    <td><button  onClick={(e)=>eliminar(e, p.id_presentacion)}>eliminar</button></td>
    
    </tr>
    ))}
    
</table>
    </>
    )
    
}