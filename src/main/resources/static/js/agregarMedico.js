async function agregarApi(datos){
    const request = await fetch('medicosApi',{
        method : 'POST',
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(datos)
    });
    window.location.href = "medicos.html";
}

function agregarMedico(){
    let datos = {};
    datos.nombre = document.getElementById("nombreTxt").value;
    datos.apellido = document.getElementById("apellidoTxt").value;
    datos.email = document.getElementById("emailTxt").value;
    datos.especialidad = document.getElementById("especialidadTxt").value;
    datos.direccion = document.getElementById("direccionTxt").value;
    datos.telefono = document.getElementById("telefonoTxt").value;

    agregarApi(datos);
}

export {agregarMedico}