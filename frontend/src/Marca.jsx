import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios';
import reactLogo from './assets/react.svg';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';  // **CAMBIO**: Importación de SweetAlert2
import { Menu } from "./Menu";

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
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
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
           <Menu/>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>

            <div className="table-responsive">
                      <table className="table table-striped-columns"  >
                      <thead>
                    <tr>
                        <td class="align-top h6">Marcas de los Productos</td>
                        <td> <Link className="btn btn-outline-warning" to="/agregarmarca">+ Agregar Marca</Link></td>
                    </tr>
                    </thead>
                    <tbody>
                    {marca.map((p) => (
                        <tr className="align-bottom" key={p.id_marca}>
                            <td>{p.nombre_marca}</td>
                            <td> <Link to={`/editmarca/${p.id_marca}`}> <button className="btn btn-outline-primary">Editar </button></Link> </td>
                            <td><button className="btn btn-outline-danger" onClick={(e) => eliminar(e, p.id_marca)}>eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    );
}
