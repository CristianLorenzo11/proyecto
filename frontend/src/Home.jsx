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
      <h1> Outlet Zona Deportiva</h1>
      <h3>Deposito</h3>
      <div>
    <ul className="facebook-list">
        {/* <li><Link to="/">home</Link></li> */}
        <li><Link to="/login">Ingresar</Link></li>
        <li><Link to="/registro">Registro</Link></li>
    </ul>
</div>

        </>
    )
}