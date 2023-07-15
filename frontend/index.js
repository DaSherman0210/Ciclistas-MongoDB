//todo -- INICIO DE LA CONFIGURACION DE LAS CARDS

const cartasContainer = document.querySelector('.cartas');
cartasContainer.addEventListener('click', (event) => {
  const target = event.target;  
  if (target.classList.contains('like')) {
    if (target.classList.contains('loke', 'fa-solid', 'fa-thumbs-up', 'fa-bounce')) {
      target.classList.remove('loke' , 'fa-bounce');
      target.classList.add('like');
    }
     else {
      target.classList.add('loke', 'fa-solid', 'fa-thumbs-up', 'fa-bounce');
    }}
    
  if (target.classList.contains('dislike')) {
    if (target.classList.contains('disloke', 'fa-solid', 'fa-thumbs-down', 'fa-bounce')) {
      target.classList.remove('disloke' , 'fa-bounce');
      target.classList.add('dislike');
    } else {
      target.classList.add('disloke', 'fa-solid', 'fa-thumbs-down', 'fa-bounce');
    }}
});

//todo -- FIN DE LA CONFIGURACION DE LAS CARDS
/* , addCiclista, deleteCiclista, selectOne, updateCiclista  */
import { getCiclistas , addCiclista , deleteCiclista , selectOne , updateCiclista} from "./api.js";

document.addEventListener("DOMContentLoaded", ()=>{
    mostrarCiclistas();
});


//Read
async function mostrarCiclistas() {
    const ciclistas = await getCiclistas();
    const contenedor = document.querySelector(".cartas");
    ciclistas.forEach((ciclista) => {
      const {_id,nombre,edad,equipo,mejorTiempo} = ciclista;
      contenedor.innerHTML+=`
      <div class="card">
        <img src="./assets/img/cycling.webp" alt="... " width="220px" height="130px" style="display:flex; margin:auto;">
        <div class="textos">
            <div style="display:flex; align-item:center;">
              <h3>${nombre}</h3>
              <a class="editar update" data-bs-toggle="modal" data-bs-target="#modalUpdate" id="${_id}" style="display:flex; align-item:center; margin=:auto;">✏️</a>
            </div>
            <div style="display:flex; justify-content:center; align-items:center; gap:2rem;">
              <p>${edad} años</p>
              <p>${equipo}</p>
              <p>${mejorTiempo}</p>
            </div>
            <div style="display: flex; gap: 1rem;">
                <span><i class="like fa-solid fa-thumbs-up"></i></span>
                <span><i class="dislike fa-solid fa-thumbs-down"></i></span>
                <a class="button eliminar" id="${_id}"></a>
            </div>
        </div>
      </div>
      `
    });
};


//Insert
const formulario = document.querySelector("#insertForm");
formulario.addEventListener("submit", insertCiclista);

function insertCiclista(e) {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const edad = document.querySelector("#edad").value;
  const equipo = document.querySelector("#equipo").value;
  const mejorTiempo = document.querySelector("#mejorTiempo").value;

  const registro = {
    nombre,
    mejorTiempo,
    equipo,
    edad
  };


  if (validation(registro)) {
    alert("Todos los datos son obligatorios");
  }
  return addCiclista(registro);
};

function validation(Objeto) {
  return !Object.values(Objeto).every((element) => element !== "");
};


//Delete
const eliminar = document.querySelector(".cartas");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if (e.target.classList.contains("eliminar")) {
        console.log(e.target);
        const idCiclista = e.target.getAttribute("id");
        const confir = confirm("Desea eliminar este Ciclista?");
        if (confir) {
            deleteCiclista(idCiclista);
        }
    }
}


//Read One
const infoCategoria = document.querySelector(".cartas");
infoCategoria.addEventListener("click",getInfo);

async function getInfo(e){
    if (e.target.classList.contains("update")) {
        const id = e.target.getAttribute("id");
        const informacion = await selectOne(id);
        console.log(informacion);

        const {_id,edad,equipo,mejorTiempo,nombre} = informacion;

        const nombreEdit = document.querySelector('#nameUpdate');
        const equipoEdit = document.querySelector('#equipoUpdate');
        const mejorTiempoEdit = document.querySelector('#mejorTiempoUpdate');
        const edadEdit = document.querySelector('#edadUpdate');
        const idEdit = document.querySelector('#idEdit');

        nombreEdit.value = nombre;
        equipoEdit.value = equipo;
        mejorTiempoEdit.value = mejorTiempo;
        edadEdit.value = edad;
        idEdit.value = _id;
    }
};


//Update
const formEdit = document.querySelector("#updateForm");
formEdit.addEventListener('submit',actualizar);

function actualizar(e){
    e.preventDefault();
    const id = document.querySelector('#idEdit').value;
    const nombre = document.querySelector('#nameUpdate').value;
    const equipo = document.querySelector('#equipoUpdate').value;
    const mejorTiempo = document.querySelector('#mejorTiempoUpdate').value;
    const edad = document.querySelector('#edadUpdate').value;

    const datos ={
        nombre,
        equipo,
        mejorTiempo,
        edad
    }
    alert('Datos editados correctamente');

    return updateCiclista(datos,id);
}; 