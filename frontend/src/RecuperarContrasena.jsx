import React, { useState } from "react";
import * as API from "./servicios/servicios";

export function RecuperarContrasena() {
    const [username, setUsername] = useState('');
    const [respuesta, setRespuesta] = useState('');
    const [pregunta, setPregunta] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Define un objeto que mapea las claves a las preguntas completas
    const preguntasSecretas = {
        mascota: "¿Cuál es el nombre de tu mascota?",
        comida: "¿Cuál es tu comida preferida?",
    };

    const handleUsernameChange = (e) => {
        const newUser = e.target.value;
        setUsername(newUser);
        
        // Realiza una llamada a la API para obtener la pregunta
        API.getPregunta(newUser)
            .then((response) => {
                if (response.status) {
                    const preguntaCompleta = preguntasSecretas[response.pregunta];
                    setPregunta(preguntaCompleta || "Pregunta no encontrada");
                } else {
                    setPregunta("Pregunta no encontrada");
                }
            });
    };

    const handleChangePassword = async () => {
        if (newPassword === confirmPassword) {
            const result = await API.cambiarContrasena(username, respuesta, newPassword);
            if (result.status) {
                alert("Contraseña cambiada exitosamente");
                window.location.href = '/login';
            } else {
                alert("Error al cambiar contraseña");
            }
        } else {
            alert("Las contraseñas no coinciden");
        }
    };

    return (
        <div>
            <h2>Recuperar Contraseña</h2>

            <div>
                <label>Usuario:</label>
                <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>

            {pregunta && (
                <div>
                    <label>Pregunta:</label>
                    <p>{pregunta}</p>
                </div>
            )}

            <div>
                <label>Respuesta secreta:</label>
                <input
                    type="text"
                    value={respuesta}
                    onChange={(e) => setRespuesta(e.target.value)}
                />
            </div>

            <div>
                <label>Nueva Contraseña:</label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>

            <div>
                <label>Confirmar Contraseña:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>

            <div>
                <button className="btn btn-primary w-100 py-2" onClick={handleChangePassword}>Cambiar Contraseña</button>
            </div>

            <div>
                <button
                    onClick={() => window.history.back()}
                    style={{
                        background: "none",
                        border: "none",
                        color: "blue",
                        textDecoration: "none",
                        cursor: "pointer",
                    }}
                >
                    Volver
                </button>
            </div>
        </div>
    );
}
