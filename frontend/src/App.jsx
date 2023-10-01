import { useState } from 'react'


import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Login'
import { Principal } from './Principal'
import { Home } from './Home'
import { Registro } from './Registro'
import { Producto } from './Producto'
import { Proveedor } from './Proveedor'
import { Marca } from './Marca'

function App() {
  

  return (
    <>
     
      <Routes>
<Route path= '/' element={<Home/>} ></Route>
  <Route path= '/login' element={<Login/>} ></Route>
  <Route path= '/principal' element={<Principal/>} ></Route>
  <Route path= '/registro' element={<Registro/>} ></Route>
  <Route path= '/producto' element={<Producto/>} ></Route>
  <Route path='/proveedor' element={<Proveedor/>}></Route>
  <Route path='/marca' element={<Marca/>}></Route>

</Routes>
    </>)
    
}


export default App
