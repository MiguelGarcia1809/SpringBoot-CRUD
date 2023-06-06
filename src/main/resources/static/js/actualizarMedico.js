async function actualizarApi(id,datos) {
    const request = await fetch('medicosApi/'+id,{
        method : 'PUT',
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(datos)
    });

}

async function actualizarMedico(id){
    let datos = {};
    datos.nombre = document.getElementById("nombreTxt").value;
    datos.apellido = document.getElementById("apellidoTxt").value;
    datos.email = document.getElementById("emailTxt").value;
    datos.especialidad = document.getElementById("especialidadTxt").value;
    datos.direccion = document.getElementById("direccionTxt").value;
    datos.telefono = document.getElementById("telefonoTxt").value;

    actualizarApi(id,datos);

    location.reload();
}

export {actualizarMedico}