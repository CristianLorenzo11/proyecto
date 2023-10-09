import React, {  useEffect, useState } from "react";
import * as API from './servicios/servicios';
import { Link} from "react-router-dom";
import reactLogo from './assets/react.svg';

export function AadProducto(){
    const [nombre_producto, setNombre] = useState('');
    const [id_marca, setMarca] = useState('');
    const [id_presentacion, setPresentacion] = useState('');
    const [id_proveedor, setProveedor] = useState('');
    const [id_tipo_producto, setTipoProducto] = useState('');
    const [id_ubicacion, setUbicacion] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [marcas, setMarcas] = useState([]);
    const [presentaciones, setPresentaciones] = useState([]);
    const [proveedores, setProveedores] = useState([]);
    const [tipo_productos, setTipoProductos] = useState([]);
    const [ubicaciones, setUbicaciones] = useState([]);

    useEffect(() => {
        API.getMarca().then(setMarcas);
        API.getPresentacion().then(setPresentaciones);
        API.getProveedor().then(setProveedores);
        API.getTipoProductos().then(setTipoProductos);
        API.getUbicacion().then(setUbicaciones);
    }, []);

   

   
    const agregarProducto = async (event) => {
        event.preventDefault();
         console.log(marcas, presentaciones, ubicaciones,proveedores)
        const respuesta = await API.AadProducto({nombre_producto, id_marca, id_presentacion, id_proveedor, id_tipo_producto, id_ubicacion, cantidad })
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

    return (
        <>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <div>
                <h5>Ingrese datos del Producto</h5>
            </div>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={agregarProducto}>
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
    <select 
        onChange={(event) => setMarca(event.target.value)} 
        className="form-control"
        value={id_marca} // Asegura que el valor seleccionado sea el valor actual en el estado.
    >
        <option value="">Selecciona una marca</option> {/* Opción en blanco */}
        {marcas.map((m) => (
            <option key={m.id_marca} value={m.id_marca}>
                {m.nombre_marca}
            </option>
        ))}
    </select>
    <label htmlFor="floatingInput">Marca</label>
</div>


<div className="form-floating">
    <select 
        onChange={(event) => setPresentacion(event.target.value)} 
        className="form-control"
        value={id_presentacion} // Asegura que el valor seleccionado sea el valor actual en el estado.
    >
        <option value="">Selecciona una presentación</option> {/* Opción en blanco */}
        {presentaciones.map((p) => (
            <option key={p.id_presentacion} value={p.id_presentacion}>
                {p.presentacion_del_producto}
            </option>
        ))}
    </select>
    <label htmlFor="floatingInput">Presentación</label>
</div>


<div className="form-floating">
<select 
    onChange={(event) => setProveedor(event.target.value)} 
    className="form-control"
    value={id_proveedor} // Asegura que el valor seleccionado sea el valor actual en el estado.
>
    <option value="">Selecciona un proveedor</option> {/* Opción en blanco */}
    {proveedores.map((p) => (
        <option key={p.idproveedor} value={p.idproveedor}>
            {p.nombre_proveedor}
        </option>
    ))}
</select>

    <label htmlFor="floatingInput">Proveedor</label>
</div>

<div className="form-floating">
    <select 
        onChange={(event) => setTipoProducto(event.target.value)} 
        className="form-control"
        value={id_tipo_producto} // Asegura que el valor seleccionado sea el valor actual en el estado.
    >
        <option value="">Selecciona un tipo de producto</option> {/* Opción en blanco */}
        {tipo_productos.map((p) => (
            <option key={p.id_tipo_producto} value={p.id_tipo_producto}>
                {p.tipo_de_producto}
            </option>
        ))}
    </select>
    <label htmlFor="floatingInput">Tipo de Producto</label>
</div>

<div className="form-floating">
    <select 
        onChange={(event) => setUbicacion(event.target.value)} 
        className="form-control"
        value={id_ubicacion} // Asegura que el valor seleccionado sea el valor actual en el estado.
    >
        <option value="">Selecciona una ubicación</option> {/* Opción en blanco */}
        {ubicaciones.map((p) => (
            <option key={p.id_ubicacion} value={p.id_ubicacion}>
                {p.ubicacion}
            </option>
        ))}
    </select>
    <label htmlFor="floatingInput">Ubicación</label>
</div>


                    <button className="btn btn-primary" type="submit">agregar producto</button>
                    <Link to="/producto">Volver</Link>
                </form>
                {mensaje}
            </main>
        </>
    );
}
