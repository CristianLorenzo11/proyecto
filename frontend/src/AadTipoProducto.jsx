import React, { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import * as API from './servicios/servicios'

export function AadTipoProducto(){
    const[tipo_de_producto, setNombre]= useState('')
    const[mensaje, setMensaje]= useState ('')
    const guardartipodeproducto = async(event)=>{
        event.preventDefault();
        if (!tipo_de_producto ) {
          alert("Todos los campos son obligatorios. Por favor, complete todos los campos.");
          return;
        }

        const respuesta = await API.AadTipoProducto({tipo_de_producto})
        console.log("la respuesta es ", respuesta);
        if(respuesta.status){
            setMensaje(respuesta.mensaje)
            setTimeout(()=>{
                setMensaje('')
                window.location.href='/tipo_producto'
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
        <div><h5>Ingrese el Tipo de Producto</h5></div>
       <main className="form-signin w-100 m-auto">
              <form onSubmit={guardartipodeproducto}>
               
                <div className="form-floating">
                  <input 
                  type="text" 
                  value={tipo_de_producto}
                  onChange={(event)=>setNombre(event.target.value)}
                  className="form-control" 
                  placeholder="tipo de producto "
                  />
                  <label for="floatingInput">tipo de producto</label>
                </div>
                <button className="btn btn-primary" type="submit" >Guardar</button>
                <Link to="/tipo_producto" >Volver</Link>
                
              </form>
              {mensaje}
          </main>
        </>
    )
}
