import React, { useEffect, useState } from "react";

import reactLogo from './assets/react.svg';
import * as API from './servicios/servicios';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { Menu } from "./Menu";

export function Producto() {
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        API.getProducto().then(setProducto);
    }, []);

    const eliminar = (e, id_producto) => {
        e.preventDefault();

        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: '¡Sí, Eliminalo!'
        }).then((result) => {
            if (result.isConfirmed) {
                API.deleteProducto(id_producto);
                API.getProducto().then(setProducto);
                Swal.fire(
                    '¡Eliminado!',
                    'El Producto ha sido eliminado.',
                    'Exito'
                );
            }
        });
    };

    return (
        <>
        
            <Menu/>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <div className="table-responsive">
                      <table className="table table-bordered"   >
                      <thead>
                    <tr>
                        <td class="align-top" >Productos</td>
                        <td class="align-top" >cantidad</td>
                        <td class="align-top" >proveedor</td>
                        <td class="align-top" >Marca</td>
                        <td class="align-top" >ubicacion</td>
                        <td class="align-top" >tipo de Producto</td>
                        <td class="align-top" >Presentacion</td>
                        <td > <Link className="btn btn-outline-warning" to="/agregarproducto">+ Agregar</Link></td>
                    </tr>
                    </thead>
                    <tbody>
                    {producto.map((p) => (
                        <tr className="align-bottom" key={p.id_producto}>
                            <td>{p.nombre}</td>
                            <td>{p.cantidad}</td>
                            <td>{p.proveedor}</td>
                            <td>{p.marca}</td>
                            <td>{p.ubicacion}</td>
                            <td>{p.tipo_de_producto}</td>
                            <td>{p.presentacion}</td>
                            <td> <Link to={`/editproducto/${p.id_producto}`}> <button className="btn btn-outline-info">Editar </button></Link> </td>
                            <td><button className="btn btn-outline-danger" onClick={(e) => eliminar(e, p.id_producto)}>Eliminar</button></td>
                        </tr>
                        
                    ))}
                    </tbody>
                            </table>
            </div>
        </>
    );
}
