import React, { useState } from "react";
import * as API from "./servicios/servicios";

export function RecuperarContrasena() {
    const [username, setUsername] = useState('');
    const [respuesta, setRespuesta] = useState('');
    const [pregunta, setPregunta] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRecuperar = async () => {
        const data = await API.getPregunta(username);
        if (data) {
            setPregunta(data.pregunta);
        } else {
            alert("Usuario no encontrado");
        }
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
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div>
                <p>INGRESE LA RESPUESTA DE SU PREGUNTA SECRETA</p>
            </div>

            {pregunta && (
                <div>
                    <label>Pregunta:</label>
                    <p>{pregunta}</p>
                </div>
            )}

            <div>
                <label>Respuesta:</label>
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
                <button onClick={handleChangePassword}>Cambiar Contraseña</button>
            </div>

            <div>
                {}
                <button
                    onClick={() => window.history.back()}
                    style={{
                        background: "none",
                        border: "none",
                        color: "blue",
                        textDecoration: "none", // Elimina el subrayado
                        cursor: "pointer",
                    }}
                >
                    Volver
                </button>
            </div>
        </div>
    );
}
