const URL ='http://localhost:3000';

//esta es mi funcion para loguearme
export async function Login(datos){
    
    const Options={
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/login`, Options);
    const data= await respuesta.json();
    return data
}

//registrooo
//esta es mi funcion para loguearme
export async function Registro(datos){
    const Options={
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/registro`, Options)
    const data= await respuesta.json()
    return data
}
//funcion de get para productos 

export async function getProducto(){
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/producto`, Options)
    const data= await respuesta.json()
    return data
}
//////funcion para eliminar un producto 
/// baja de proveedor 
export async function deleteProducto(id_producto){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/producto/${id_producto}`, Options)
    const data= await respuesta.json()
    return data
}
/////////////////////////////////////////////////////////
/// get para producto  POR ID
export async function getProductoID(id_producto){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/producto/${id_producto}`, Options)
    const data= await respuesta.json()
     return data[0];
}
/// funcion para editar un producto
export async function EditProducto(datos, id_producto){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'PUT',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/producto/${id_producto}`, Options)
    const data= await respuesta.json()
    return data
   
}
//esta es mi funcion para AGREGAR UN producto
export async function AadProducto(datos){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/producto`, Options)
    const data= await respuesta.json()
    return data
}










/// get para proveedores 
export async function getProveedor(){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/proveedor`, Options)
    const data= await respuesta.json()
    return data
}
///////////////////////////////
/// get para proveedores  POR ID
export async function getProveedorID(idproveedor){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/proveedor/${idproveedor}`, Options)
    const data= await respuesta.json()
     return data[0];
}
/// baja de proveedor 
export async function deleteProveedor(idproveedor){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/proveedor/${idproveedor}`, Options)
    const data= await respuesta.json()
    
     return data
}
/// alta de proveedor 
export async function altaProveedor(idproveedor){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/altaproveedor/${idproveedor}`, Options)
    const data= await respuesta.json()
    
     return data
}
//////////////
//////////////
//agregar un proveedor 
//esta es mi funcion para AGREGAR UN PROVEEDOR
export async function AadProveedor(datos){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/proveedor`, Options)
    const data= await respuesta.json()
    return data
}

/// funcion para editar un proveedor
export async function Editproveedor(datos, idproveedor){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'PUT',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/proveedor/${idproveedor}`, Options)
    const data= await respuesta.json()
    return data
}


/// get para Marcas 
export async function getMarca(){
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            
        }
    }
    const respuesta = await fetch(`${URL}/marca`, Options)
    const data= await respuesta.json()
    return data
}

/// eliminar una marca 
export async function deleteMarca(id_marca){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/marca/${id_marca}`, Options)
    const data= await respuesta.json()
    return data
}
//agregar unA MARCA 
//esta es mi funcion para AGREGAR UNA MARCA
export async function AadMarca(datos){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/marca`, Options)
    const data= await respuesta.json()
    return data
}
/// get para MARCAS  POR ID
export async function getMarcaID(id_marca){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/marca/${id_marca}`, Options)
    const data= await respuesta.json()
     return data[0];
}
/// funcion para editar una marca
export async function Editmarca(datos, id_marca){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'PUT',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/marca/${id_marca}`, Options)
    const data= await respuesta.json()
    return data
}


/////////////////////////////////////////////////////////////////////////////////////////////
//////////////PRESENTACION

/// get para presentacion
export async function getPresentacion(){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/presentacion`, Options)
    const data= await respuesta.json()
    return data
}

/// eliminar una presentacion
export async function deletePresentacion(id_presentacion){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/presentacion/${id_presentacion}`, Options)
    const data= await respuesta.json()
    return data
}


///////////////////////// agregar presentacion 
//esta es mi funcion para AGREGAR UNA presentacion
export async function AadPresentacion(datos){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/presentacion`, Options)
    const data= await respuesta.json()
    return data
}

/// get para presentacion  POR ID
export async function getPresentacionID(id_presentacion){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/presentacion/${id_presentacion}`, Options)
    const data= await respuesta.json()
     return data[0];
}
/// funcion para editar un presentacion
export async function EditPresentacion(datos, id_presentacion){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'PUT',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/presentacion/${id_presentacion}`, Options)
    const data= await respuesta.json()
    return data
}
/// get para ubicacion
export async function getUbicacion(){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/ubicacion`, Options)
    const data= await respuesta.json()
    return data
}
/// get para tipode productos
export async function getTipoProductos(){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/tipo_producto`, Options)
    const data= await respuesta.json()
    return data
}