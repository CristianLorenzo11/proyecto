import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios'
import reactLogo from './assets/react.svg'
import Encabezado from "./Encabezado";




export function Marca(){
    const[marca, setMarca]= useState([])
    useEffect(()=>{
        API.getMarca().then(setMarca)}, []
        )

    return(
<>
<Encabezado/>
<a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
<table>
    <tr>
       
        <td className="h2">Marcas de los Productos</td>
        

    </tr>
    {marca.map((p)=>(
    <tr>
    <td>{p.nombre_marca}</td>
   
    </tr>
    ))}
    
</table>
    </>
    )
    
}