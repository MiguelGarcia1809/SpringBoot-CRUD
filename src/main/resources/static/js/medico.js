
import { medicosApi, mostrarMedico} from "./obtenerMedicos.js";
import { eliminarApi } from "./eliminarMedico.js";
import { actualizarMedico } from "./actualizarMedico.js";
import { agregarMedico } from "./agregarMedico.js";

window.eliminarApi = eliminarApi;
window.mostrarMedico = mostrarMedico;
window.actualizarMedico = actualizarMedico;
window.agregarMedico = agregarMedico;

//Mostrando los medicos en pantalla
(async function cargarMedicos() {

    const medicos = await medicosApi();

    let htmlText = "";
    let content = document.getElementById("table-content");

    for(let medico of medicos){
        let html = `<tr class="table-secondary">
                        <td>${medico.id_medico}</td>
                        <td>${medico.nombre}</td>
                        <td>${medico.apellido}</td>
                        <td>${medico.especialidad}</td>
                        <td>
                            <a class="btn btn-primary" href="#" role="button" title="Info Adicional" onclick="mostrarModal('Informacion Adicional','show',mostrarMedico,${medico.id_medico})">
                                <i class="fa-solid fa-eye"></i>
                            </a>
                            <a class="btn btn-warning" href="#" role="button" title="Editar" onclick="mostrarModal('Actualizar Medico','edit',mostrarMedico,${medico.id_medico},actualizarMedico)">
                                <i class="fa-solid fa-pencil"></i>
                            </a>
                            <a class="btn btn-danger" id="trash" href="#" role="button" title="Borrar" onclick="eliminarApi(${medico.id_medico})">
                                <i class="fa-solid fa-trash"></i>
                            </a>
                        </td>
                    </tr>`;
        htmlText += html;
    }
    content.innerHTML = htmlText;
}) ()

//Editando el boton de agregar medico
let btn_agregar = document.getElementById("btn-agregar");
btn_agregar.addEventListener("click",()=>{
    mostrarModal("Guardar Medico","save","",0,agregarMedico)
})