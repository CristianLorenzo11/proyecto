import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios'
import { Link, useParams } from "react-router-dom";
import reactLogo from './assets/react.svg'




export function Editproducto(){
const {id_producto}= useParams()
const [nombre_producto, setNombre] =useState('')
const [id_marca, setMarca] =useState('')
const [id_presentacion, setPresentacion] =useState('')
const [id_proveedor, setProveedor] =useState('')
const [id_tipo_producto, setTipoProducto] =useState('')
const [id_ubicacion, setUbicacion] =useState('')
const [cantidad, setCantidad] =useState('')
const[marcas, setMarcas]=useState([])
const[presentaciones, setpresentaciones]=useState([])
const[proveedores, setproveedores]=useState([])
const[mensaje, setMensaje]= useState ('')
const[tipo_productos, setTipoProductos]=useState([])
const[ubicaciones, setUbicaciones]= useState([])

useEffect(()=>{
        traerdatos();
        API.getMarca().then(setMarcas)
        API.getPresentacion().then(setpresentaciones)
        API.getProveedor().then(setproveedores)
        API.getTipoProductos().then(setTipoProductos)
        API.getUbicacion().then(setUbicaciones)
     },[])
        

           const traerdatos = async()=>{
               const datos_producto = await API.getProductoID(id_producto)
               console.log(datos_producto);
               setNombre(datos_producto.nombre_producto)
               setMarca(datos_producto.id_marca)
               setPresentacion(datos_producto.id_presentacion)
               setProveedor(datos_producto.id_proveedor)
               setTipoProducto(datos_producto.id_tipo_producto)
               setUbicacion(datos_producto.id_ubicacion)
               setCantidad(datos_producto.cantidad)
           }
           const editarproducto = async(event)=>{
            event.preventDefault();
            const respuesta = await API.EditProducto ({nombre_producto,id_marca, id_presentacion, id_proveedor, id_tipo_producto,id_ubicacion, cantidad}, id_producto)
            console.log("la respuesta es ", respuesta);
            if(respuesta.status){
                setMensaje(respuesta.mensaje)
                setTimeout(()=>{
                    setMensaje('')
                    window.location.href='/producto'
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
        <div><h5>Ingrese datos del Producto</h5></div>
       <main className="form-signin w-100 m-auto">
            
              <form onSubmit={editarproducto}>
               
                <div className="form-floating">
                  <input 
                  type="text" 
                  value={nombre_producto}
                  onChange={(event)=>setNombre(event.target.value)}
                  className="form-control" 
                  placeholder="Nombre del producto"
                  />
                  <label for="floatingInput"> Nombre del producto</label>
                </div>
                <div className="form-floating">
                  <input 
                  type="text" 
                  value={cantidad}
                  onChange={(event)=>setCantidad(event.target.value)}
                  className="form-control" 
                  placeholder="cantidad"
                  />
                  <label for="floatingInput"> Cantidad</label>
                </div>
                <div className="form-floating">
                <select onChange={(event)=>setMarca(event.target.value)} className="form-control">
                    {marcas.map((m)=>(
                      
                    <option selected={(m.id_marca==id_marca)?`selected`:``} value={m.id_marca}>{m.nombre_marca}</option>
                    ))}
                 </select>
                  <label for="floatingInput"> Marca</label>
                </div>
                <div className="form-floating">
                <select onChange={(event)=>setPresentacion(event.target.value)} className="form-control">
                    {presentaciones.map((p)=>(
                      
                    <option selected={(p.id_presentacion==id_presentacion)?`selected`:``} value={p.id_presentacion}>{p.presentacion_del_producto}</option>
                    ))}
                 </select>
                  <label for="floatingInput"> id Presentacion</label>
                </div>
                <div className="form-floating">
                <select onChange={(event)=>setProveedor(event.target.value)} className="form-control">
                    {proveedores.map((p)=>(
                      
                    <option selected={(p.idproveedor==id_proveedor)?`selected`:``} value={p.idproveedor}>{p.nombre_proveedor}</option>
                    ))}
                 </select>
                  <label for="floatingInput"> id Proveedor</label>
                </div>
                <div className="form-floating">
                <select onChange={(event)=>setTipoProducto(event.target.value)} className="form-control">
                    {tipo_productos.map((p)=>(
                      
                    <option selected={(p.id_tipo_producto==id_tipo_producto)?`selected`:``} value={p.id_tipo_producto}>{p.tipo_de_producto}</option>
                    ))}
                 </select>
                  <label for="floatingInput"> tipo Producto</label>
                </div>

                <div className="form-floating">
                <select onChange={(event)=>setUbicacion(event.target.value)} className="form-control">
                    {ubicaciones.map((p)=>(
                      
                    <option selected={(p.id_ubicacion==id_ubicacion)?`selected`:``} value={p.id_ubicacion}>{p.ubicacion}</option>
                    ))}
                 </select>
                  <label for="floatingInput">ubicacion</label>
                </div>

               



                <button className="btn btn-primary" type="submit" >Guardar Edicion</button>
                <Link to="/producto" >Volver</Link>
                
              </form>
              {mensaje}
          </main>
        </>
    )
}