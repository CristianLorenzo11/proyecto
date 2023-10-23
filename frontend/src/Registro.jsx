import React, { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from './assets/react.svg';
import * as API from "./servicios/servicios";

export function Registro() {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState('');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [correo, setCorreo] = useState('');
    const [securityQuestion, setSecurityQuestion] = useState('');
    const [securityAnswer, setSecurityAnswer] = useState('');

    const registro = async(event) => {
        event.preventDefault();
  // Validar si se han completado todos los campos obligatorios
  if (!nombre || !apellido || !dni || !user || !pass || !correo || !id_ubicacion  || securityQuestion || securityAnswer) {
    alert("Todos los campos son obligatorios. Por favor, complete todos los campos.");
    return;
}
        const datos = {
            nombre, 
            apellido, 
            dni, 
            user, 
            pass, 
            correo,
            securityQuestion,
            securityAnswer
        };

        const response = await API.Registro(datos);
        if (response.status) {
            alert(response.mensaje);
            window.location.href = '/login';
        } else {
            alert(response.mensaje);
        }
    };

    return(
        <main className="form-signin w-100 m-auto">
            <form onSubmit={registro}>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <h1 className="h3 mb-3 fw-normal">Registro</h1>

                <div className="form-floating">
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" id="nombreInput" placeholder="Juan" />
                    <label htmlFor="nombreInput">Nombre</label>
                </div>

                <div className="form-floating">
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} className="form-control" id="apellidoInput" placeholder="Pérez" />
                    <label htmlFor="apellidoInput">Apellido</label>
                </div>

                <div className="form-floating">
                    <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} className="form-control" id="dniInput" placeholder="12345678" />
                    <label htmlFor="dniInput">DNI</label>
                </div>

                <div className="form-floating">
                    <input type="text" value={user} onChange={(e) => setUser(e.target.value)} className="form-control" id="userInput" placeholder="usuario123" />
                    <label htmlFor="userInput">Usuario</label>
                </div>

                <div className="form-floating">
                    <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} className="form-control" id="passInput" placeholder="Contraseña" />
                    <label htmlFor="passInput">Contraseña</label>
                </div>

                <div className="form-floating">
                    <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} className="form-control" id="correoInput" placeholder="ejemplo@correo.com" />
                    <label htmlFor="correoInput">Correo Electrónico</label>
                </div>

                <div className="form-floating">
                    <select value={securityQuestion} onChange={(e) => setSecurityQuestion(e.target.value)} className="form-control" id="securityQuestionSelect">
                        <option value="">Selecciona una pregunta de seguridad...</option>
                        <option value="mascota">¿Cuál es el nombre de tu mascota?</option>
                        <option value="comida">¿Cuál es tu comida preferida?</option>
                    </select>
                    <label htmlFor="securityQuestionSelect">Pregunta de seguridad</label>
                </div>

                <div className="form-floating">
                    <input type="text" value={securityAnswer} onChange={(e) => setSecurityAnswer(e.target.value)} className="form-control" id="securityAnswerInput" placeholder="Respuesta" />
                    <label htmlFor="securityAnswerInput">Respuesta de seguridad</label>
                </div>

                <button className="btn btn-primary w-100 py-2" type="submit">Registrarse</button>
                <p></p>
                <p></p>
                <Link to="/">volver</Link>
            </form>
        </main>
    );
}
