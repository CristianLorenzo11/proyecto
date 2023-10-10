// App.jsx
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Principal } from "./Principal";
import { Home } from "./Home";
import { Registro } from "./Registro";
import { Producto } from "./Producto";
import { AadProveedor } from "./AadProveedor";
import { Marca } from "./Marca";
import { Proveedor } from "./Proveedor";
import { AadMarca } from "./AadMarca";
import { Editproveedor } from "./EditProveedor";
import { Editmarca } from "./EditMarca";
import { Presentacion } from "./Presentacion";
import { AadPresentacion } from "./AadPresentacion";
import { EditPresentacion } from "./EditPresentacion";
import { Editproducto } from "./EditProducto";
import { AadProducto } from "./AadProducto";
import { RecuperarContrasena } from "./RecuperarContrasena";
import Encabezado from "./Encabezado"; // Importando el encabezado

function App() {
  return (
    <>
      <Encabezado />
      <div className="espacio-bajo-encabezado">
        {/* Esto da espacio para el encabezado y permite que el contenido principal ocupe el espacio restante */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/producto" element={<Producto />} />
          <Route path="/proveedor" element={<Proveedor />} />
          <Route path="/marca" element={<Marca />} />
          <Route path="/agregarproveedor" element={<AadProveedor />} />
          <Route path="/agregarmarca" element={<AadMarca />} />
          <Route path="/editproveedor/:idproveedor" element={<Editproveedor />} />
          <Route path="/editmarca/:id_marca" element={<Editmarca />} />
          <Route path="/presentacion" element={<Presentacion />} />
          <Route path="/agregarpresentacion" element={<AadPresentacion />} />
          <Route path="/editpresentacion/:id_presentacion" element={<EditPresentacion />} />
          <Route path="/editproducto/:id_producto" element={<Editproducto />} />
          <Route path="/agregarproducto" element={<AadProducto />} />
          <Route path="/recuperarContrasena" element={<RecuperarContrasena />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
