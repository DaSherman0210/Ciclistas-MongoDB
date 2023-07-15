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
import { getEquipos , selectOne , addEquipos , deleteEquipos , updateEquipos} from "./api.js";

document.addEventListener("DOMContentLoaded", ()=>{
    console.log(1);
    mostrarEquipos();
});


//Read
async function mostrarEquipos() {
    const equipo = await getEquipos();
    const contenedor = document.querySelector(".cartas");
    equipo.forEach((equipos) => {
      const {_id,nombre,medallasGanadas,fechaCreacion,cantidadCiclistas} = equipos;
      contenedor.innerHTML+=`
      <div class="card">
        <img src="../../assets/img/equipo.avif" alt="... " width="240px" height="130px" style="display:flex; margin:auto;">
        <div class="textos">
            <div style="display:flex; align-item:center;">
              <h3>${nombre}</h3>
              <a class="editar update" data-bs-toggle="modal" data-bs-target="#modalUpdate" id="${_id}" style="display:flex; align-item:center; margin=:auto;">✏️</a>
            </div>
            <div style="display:flex; justify-content:center; align-items:center; gap:2rem;">
              <p>${medallasGanadas} 🥇</p>
              <p>${fechaCreacion}</p>
              <p>${cantidadCiclistas} 🚴</p>
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
  const medallasGanadas = document.querySelector("#medallasGanadas").value;
  const fechaCreacion = document.querySelector("#fechaCreacion").value;
  const cantidadCiclistas = document.querySelector("#cantidadCiclistas").value;

  const registro = {
    nombre,
    medallasGanadas,
    fechaCreacion,
    cantidadCiclistas
  };


  if (validation(registro)) {
    alert("Todos los datos son obligatorios");
  }
  return addEquipos(registro);
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
            deleteEquipos(idCiclista);
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

        const {_id,nombre,medallasGanadas,fechaCreacion,cantidadCiclistas} = informacion;

        const nombreEdit = document.querySelector('#nameUpdate');
        const medallasEquipo = document.querySelector('#medallasGanadasUpdate');
        const fechaEquipo = document.querySelector('#fechaCreacionUpdate');
        const cantidadEquipo = document.querySelector('#cantidadCiclistasUpdate');
        const idEdit = document.querySelector('#idEdit');

        nombreEdit.value = nombre;
        medallasEquipo.value = medallasGanadas;
        fechaEquipo.value = fechaCreacion;
        cantidadEquipo.value = cantidadCiclistas;
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
    const medallasGanadas = document.querySelector('#medallasGanadasUpdate').value;
    const fechaCreacion = document.querySelector('#fechaCreacionUpdate').value;
    const cantidadCiclistas = document.querySelector('#cantidadCiclistasUpdate').value;

    const datos ={
        nombre,
        medallasGanadas,
        fechaCreacion,
        cantidadCiclistas
    }
    console.log(id);    
    console.log(datos);
    alert('Datos editados correctamente');

    return updateEquipos(datos,id);
}; 