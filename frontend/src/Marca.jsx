import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios';
import reactLogo from './assets/react.svg';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';  // **CAMBIO**: Importación de SweetAlert2
import { Menu } from "./Menu";

export function Marca(){
    const [marca, setMarca] = useState([]);
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        API.getMarca().then(setMarca);
        API.getProductos().then(setProducto);
    }, []);

    const eliminar = (e, id_marca) => {
        e.preventDefault();
        if ( id_marca === 15 || id_marca === 14) {
            Swal.fire({
                icon: 'error',
                title: 'No permitido',
                text: 'No puedes eliminar la Marca Adidas y  Nike',
            });
        } else {
            // Verificar si la marca está en uso en productos
            const marcaEnUso = producto.some(producto => producto.id_marca === id_marca);
    
            if (marcaEnUso) {
                Swal.fire({
                    icon: 'error',
                    title: 'No permitido',
                    text: 'No puedes eliminar esta Marca porque está en uso en Productos.',
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
                        API.deleteMarca(id_marca);
                        API.getMarca().then(setMarca);
                        Swal.fire(
                            '¡Eliminado!',
                            'La marca ha sido eliminada.',
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
                        <td class="align-top h6">Marcas de los Productos</td>
                        <td> <Link className="btn btn-outline-warning" to="/agregarmarca">+ Agregar</Link></td>
                    </tr>
                    </thead>
                    <tbody>
                    {marca.map((p) => (
                        <tr className="align-bottom" key={p.id_marca}>
                            <td>{p.nombre_marca}</td>
                            <td> <Link to={`/editmarca/${p.id_marca}`}> <button className="btn btn-outline-primary">Editar </button></Link> </td>
                            <td><button className="btn btn-outline-danger" onClick={(e) => eliminar(e, p.id_marca)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    );
}
