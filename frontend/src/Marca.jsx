import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios'
import reactLogo from './assets/react.svg'
import Encabezado from "./Encabezado";
import { Link } from "react-router-dom";




export function Marca(){
    const[marca, setMarca]= useState([])
    useEffect(()=>{
        API.getMarca().then(setMarca)}, []
        )
        const eliminar = (e, id_marca)=>{
            e.preventDefault();
            console.log( "el id que vamos a eliminar es el ", id_marca);
            API.deleteMarca(id_marca);
            API.getMarca().then(setMarca);
        }

    return(
<>
<Encabezado/>
<a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
       
<table>
<Link to="/agregarmarca">+ Agregar Marca</Link>
    <tr>
       
        <td className="h2">Marcas de los Productos</td>
        

    </tr>
    {marca.map((p)=>(
    <tr>
    <td>{p.nombre_marca}</td>
    <td><button  onClick={(e)=>eliminar(e, p.id_marca)}>eliminar</button></td>
    </tr>
    ))}
    
</table>
    </>
    )
    
}