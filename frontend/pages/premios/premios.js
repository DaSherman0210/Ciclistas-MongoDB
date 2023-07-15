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
import { getPremios , selectOne , addPremios , deletePremio , updatePremios} from "./api.js";

document.addEventListener("DOMContentLoaded", ()=>{
    mostrarPremios();
});


//Read
async function mostrarPremios() {
    const premio = await getPremios();
    const contenedor = document.querySelector(".cartas");
    premio.forEach((premios) => {
      const {_id,Ganador,mejorTiempo,diferenciaMinutos1roy2do,segundoPuesto,tercerPuesto} = premios;
      contenedor.innerHTML+=`
      <div class="card">
        <img src="../../assets/img/trofeos.jpg" alt="... " width="260px" height="130px" style="display:flex; margin:auto;">
        <div class="textos">
            <div style="display:flex; align-item:center;">
              <h3>🎖️${Ganador}</h3>
              <a class="editar update" data-bs-toggle="modal" data-bs-target="#modalUpdate" id="${_id}" style="display:flex; align-item:center; margin=:auto;">✏️</a>
            </div>
            <div style="display:flex;align-items:center; gap:2rem;">
                <p>${mejorTiempo} h</p>
                <p>${diferenciaMinutos1roy2do}min de diferencia</p>
            </div>
            <div style="display:flex; gap:1rem;
            ">
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
  const Ganador = document.querySelector("#ganador").value;
  const mejorTiempo = document.querySelector("#mejorTiempo").value;
  const diferenciaMinutos1roy2do = document.querySelector("#diferenciaMinutos1roy2do").value;
  const segundoPuesto = document.querySelector("#segundoPuesto").value;
  const tercerPuesto = document.querySelector("#tercerPuesto").value;

  const registro = {
    Ganador,
    mejorTiempo,
    diferenciaMinutos1roy2do,
    segundoPuesto,
    tercerPuesto
  };


  if (validation(registro)) {
    alert("Todos los datos son obligatorios");
  }
  return addPremios(registro);
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
            deletePremio(idCiclista);
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

        const {_id,Ganador,mejorTiempo,diferenciaMinutos1roy2do,segundoPuesto,tercerPuesto} = informacion;

        const ganador = document.querySelector("#ganadorUpdate");
        const mejor = document.querySelector("#mejorTiempoUpdate");
        const diferencia = document.querySelector("#diferenciaMinutos1roy2doUpdate");
        const segundo = document.querySelector("#segundoPuestoUpdate");
        const tercer = document.querySelector("#tercerPuestoUpdate");
        const idEdit = document.querySelector('#idEdit');

        ganador.value = Ganador;
        mejor.value = mejorTiempo;
        diferencia.value = diferenciaMinutos1roy2do;
        segundo.value = segundoPuesto;
        tercer.value = tercerPuesto;
        idEdit.value = _id;
    }
};


//Update
const formEdit = document.querySelector("#updateForm");
formEdit.addEventListener('submit',actualizar);

function actualizar(e){
    e.preventDefault();
    const id = document.querySelector('#idEdit').value;
    const Ganador = document.querySelector("#ganadorUpdate").value;
    const mejorTiempo = document.querySelector("#mejorTiempoUpdate").value;
    const diferenciaMinutos1roy2do = document.querySelector("#diferenciaMinutos1roy2doUpdate").value;
    const segundoPuesto = document.querySelector("#segundoPuestoUpdate").value;
    const tercerPuesto = document.querySelector("#tercerPuestoUpdate").value;

    const datos ={
        Ganador,  
        mejorTiempo,
        diferenciaMinutos1roy2do,
        segundoPuesto,
        tercerPuesto
    }
    console.log(id);    
    console.log(datos);
    alert('Datos editados correctamente');

    return updatePremios(datos,id);
}; 