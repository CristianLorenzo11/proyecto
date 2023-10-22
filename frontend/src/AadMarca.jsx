import React, { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import * as API from './servicios/servicios'

export function AadMarca(){
    const [nombre_marca, setNombre] = useState('')
    const [mensaje, setMensaje] = useState('')

    const guardarmarca = async(event) => {
        event.preventDefault();

        if (!nombre_marca) {
            setMensaje('Por favor, complete todos los campos.')
            return;
        }

        const respuesta = await API.AadMarca({nombre_marca})
        console.log("la respuesta es ", respuesta);

        if (respuesta.status) {
            setMensaje(respuesta.mensaje)
            setTimeout(() => {
                setMensaje('')
                window.location.href = '/marca'
            }, 3000)
        } else {
            alert(respuesta.mensaje)
        }
    }

    return (
        <>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <div><h5>Ingrese el Nombre de la Marca</h5></div>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={guardarmarca}>
                    <div className="form-floating">
                        <input 
                            type="text" 
                            value={nombre_marca}
                            onChange={(event) => setNombre(event.target.value)}
                            className="form-control" 
                            placeholder="Nombre de la Marca"
                        />
                        <label htmlFor="floatingInput">Nombre de la Marca</label>
                    </div>
                    <button className="btn btn-primary" type="submit">Guardar</button>
                    <Link to="/marca">Volver</Link>
                </form>
                {mensaje}
            </main>
        </>
    )
}
