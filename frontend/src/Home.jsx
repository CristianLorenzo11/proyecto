import React from "react";
import "./Menu.css"
import { Link } from "react-router-dom";
import reactLogo from './assets/react.svg'

export function Home(){
    return(
        <>
         <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Bienvenido a mi Proyecto Final</h1>
      <div>
      
        <ul>
            {/* <li><Link to="/">home</Link></li> */}
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/registro">Registro</Link></li>
            
      </ul>
        </div>
        
        </>
    )
}