import React, { useState } from "react";
import "./login.css";
import reactLogo from './assets/react.svg';
import { Link } from "react-router-dom";
import * as API from './servicios/servicios';

export function Login() {
    const [user, setUsername]= useState('');
    const [pass, setPasword]= useState('');
    const [mensaje, setMensaje]= useState('');

    const ingresar = async(event) => {
        event.preventDefault();
        const usuario = await API.Login({user, pass});
        if (usuario.status) {
            window.localStorage.setItem('usuario', JSON.stringify(usuario.datos[0]));
            window.localStorage.setItem('token', JSON.stringify(usuario.token));
            alert(usuario.mensaje);
            window.location.href = '/principal';
        } else {
            setMensaje(usuario.mensaje);
            setTimeout(() => {
                setMensaje('');
            }, 5000);
        }
    };

    return (
        <main className="form-signin w-100 m-auto">
            <form onSubmit={ingresar}>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <h1 className="h3 mb-3 fw-normal">Por favor Ingresar</h1>
                {mensaje && 
                    <div className="alert alert-warning" role="alert">
                        {mensaje}
                    </div>
                }
                <div className="form-floating">
                    <input 
                        required
                        type="text" 
                        value={user}
                        onChange={(event) => setUsername(event.target.value)}
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="cris@gmail.com" 
                    />
                    <label htmlFor="floatingInput">Usuario</label>
                </div>
                <div className="form-floating">
                    <input
                        required 
                        type="password" 
                        value={pass} 
                        onChange={(event) => setPasword(event.target.value)}
                        className="form-control" 
                        id="floatingPassword" 
                        placeholder="Password" 
                    />
                    <label htmlFor="floatingPassword">Contraseña</label>
                </div>
                <button className="btn btn-primary" type="submit">Ingresar</button>
                <div className="mt-3">
                    <Link to="/recuperarContrasena">¿Olvidaste tu contraseña?</Link>
                </div>
                <p className="mt-3">
                    <Link to="/">volver</Link>
                </p>
            </form>
        </main>
    );
}
