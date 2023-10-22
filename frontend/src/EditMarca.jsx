import React, { useEffect, useState } from "react";
import reactLogo from './assets/react.svg';
import * as API from './servicios/servicios';
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

export function Editmarca() {
    const [nombre_marca, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');
    const { id_marca } = useParams();

    useEffect(() => {
        traerdatos();
    }, []);

    const traerdatos = async () => {
        const datos_marca = await API.getMarcaID(id_marca);
        console.log(datos_marca);
        setNombre(datos_marca.nombre_marca);
    };

    const editarmarca = async (event) => {
        event.preventDefault();

        Swal.fire({
            title: '¿Deseas guardar los cambios?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            denyButtonText: 'No guardar',
        }).then(async (result) => {
            if (result.isConfirmed) {
                const respuesta = await API.Editmarca({ nombre_marca }, id_marca);
                console.log("la respuesta es ", respuesta);
                if (respuesta.status) {
                    Swal.fire('¡Guardado!', '', 'success');
                    setMensaje(respuesta.mensaje);
                    setTimeout(() => {
                        setMensaje('');
                        window.location.href = '/marca';
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
            <div><h5>Ingrese datos de la Marca</h5></div>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={editarmarca}>
                    <div className="form-floating">
                        <input
                            type="text"
                            value={nombre_marca}
                            onChange={(event) => setNombre(event.target.value)}
                            className="form-control"
                            placeholder="Nombre de la marca"
                        />
                        <label htmlFor="floatingInput">Nombre de la Marca</label>
                    </div>
                    <button className="btn btn-primary" type="submit">Guardar Edicion</button>
                    <Link to="/marca">Volver</Link>
                </form>
                {mensaje}
            </main>
        </>
    );
}
