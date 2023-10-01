import React from "react";
import "./Menu.css"
import { Link } from "react-router-dom";
import reactLogo from './assets/react.svg'

export function Home(){
    return(
        < >
        
          
         <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>BIENVENIDO A</h1>
      <h1> MI PROYECTO FINAL  </h1>
      <div>
      
        <ul>
            {/* <li><Link to="/">home</Link></li> */}
            <li className="h3"><Link to="/login">Login</Link></li>
            <li className="h3"><Link to="/registro">Registro</Link></li>
            
      </ul>
        </div>
        </>
    )
}