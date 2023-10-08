import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios';
import reactLogo from './assets/react.svg';
import Encabezado from "./Encabezado";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';  // **CAMBIO**: Importación de SweetAlert2

export function Marca(){
    const [marca, setMarca] = useState([]);

    useEffect(() => {
        API.getMarca().then(setMarca);
    }, []);

    const eliminar = (e, id_marca) => {
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
                API.deleteMarca(id_marca);
                API.getMarca().then(setMarca);
                Swal.fire(
                    '¡Eliminado!',
                    'La marca ha sido eliminada.',
                    'success'
                );
            }
        });
    };

    return (
        <>
            <Encabezado />
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>

            <table>
                <tbody>
                    <tr>
                        <td className="h4">Marcas de los Productos</td>
                        <td> <Link className="agregar" to="/agregarmarca">+ Agregar Marca</Link></td>
                    </tr>
                    {marca.map((p) => (
                        <tr key={p.id_marca}>
                            <td>{p.nombre_marca}</td>
                            <td> <Link to={`/editmarca/${p.id_marca}`}> <button className="editar">Editar </button></Link> </td>
                            <td><button onClick={(e) => eliminar(e, p.id_marca)}>eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
