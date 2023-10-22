import React, { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from './assets/react.svg';
import * as API from './servicios/servicios';

export function AadTipoProducto() {
    const [tipo_de_producto, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');

    const guardartipodeproducto = async (event) => {
        event.preventDefault();
        const respuesta = await API.AadTipoProducto({tipo_de_producto})
        console.log("la respuesta es ", respuesta);
        if(respuesta.status){
            setMensaje(respuesta.mensaje)
            setTimeout(()=>{
                setMensaje('')
                window.location.href='/tipo_producto'
                }, 3000)
        }
          else{
            alert(respuesta.mensaje)
          }
      return;
      }

        // Validar si se ha completado el campo obligatorio
        if (!tipo_de_producto) {
            alert("Por favor, complete el campo obligatorio.");
            return;
        }

        const respuesta = await API.AadTipoProducto({ tipo_de_producto });
        console.log("La respuesta es ", respuesta);

        if (respuesta.status) {
            setMensaje(respuesta.mensaje);
            setTimeout(() => {
                setMensaje('');
                window.location.href = '/tipo_producto';
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
                <h5>Ingrese el Tipo de Producto</h5>
            </div>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={guardartipodeproducto}>
                    <div className="form-floating">
                        <input
                            type="text"
                            value={tipo_de_producto}
                            onChange={(event) => setNombre(event.target.value)}
                            className="form-control"
                            placeholder="Tipo de producto"
                        />
                        <label htmlFor="floatingInput">Tipo de Producto</label>
                    </div>
                    <button className="btn btn-primary" type="submit">Guardar</button>
                    <Link to="/tipo_producto">Volver</Link>
                </form>
                {mensaje}
            </main>
        </>
    );
}
