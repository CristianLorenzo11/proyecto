import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios';
import reactLogo from './assets/react.svg';
import { Link } from "react-router-dom";
import { Menu } from "./Menu";

export function AadProducto() {
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

    const proveedoresActivos = proveedores.filter((p) => p.estado === 'A');
    const tipoProductosActivos = tipo_productos.filter((tp) => tp.estado === 'A');

    const agregarProducto = async (event) => {
        event.preventDefault();
        const respuesta = await API.AadProducto({
            nombre_producto,
            id_marca,
            id_presentacion,
            id_proveedor,
            id_tipo_producto,
            id_ubicacion,
            cantidad
        });
        if (respuesta.status) {
            setMensaje(respuesta.mensaje)
            setTimeout(() => {
                setMensaje('')
                window.location.href = '/producto'
            }, 3000)
        } else {
            alert(respuesta.mensaje)
        }
    }

    return (
        <>
            <Menu />
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
                            onChange={(event) => setNombre(event.target.value)}
                            className="form-control"
                            placeholder="Nombre del producto"
                        />
                        <label htmlFor="floatingInput">Nombre del producto</label>
                    </div>

                    <div className="form-floating">
                        <input
                            type="text"
                            value={cantidad}
                            onChange={(event) => setCantidad(event.target.value)}
                            className="form-control"
                            placeholder="Cantidad"
                        />
                        <label htmlFor="floatingInput">Cantidad</label>
                    </div>

                    <div className="form-floating">
                        <select
                            onChange={(event) => setMarca(event.target.value)}
                            className="form-control"
                            value={id_marca}
                        >
                            <option value="">Selecciona una marca</option>
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
                            value={id_presentacion}
                        >
                            <option value="">Selecciona una presentación</option>
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
                            value={id_proveedor}
                        >
                            <option value="">Selecciona un proveedor</option>
                            {proveedoresActivos.map((p) => (
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
                            value={id_tipo_producto}
                        >
                            <option value="">Selecciona un tipo de producto</option>
                            {tipoProductosActivos.map((tp) => (
                                <option key={tp.id_tipo_producto} value={tp.id_tipo_producto}>
                                    {tp.tipo_de_producto}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="floatingInput">Tipo de Producto</label>
                    </div>

                    <div className="form-floating">
                        <select
                            onChange={(event) => setUbicacion(event.target.value)}
                            className="form-control"
                            value={id_ubicacion}
                        >
                            <option value="">Selecciona una ubicación</option>
                            {ubicaciones.map((u) => (
                                <option key={u.id_ubicacion} value={u.id_ubicacion}>
                                    {u.ubicacion}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="floatingInput">Ubicación</label>
                    </div>

                    <button className="btn btn-primary" type="submit">Agregar Producto</button>
                    <Link to="/producto">Volver</Link>
                </form>
                {mensaje}
            </main>
        </>
    );
}
