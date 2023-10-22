import React, { useEffect, useState } from "react";
import reactLogo from './assets/react.svg';
import * as API from './servicios/servicios';
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

export function EditTipoProducto() {
    const [tipo_de_producto, setTipoProducto] = useState('');
    const [mensaje, setMensaje] = useState('');
    const { id_tipo_producto } = useParams();

    useEffect(() => {
        traerdatos();
    }, []);

    const traerdatos = async () => {
        const datos_tipoproducto = await API.geTTipoProductoID(id_tipo_producto);
        console.log(datos_tipoproducto);
        setTipoProducto(datos_tipoproducto.tipo_de_producto);
    };

    const editartipoproducto = async (event) => {
        event.preventDefault();
        if (!tipo_de_producto ) {
            alert("Todos los campos son obligatorios. Por favor, complete todos los campos.");
            return;
          }
  


        Swal.fire({
            title: '¿Deseas guardar los cambios?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            denyButtonText: 'No guardar',
        }).then(async (result) => {
            if (result.isConfirmed) {
                const respuesta = await API.EditTipoProducto({ tipo_de_producto }, id_tipo_producto);
                console.log("la respuesta es ", respuesta);
                if (respuesta.status) {
                    Swal.fire('¡Guardado!', '', 'success');
                    setMensaje(respuesta.mensaje);
                    setTimeout(() => {
                        setMensaje('');
                        window.location.href = '/tipo_producto';
                    }, 3000);
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: respuesta.mensaje,
                    });
                }
            } else if (result.isDenied) {
                Swal.fire('Los cambios no se han guardado', '', 'info');
            }
        });
    };

    return (
        <>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <div><h5>Ingrese datos del Proveedor</h5></div>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={editartipoproducto}>
                    <div className="form-floating">
                        <input
                            type="text"
                            value={tipo_de_producto}
                            onChange={(event) => setTipoProducto(event.target.value)}
                            className="form-control"
                            placeholder="Nombre del proveedor"
                        />
                        <label htmlFor="floatingInput">Tipo de producto</label>
                    </div>
                    <button className="btn btn-primary" type="submit">Guardar Edicion</button>
                    <Link to="/tipo_producto">Volver</Link>
                </form>
                {mensaje}
            </main>
        </>
    );
}
