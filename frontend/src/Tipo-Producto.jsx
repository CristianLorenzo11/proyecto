import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios';
import reactLogo from './assets/react.svg';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';  // **CAMBIO**: Importación de SweetAlert2
import { Menu } from "./Menu";

export function TipoProducto(){
    const [tipo_producto, setTipoProducto] = useState([]);
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        API.getTipoProductos().then(setTipoProducto);
        API.getProductos().then(setProducto);
    }, []);

    const eliminar = (e, id_tipo_producto) => {
        e.preventDefault();
        if (id_tipo_producto === 1 || id_tipo_producto === 2 || id_tipo_producto === 3) {
            Swal.fire({
                icon: 'error',
                title: 'No permitido',
                text: 'No puedes eliminar los Elementos deportivos, Suplementos y Pelotas',
            });
        } else {
            // Verificar si el tipo de producto está en uso en productos
            const tipoProductoEnUso = producto.some(producto => producto.id_tipo_producto === id_tipo_producto);
    
            if (tipoProductoEnUso) {
                Swal.fire({
                    icon: 'error',
                    title: 'No permitido',
                    text: 'No puedes eliminar este tipo de producto porque está en uso en Productos.',
                });
            } else {
                Swal.fire({
                    title: '¿Estás seguro?',
                    text: '¡No podrás revertir esto!',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: '¡Sí, bórralo!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        API.deleteTipoProducto(id_tipo_producto);
                        API.getTipoProductos().then(setTipoProducto);
                        Swal.fire(
                            '¡Eliminado!',
                            'El tipo de producto ha sido eliminado.',
                            'success'
                        );
                    }
                });
            }
        }
    };
    
    return (
        <>
           <Menu/>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>

            <div className="table-responsive">
                      <table className="table table"  >
                      <thead>
                    <tr>
                        <td class="align-top h6">Tipos de  Productos</td>
                        <td> <Link className="btn btn-outline-warning" to="/agregartipoproducto">+ Agregar  </Link></td>
                    </tr>
                    </thead>
                    <tbody>
                    {tipo_producto.map((p) => (
                        <tr className="align-bottom" key={p.id_tipo_producto}>
                            <td>{p.tipo_de_producto}</td>
                            <td> <Link to={`/edittipoproducto/${p.id_tipo_producto}`}> <button className="btn btn-outline-primary">Editar </button></Link> </td>
                            <td><button className="btn btn-outline-danger" onClick={(e) => eliminar(e, p.id_tipo_producto)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    );
}
