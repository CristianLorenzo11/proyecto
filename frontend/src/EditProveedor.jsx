import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import reactLogo from './assets/react.svg'
import * as API from './servicios/servicios'

export function Editproveedor(){
    const[nombre_proveedor, setNombre]= useState('')
    const[mensaje, setMensaje]= useState ('')
    const{idproveedor}= useParams();
    useEffect(()=>{
 traerdatos();
    },[])
    const traerdatos = async()=>{
        const datos_proveedor = await API.getProveedorID(idproveedor)
        console.log(datos_proveedor);
        setNombre(datos_proveedor.nombre_proveedor)

    }
    const editarproveedor = async(event)=>{
        event.preventDefault();
        const respuesta = await API.Editproveedor({nombre_proveedor}, idproveedor)
        console.log("la respuesta es ", respuesta);
        if(respuesta.status){
            setMensaje(respuesta.mensaje)
            setTimeout(()=>{
                setMensaje('')
                window.location.href='/proveedor'
                }, 3000)
        } 
          else{
            alert(respuesta.mensaje)
          }
      return;
      }

      
    return(
        <>
         <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <div><h5>Ingrese datos del Proveedor</h5></div>
       <main className="form-signin w-100 m-auto">
              <form onSubmit={editarproveedor}>
               
                <div className="form-floating">
                  <input 
                  type="text" 
                  value={nombre_proveedor}
                  onChange={(event)=>setNombre(event.target.value)}
                  className="form-control" 
                  placeholder="Nombre del proveedor"
                  />
                  <label for="floatingInput"> Nombre del Proveedor</label>
                </div>
                <button className="btn btn-primary" type="submit" >Guardar Edicion</button>
                <Link to="/proveedor" >Volver</Link>
                
              </form>
              {mensaje}
          </main>
        </>
    )
}