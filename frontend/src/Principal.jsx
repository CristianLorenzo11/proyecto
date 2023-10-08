import React, { useEffect, useState } from "react";

import reactLogo from './assets/react.svg'
import { Menu } from "./Menu";

export function Principal(){
  const [usuario, setUsuario]= useState('')
    useEffect(()=>{
        const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'))
        if(usuarioLogueado){
          console.log(usuarioLogueado.user)
            setUsuario(usuarioLogueado)
        }else{
            window.location.href='/'
        }
      },[])
    return(
<>
<div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    
     
      
<h1> Pantalla Principal</h1>
<div className="h3">   {usuario.user}</div>
<Menu/>
</>
    )
}