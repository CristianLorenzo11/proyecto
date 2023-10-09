import { useState } from 'react'


import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Login'
import { Principal } from './Principal'
import { Home } from './Home'
import { Registro } from './Registro'
import { Producto } from './Producto'
import { AadProveedor } from './AadProveedor'
import { Marca } from './Marca'
import { Proveedor } from './Proveedor'
import { AadMarca } from './AadMarca'
import { Editproveedor } from './EditProveedor'
import { Editmarca } from './EditMarca'
import { Presentacion } from './Presentacion'
import { AadPresentacion } from './AadPresentacion'
import { EditPresentacion } from './EditPresentacion'
import { Editproducto } from './EditProducto'
import { AadProducto } from './AadProducto'




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
  <Route path='/agregarproveedor' element={<AadProveedor/>}></Route>
  <Route path='/agregarmarca' element={<AadMarca/>}></Route>
  <Route path='/editproveedor/:idproveedor' element={<Editproveedor/>}></Route>
  <Route path='/editmarca/:id_marca' element={<Editmarca/>}></Route>
  <Route path='/presentacion' element={<Presentacion/>}></Route>
  <Route path='/agregarpresentacion' element={<AadPresentacion/>}></Route>
  <Route path='/editpresentacion/:id_presentacion' element={<EditPresentacion/>}></Route>
  <Route path='/editproducto/:id_producto' element={<Editproducto/>}></Route>
  <Route path='/agregarproducto' element={<AadProducto/>}></Route>
 

</Routes>
    </>)
    
}


export default App
