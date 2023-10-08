import React, { useEffect, useState } from "react";
import './producto.css';
import reactLogo from './assets/react.svg';
import * as API from './servicios/servicios';
import Encabezado from "./Encabezado";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

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
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, bórralo!'
        }).then((result) => {
            if (result.isConfirmed) {
                API.deleteProducto(id_producto);
                API.getProducto().then(setProducto);
                Swal.fire(
                    '¡Eliminado!',
                    'El producto ha sido eliminado.',
                    'Exito'
                );
            }
        });
    };

    return (
        <>
            <Encabezado />
            <p></p>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <h1>Stock de Productos</h1>
            <table>
                <tbody>
                    <tr>
                        <td className="h4">Productos</td>
                        <td className="h4">cantidad</td>
                        <td className="h4">proveedor</td>
                        <td className="h4">Marca</td>
                        <td className="h4">ubicacion</td>
                        <td className="h4">tipo de Producto</td>
                        <td className="h4">Presentacion</td>
                    </tr>
                    {producto.map((p) => (
                        <tr key={p.id_producto}>
                            <td>{p.nombre}</td>
                            <td>{p.cantidad}</td>
                            <td>{p.proveedor}</td>
                            <td>{p.marca}</td>
                            <td>{p.ubicacion}</td>
                            <td>{p.tipo_de_producto}</td>
                            <td>{p.presentacion}</td>
                            <td> <Link to={`/editproducto/${p.id_producto}`}> <button className="editar">Editar </button></Link> </td>
                            <td><button onClick={(e) => eliminar(e, p.id_producto)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
