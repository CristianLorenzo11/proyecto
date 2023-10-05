import React, { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import * as API from './servicios/servicios'

export function AadPresentacion(){
    const[presentacion_del_producto, setPresentacion]= useState('')
    const[mensaje, setMensaje]= useState ('')
    const guardarpresentacion = async(event)=>{
        event.preventDefault();
        const respuesta = await API.AadPresentacion({presentacion_del_producto})
        console.log("la respuesta es ", respuesta);
        if(respuesta.status){
            setMensaje(respuesta.mensaje)
            setTimeout(()=>{
                setMensaje('')
                window.location.href='/presentacion'
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
        <div><h5>Ingrese la presentacion</h5></div>
       <main className="form-signin w-100 m-auto">
              <form onSubmit={guardarpresentacion}>
               
                <div className="form-floating">
                  <input 
                  type="text" 
                  value={presentacion_del_producto}
                  onChange={(event)=>setPresentacion(event.target.value)}
                  className="form-control" 
                  placeholder="presentacion"
                  />
                  <label for="floatingInput">Presentacion del producto</label>
                </div>
                <button className="btn btn-primary" type="submit" >Guardar</button>
                <Link to="/presentacion" >Volver</Link>
                
              </form>
              {mensaje}
          </main>
        </>
    )
}
