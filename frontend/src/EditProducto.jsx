import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios';
import { Link, useParams } from "react-router-dom";
import reactLogo from './assets/react.svg';
import Swal from 'sweetalert2';

export function Editproducto(){
    const {id_producto} = useParams();
    const [nombre_producto, setNombre] = useState('');
    const [id_marca, setMarca] = useState('');
    const [id_presentacion, setPresentacion] = useState('');
    const [id_proveedor, setProveedor] = useState('');
    const [id_tipo_producto, setTipoProducto] = useState('');
    const [id_ubicacion, setUbicacion] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [marcas, setMarcas] = useState([]);
    const [presentaciones, setPresentaciones] = useState([]);
    const [proveedores, setProveedores] = useState([]);
    const [mensaje, setMensaje] = useState('');
    const [tipo_productos, setTipoProductos] = useState([]);
    const [ubicaciones, setUbicaciones] = useState([]);

    useEffect(() => {
        traerDatos();
        API.getMarca().then(setMarcas);
        API.getPresentacion().then(setPresentaciones);
        API.getProveedor().then(setProveedores);
        API.getTipoProductos().then(setTipoProductos);
        API.getUbicacion().then(setUbicaciones);
    }, []);

    const traerDatos = async () => {
        const datos_producto = await API.getProductoID(id_producto);
        setNombre(datos_producto.nombre_producto);
        setMarca(datos_producto.id_marca);
        setPresentacion(datos_producto.id_presentacion);
        setProveedor(datos_producto.id_proveedor);
        setTipoProducto(datos_producto.id_tipo_producto);
        setUbicacion(datos_producto.id_ubicacion);
        setCantidad(datos_producto.cantidad);
    };

    const editarProducto = async (event) => {
        event.preventDefault();
          // Validar si se han completado todos los campos obligatorios
  if (!nombre_producto || !cantidad || !id_marca || !id_presentacion || !id_proveedor || !id_tipo_producto || !id_ubicacion) {
    alert("Todos los campos son obligatorios. Por favor, complete todos los campos.");
    return;
}


        Swal.fire({
            title: '¿Deseas guardar los cambios?',
    
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            
        }).then(async (result) => {
            if (result.isConfirmed) {
                const respuesta = await API.EditProducto({ nombre_producto, id_marca, id_presentacion, id_proveedor, id_tipo_producto, id_ubicacion, cantidad }, id_producto);
                if (respuesta.status) {
                    setMensaje(respuesta.mensaje);
                    setTimeout(() => {
                        setMensaje('');
                        window.location.href = '/producto';
                    }, 3000);
                    Swal.fire('¡Guardado!', '', 'success');
                } else {
                    Swal.fire('Hubo un error', respuesta.mensaje, 'error');
                }
            } else if (result.isDenied) {
                Swal.fire('Los cambios no se guardaron', '', 'info');
            }
        });
    };

    return (
        <>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <div>
                <h5>Ingrese datos del Producto</h5>
            </div>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={editarProducto}>
                <div className="form-floating">
    <input 
        type="text" 
        value={nombre_producto}
        onChange={(event)=>setNombre(event.target.value)}
        className="form-control" 
        placeholder="Nombre del producto"
    />
    <label htmlFor="floatingInput">Nombre del producto</label>
</div>

<div className="form-floating">
    <input 
        type="text" 
        value={cantidad}
        onChange={(event)=>setCantidad(event.target.value)}
        className="form-control" 
        placeholder="Cantidad"
    />
    <label htmlFor="floatingInput">Cantidad</label>
</div>

<div className="form-floating">
    <select onChange={(event)=>setMarca(event.target.value)} className="form-control">
        {marcas.map((m)=>(
            <option key={m.id_marca} selected={m.id_marca === id_marca} value={m.id_marca}>{m.nombre_marca}</option>
        ))}
    </select>
    <label htmlFor="floatingInput">Marca</label>
</div>

<div className="form-floating">
    <select onChange={(event)=>setPresentacion(event.target.value)} className="form-control">
        {presentaciones.map((p)=>(
            <option key={p.id_presentacion} selected={p.id_presentacion === id_presentacion} value={p.id_presentacion}>{p.presentacion_del_producto}</option>
        ))}
    </select>
    <label htmlFor="floatingInput">Presentación</label>
</div>

<div className="form-floating">
    <select onChange={(event)=>setProveedor(event.target.value)} className="form-control">
        {proveedores.map((p)=>(
            <option key={p.idproveedor} selected={p.idproveedor === id_proveedor} value={p.idproveedor}>{p.nombre_proveedor}</option>
        ))}
    </select>
    <label htmlFor="floatingInput">Proveedor</label>
</div>

<div className="form-floating">
    <select onChange={(event)=>setTipoProducto(event.target.value)} className="form-control">
        {tipo_productos.map((p)=>(
            <option key={p.id_tipo_producto} selected={p.id_tipo_producto === id_tipo_producto} value={p.id_tipo_producto}>{p.tipo_de_producto}</option>
        ))}
    </select>
    <label htmlFor="floatingInput">Tipo de Producto</label>
</div>

<div className="form-floating">
    <select onChange={(event)=>setUbicacion(event.target.value)} className="form-control">
        {ubicaciones.map((p)=>(
            <option key={p.id_ubicacion} selected={p.id_ubicacion === id_ubicacion} value={p.id_ubicacion}>{p.ubicacion}</option>
        ))}
    </select>
    <label htmlFor="floatingInput">Ubicación</label>
</div>

                    <button className="btn btn-primary" type="submit">Guardar Edición</button>
                    <Link to="/producto">Volver</Link>
                </form>
                {mensaje}
            </main>
        </>
    );
}
