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


/// get para proveedores 
export async function getProveedor(){
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/proveedor`, Options)
    const data= await respuesta.json()
    return data
}
/// baja de proveedor 
export async function deleteProveedor(idproveedor){
    const Options={
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
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


