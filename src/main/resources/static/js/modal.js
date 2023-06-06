//Selccionando el modal
const modal = document.querySelector(".modal");

//Boton guardar del modal
let save_modal = document.getElementById("save-modal");

//Titulo del modal
let title_modal = document.querySelector(".modal-title");

//Referencia al eventListener del boton save_modal
let listener = null;

//Abrir y editar modal
function mostrarModal(title, option, funcData="", id=0, funcSave=""){

    //Mostrando el modal en pantalla
    modal.style.background = "rgba(0,0,0,0.5)";
    modal.style.display = "block";

    //Colocando un titulo al modal
    title_modal.innerHTML = title;

    switch (option) {
        case "save":
            limpiarInputs();
            validarEventListener();
            editElementsModal(false);
            save_modal.innerHTML = "Guardar";
            listener = () => funcSave();
            save_modal.addEventListener("click",listener);
            break;
        
        case "edit":
            limpiarInputs();
            validarEventListener();
            editElementsModal(false);
            funcData(id);
            listener = () => funcSave(id);
            save_modal.innerHTML = "Actualizar";
            save_modal.addEventListener("click",listener);
            break;

        case "show":
            limpiarInputs();
            editElementsModal(true);
            funcData(id);
            break;
    }
}

//Editar elementos del modal
function editElementsModal(bool){

    const inputs = document.querySelectorAll(".modal-body input");

    if(bool){
        //Deshabilitando inputs
        inputs.forEach(input=>{
            input.disabled = true;
        });

        //Escondiendo el boton guardar
        save_modal.style.display = "none";
    }else{
        //Habilitando inputs
        inputs.forEach(input=>{
            input.disabled = false;
        });

        //Mostrando el boton guardar
        save_modal.style.display = "block";
    }
}

function limpiarInputs(){
    document.getElementById("nombreTxt").value = "";
    document.getElementById("apellidoTxt").value = "";
    document.getElementById("emailTxt").value = "";
    document.getElementById("especialidadTxt").value = "";
    document.getElementById("direccionTxt").value = "";
    document.getElementById("telefonoTxt").value = "";
}

//Removemos el eventListener actual del boton
function validarEventListener() { 
    if (listener != null) {
        save_modal.removeEventListener("click",listener);
    }
 }

//Cerrar modal
function cerrarModal(){
    modal.style.background = "rgba(0,0,0,0)";
    modal.style.display = "none";
}
let closeModal = document.getElementById("close-modal");
closeModal.addEventListener("click",cerrarModal);