import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios'
import reactLogo from './assets/react.svg'
import Encabezado from "./Encabezado";
import { Link } from "react-router-dom";
import { Menu } from "./Menu";


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
<Menu/>
<a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <div className="table-responsive">
                      <table className="table table-bordered"   >
                      <thead>
    <tr>
       
        <td className="align-top">Nombre del Proveedor</td>
        <td className="align-top">Estado</td>
        <td > <Link className="btn btn-outline-warning" to="/agregarproveedor">+ Agregar</Link></td>
    </tr>
    </thead>
    <tbody>
    {proveedor.map((p)=>(
    <tr className="align-bottom">
    <td>{p.nombre_proveedor}</td>
    <td>{p.estado}</td>
    <td> <Link  to={`/editproveedor/${p.idproveedor}`}> <button className="btn btn-outline-info">Editar </button></Link> </td>
    {
        (p.estado== "A")?
        <td><button className="btn btn-outline-danger"  onClick={(e)=>eliminar(e, p.idproveedor)}>Desactivar</button></td>
        :
        <td><button className="btn btn-outline-success"  onClick={(e)=>alta(e, p.idproveedor)}>Activar</button></td>
    }
    
    
    </tr>
    ))}
    </tbody>
</table>
</div>
    </>
    )
    
}