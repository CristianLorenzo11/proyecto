import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios';
import reactLogo from './assets/react.svg';
import Encabezado from "./Encabezado";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';  // **CAMBIO**: Importación de SweetAlert2
import { Menu } from "./Menu";

export function Presentacion(){
    const [presentacion, setPresentacion] = useState([]);

    useEffect(() => {
        API.getPresentacion().then(setPresentacion);
    }, []);

    const eliminar = (e, id_presentacion) => {
        e.preventDefault();

        // **CAMBIO**: Confirmación SweetAlert2
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
                API.deletePresentacion(id_presentacion);
                API.getPresentacion().then(setPresentacion);
                Swal.fire(
                    '¡Eliminado!',
                    'La presentación ha sido eliminada.',
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

            <table>
                <tbody>
                    <tr>
                        <td className="h4">Presentacion de los Productos</td>
                        <td> <Link className="agregar" to="/agregarpresentacion">+ Agregar Presentacion</Link></td>
                    </tr>
                    {presentacion.map((p) => (
                        <tr key={p.id_presentacion}>
                            <td>{p.presentacion_del_producto}</td>
                            <td> <Link to={`/editpresentacion/${p.id_presentacion}`}> <button className="editar">Editar </button></Link> </td>
                            <td><button onClick={(e) => eliminar(e, p.id_presentacion)}>eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
