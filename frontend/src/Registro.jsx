import React, { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import * as API from "./servicios/servicios"


export function Registro(){

    const [nombre, setNombre]= useState('')
    const [apellido, setApellido]= useState('')
    const [dni, setDni]= useState('')
    const [user, setUser]= useState('')
    const [pass, setPass]= useState('')
    const [correo, setCorreo]= useState('')

    const registro = async(event)=>{
        event.preventDefault();
        const registro = await API.Registro({nombre, apellido, dni, user, pass, correo})
        console.log(registro);
        if(registro.status){
            alert(registro.mensaje)
            window.location.href='/login'
         }else{
           alert(registro.mensaje)
      }
      
      }

    return(
<>
<main class="form-signin w-100 m-auto">
  <form onSubmit={registro}>
  <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    <h1 class="h3 mb-3 fw-normal">Registro</h1>
    <div class="form-floating">
        <input type="text" 
         value={nombre}
         onChange={(event)=>setNombre(event.target.value)}
        class="form-control" 
        id="floatingInput" 
        placeholder="Cristian"
        />
        <label for="floatingInput"> Nombre</label>
      </div>
      <div class="form-floating">
        <input type="text" 
         value={apellido}
         onChange={(event)=>setApellido(event.target.value)}
        class="form-control" 
        id="floatingInput" 
        placeholder="Cristian"/>
        <label for="floatingInput">Apellido</label>
      </div>
      <div class="form-floating">
        <input 
        value={dni}
        onChange={(event)=>setDni(event.target.value)}
        class="form-control" 
        id="floatingInput" 
        placeholder="123456678"
        inputMode="numeric" 
        pattern="[0-9]*" 
        />
        <label for="dni">DNI:</label>
      </div>
    <div class="form-floating">
        <input 
        type="text" 
        value={user}
        onChange={(event)=>setUser(event.target.value)}
        class="form-control" 
        id="floatingInput" 
        placeholder="Cristian"/>
        <label for="floatingInput">Usuario</label>
      </div>
   
    <div class="form-floating">
      <input type="password" 
      value={pass}
      onChange={(event)=>setPass(event.target.value)}
      class="form-control" 
      id="floatingPassword" 
      placeholder="Password"/>
      <label for="floatingPassword">Contraseña</label>
    </div>
    <div class="form-floating">
      <input type="email" 
        value={correo}
        onChange={(event)=>setCorreo(event.target.value)}
        class="form-control" 
        id="floatingUser" 
        placeholder="cris@gmail.com"/>
      <label for="floatingInput">correo electronico </label>
    </div>
    <button class="btn btn-primary w-100 py-2" type="submit">Registrarse</button>
    <p></p>
    <p></p>
    <Link to="/">volver</Link>
  </form>
</main>

</>
    )
}