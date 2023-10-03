import React, { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import * as API from './servicios/servicios'

export function AadProveedor(){
    const[nombre_proveedor, setNombre]= useState('')
    const[mensaje, setMensaje]= useState ('')
    const guardarproveedor = async(event)=>{
        event.preventDefault();
        const respuesta = await API.AadProveedor({nombre_proveedor})
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
        <div><h5>Ingrese el Nombre del Proveedor</h5></div>
       <main className="form-signin w-100 m-auto">
              <form onSubmit={guardarproveedor}>
               
                <div className="form-floating">
                  <input 
                  type="text" 
                  value={nombre_proveedor}
                  onChange={(event)=>setNombre(event.target.value)}
                  className="form-control" 
                  placeholder="Nombre del proveedor"
                  />
                  <label for="floatingInput">Nombre del Proveedor</label>
                </div>
                <button className="btn btn-primary" type="submit" >Guardar</button>
                <Link to="/proveedor" >Volver</Link>
                
              </form>
              {mensaje}
          </main>
        </>
    )
}
