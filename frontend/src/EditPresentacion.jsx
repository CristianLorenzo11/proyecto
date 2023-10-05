import React, { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import * as API from './servicios/servicios'
import { Link, useParams } from "react-router-dom";


export function EditPresentacion(){
    const[presentacion_del_producto, setNombre]= useState('')
    const[mensaje, setMensaje]= useState ('')
    const{id_presentacion}= useParams();
    useEffect(()=>{
 traerdatos(); },[])
    const traerdatos = async()=>{
        const datos_presentacion = await API.getPresentacionID(id_presentacion)
        console.log(datos_presentacion);
        setNombre(datos_presentacion.presentacion_del_producto)

    }
    const editarpresentacion = async(event)=>{
        event.preventDefault();
        const respuesta = await API.EditPresentacion({presentacion_del_producto}, id_presentacion)
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
        <div><h5>Ingrese datos</h5></div>
       <main className="form-signin w-100 m-auto">
              <form onSubmit={editarpresentacion}>
               
                <div className="form-floating">
                  <input 
                  type="text" 
                  value={presentacion_del_producto}
                  onChange={(event)=>setNombre(event.target.value)}
                  className="form-control" 
                  placeholder="Nombre de la presentacion"
                  />
                  <label for="floatingInput"> Nombre de la Marca</label>
                </div>
                <button className="btn btn-primary" type="submit" >Guardar Edicion</button>
                <Link to="/presentacion" >Volver</Link>
                
              </form>
              {mensaje}
          </main>
        </>
    )
}