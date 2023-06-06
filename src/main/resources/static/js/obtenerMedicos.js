
//Obtener todos los medicos
async function medicosApi() {
    const request = await fetch('medicosApi',{
        method : "GET",
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        }
    });

    return await request.json();
}

//Obtener medico por id
async function medicosIdApi(id) {

    const request = await fetch('medicosApi/' + id,{
        method : "GET",
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        }
    })
    return await request.json();
}

async function mostrarMedico(id){
    const medico = await medicosIdApi(id);

    //Mostrando datos del medico en pantalla
    document.getElementById("nombreTxt").value = medico.nombre;
    document.getElementById("apellidoTxt").value = medico.apellido;
    document.getElementById("emailTxt").value = medico.email;
    document.getElementById("especialidadTxt").value = medico.especialidad;
    document.getElementById("direccionTxt").value = medico.direccion;
    document.getElementById("telefonoTxt").value = medico.telefono;
}

export {medicosApi,mostrarMedico}