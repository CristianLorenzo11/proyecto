import React, { useEffect, useState } from "react";
import './producto.css'
import reactLogo from './assets/react.svg'
import * as API from './servicios/servicios'


export function Producto(){
    const[producto,setProducto]= useState([])
    useEffect(()=>{
        API.getProducto().then(setProducto)}, []
        )

   return(
<> 
<a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
<h1>Stock de Productos</h1>
<table>
    <tr>
       
        <td className="h2">Productos</td>
        <td className="h2">cantidad</td>
        <td className="h2">proveedor</td>
        <td className="h2">Marca</td>
        <td className="h2">ubicacion</td>
        <td className="h2">tipo de Producto</td>
        <td className="h2">Presentacion</td>
    </tr>
    {producto.map((p)=>(
    <tr>
    
        <td>{p.nombre}</td>
        <td>{p.cantidad}</td>
        <td>{p.proveedor}</td>
        <td>{p.marca}</td>
        <td>{p.ubicacion}</td>
        <td>{p.tipo_de_producto}</td>
        <td>{p.presentacion}</td>
    </tr>
    ))}
    
</table>
</>


   ) 
}