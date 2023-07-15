const urlAll = "http://localhost:7003/api/ciclistas/all";
const urlAdd = "http://localhost:7003/api/ciclistas/add";
const urlDelete = "http://localhost:7003/api/ciclistas/delete";
const urlOne = "http://localhost:7003/api/ciclistas/all";
const urlUpdate = "http://localhost:7003/api/ciclistas/update";

//Read
export const getCiclistas = async () =>{
    try {
        const ciclistas = await fetch(urlAll);
        const infoCiclistas = ciclistas.json();
        return infoCiclistas;
    } catch (error) {
        console.log(error);
    }
}

//Insert
export const addCiclista = async (registro) => {
    try {
      await fetch(`${urlAdd}/`, {
        method: "POST",
        body: JSON.stringify(registro),
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location = "index.html";
    } catch (error) {
        console.log(error);
    }
};

//Delete
export const deleteCiclista = async (id) =>{
    try {
        await fetch(`${urlDelete}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
            }
        });
        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
};

//Read One
export async function selectOne(id) {
    try {
        const response = await fetch(`${urlOne}/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

//Update
export async function updateCiclista(data,id){
    try {
            await fetch(`${urlUpdate}/${id}`,{
            method: "PATCH",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
};