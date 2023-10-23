import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios';
import reactLogo from './assets/react.svg';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';  // **CAMBIO**: Importación de SweetAlert2
import { Menu } from "./Menu";

export function TipoProducto(){
    const [tipo_producto, setTipoProducto] = useState([]);
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        API.getTipoProductos().then(setTipoProducto);
    }, []);

    const eliminar = (e, id_tipo_producto) => {
        e.preventDefault();

        // **CAMBIO**: Confirmación SweetAlert2
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: '¡Sí, bórralo!'
        }).then((result) => {
            if (result.isConfirmed) {
               const respuesta= API.deleteTipoProducto(id_tipo_producto);
                API.getTipoProductos().then(setTipoProducto);
                Swal.fire(
                    '¡Eliminado!',
                    'El tipo de producto ha sido eliminado.',
                    'success'
                    
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
                            <td><button className="btn btn-outline-danger" onClick={(e) => eliminar(e, p.id_tipo_producto)}>eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    );
}
