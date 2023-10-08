import React, { useEffect, useState } from "react";

import reactLogo from './assets/react.svg'
import { Menu } from "./Menu";

export function Principal(){
 
    return(
<>
<div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    
     

<h1> Outlet Zona Deportiva</h1>
<h3>Deposito</h3>

<Menu/>
</>
    )
}