import React, { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from './assets/react.svg';
import * as API from './servicios/servicios';

export function AadProveedor() {
    const [nombre_proveedor, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');

    const guardarproveedor = async (event) => {
        event.preventDefault();

 // Validar si se han completado todos los campos obligatorios
 if (!nombre_proveedor ) {
  alert("Todos los campos son obligatorios. Por favor, complete todos los campos.");
  return;
}



        const respuesta = await API.AadProveedor({nombre_proveedor})
        console.log("la respuesta es ", respuesta);
        if(respuesta.status){
            setMensaje(respuesta.mensaje)
            setTimeout(()=>{
                setMensaje('')
                window.location.href='/proveedor'
                }, 3000)
        }
          else{
            alert(respuesta.mensaje)
          }
      return;
      }

        // Validar si se ha completado el campo obligatorio
        if (!nombre_proveedor) {
            alert("Por favor, complete el campo obligatorio.");
            return;
        }

        const respuesta = await API.AadProveedor({ nombre_proveedor });
        console.log("La respuesta es ", respuesta);

        if (respuesta.status) {
            setMensaje(respuesta.mensaje);
            setTimeout(() => {
                setMensaje('');
                window.location.href = '/proveedor';
            }, 3000);
        } else {
            alert(respuesta.mensaje);
        }
    }

    return (
        <>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <div>
                <h5>Ingrese el Nombre del Proveedor</h5>
            </div>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={guardarproveedor}>
                    <div className="form-floating">
                        <input
                            type="text"
                            value={nombre_proveedor}
                            onChange={(event) => setNombre(event.target.value)}
                            className="form-control"
                            placeholder="Nombre del proveedor"
                        />
                        <label htmlFor="floatingInput">Nombre del Proveedor</label>
                    </div>
                    <button className="btn btn-primary" type="submit">Guardar</button>
                    <Link to="/proveedor">Volver</Link>
                </form>
                {mensaje}
            </main>
        </>
    );
}
