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
import { getEtapas , selectOne , addEtapa , deleteEtapa , updateEtapa} from "./api.js";

document.addEventListener("DOMContentLoaded", ()=>{
    mostrarEtapas();
});


//Read
async function mostrarEtapas() {
    const equipo = await getEtapas();
    const contenedor = document.querySelector(".cartas");
    equipo.forEach((equipos) => {
      const {_id,nombre,kilometrosTotales,cantidadParticipantes,primerPuesto,segundoPuesto,tercerPuesto} = equipos;
      contenedor.innerHTML+=`
      <div class="card">
        <img src="../../assets/img/etapas.jpg" alt="... " width="260px" height="130px" style="display:flex; margin:auto;">
        <div class="textos">
            <div style="display:flex; align-item:center;">
              <h3>${nombre}</h3>
              <a class="editar update" data-bs-toggle="modal" data-bs-target="#modalUpdate" id="${_id}" style="display:flex; align-item:center; margin=:auto;">✏️</a>
            </div>
            <div style="display:flex;align-items:center; gap:2rem;">
                <p>${kilometrosTotales} Km</p>
                <p>${cantidadParticipantes} Participantes 🚴</p>
            </div>
            <div style="display:flex; gap:1rem;
            ">
                <p>${primerPuesto}🎖️</p>
                <p>${segundoPuesto}🥈</p>
                <p>${tercerPuesto}🥉</p>
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
  const kilometrosTotales = document.querySelector("#kilometrosTotales").value;
  const cantidadParticipantes = document.querySelector("#cantidadParticipantes").value;
  const primerPuesto = document.querySelector("#primerPuesto").value;
  const segundoPuesto = document.querySelector("#segundoPuesto").value;
  const tercerPuesto = document.querySelector("#tercerPuesto").value;

  const registro = {
    nombre,
    kilometrosTotales,
    cantidadParticipantes,
    primerPuesto,
    segundoPuesto,
    tercerPuesto
  };


  if (validation(registro)) {
    alert("Todos los datos son obligatorios");
  }
  return addEtapa(registro);
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
            deleteEtapa(idCiclista);
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

        const {_id,nombre,kilometrosTotales,cantidadParticipantes,primerPuesto,segundoPuesto,tercerPuesto} = informacion;

        const nombreEdit = document.querySelector('#nameUpdate');
        const kilometros = document.querySelector('#kilometrosTotalesUpdate');
        const participantes = document.querySelector('#cantidadParticipantesUpdate');
        const primero = document.querySelector('#primerPuestoUpdate');
        const segundo = document.querySelector('#segundoPuestoUpdate');
        const tercero = document.querySelector('#tercerPuestoUpdate');
        const idEdit = document.querySelector('#idEdit');

        nombreEdit.value = nombre;
        kilometros.value = kilometrosTotales;
        participantes.value = cantidadParticipantes;
        primero.value = primerPuesto;
        segundo.value = segundoPuesto;
        tercero.value = tercerPuesto;
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
    const kilometrosTotales = document.querySelector('#kilometrosTotalesUpdate').value;
    const cantidadParticipantes = document.querySelector('#cantidadParticipantesUpdate').value;
    const primerPuesto = document.querySelector('#primerPuestoUpdate').value;
    const segundoPuesto = document.querySelector('#segundoPuestoUpdate').value;
    const tercerPuesto = document.querySelector('#tercerPuestoUpdate').value;

    const datos ={
        nombre,  
        kilometrosTotales,
        cantidadParticipantes,
        primerPuesto,
        segundoPuesto,
        tercerPuesto
    }
    console.log(id);    
    console.log(datos);
    alert('Datos editados correctamente');

    return updateEtapa(datos,id);
}; 