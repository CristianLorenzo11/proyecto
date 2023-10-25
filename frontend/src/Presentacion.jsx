import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios';
import reactLogo from './assets/react.svg';
import Encabezado from "./Encabezado";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';  // **CAMBIO**: Importación de SweetAlert2
import { Menu } from "./Menu";

export function Presentacion(){
    const [presentacion, setPresentacion] = useState([]);
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        API.getPresentacion().then(setPresentacion);
        API.getProductos().then(setProducto);
    }, []);
console.log(producto)

const eliminar = (e, id_presentacion) => {
    e.preventDefault();

    // Verificar si el nombre de la presentación es "Unidad" o "Par"
    if (id_presentacion === 1 || id_presentacion === 2) {
        Swal.fire({
            icon: 'error',
            title: 'No permitido',
            text: 'No puedes eliminar la presentación llamada "Unidad" o "Par".',
        });
    } else {
        // Verificar si el id_presentacion está en uso en productos
        const presentacionEnUso = producto.some(producto => producto.id_presentacion === id_presentacion);

        if (presentacionEnUso) {
            Swal.fire({
                icon: 'error',
                title: 'No permitido',
                text: 'No puedes eliminar esta Presentación porque está en uso en Productos.',
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
                    API.deletePresentacion(id_presentacion);
                    API.getPresentacion().then(setPresentacion);
                    Swal.fire(
                        '¡Eliminado!',
                        'La presentación ha sido eliminada.',
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
                      <table className="table table-dark"   >
                      <thead>
                    <tr>
                        <td class="align-top h6">Presentacion de los Productos</td>
                        <td> <Link className="btn btn-outline-warning" to="/agregarpresentacion">+ Agregar </Link></td>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {presentacion.map((p) => (
                        <tr className="align-bottom" key={p.id_presentacion}>
                            <td>{p.presentacion_del_producto}</td>
                            <td> <Link to={`/editpresentacion/${p.id_presentacion}`}> <button className="btn btn-outline-primary">Editar </button></Link> </td>
                            <td><button className="btn btn-outline-danger" onClick={(e) => eliminar(e, p.id_presentacion)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    );
}
