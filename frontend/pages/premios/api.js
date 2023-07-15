const urlAll = "http://localhost:7003/api/premios/all";
const urlAdd = "http://localhost:7003/api/premios/add";
const urlDelete = "http://localhost:7003/api/premios/delete";
const urlOne = "http://localhost:7003/api/premios/all";
const urlUpdate = "http://localhost:7003/api/premios/update";

//Read
export const getPremios = async () =>{
    try {
        const premios = await fetch(urlAll);
        const infopremios = premios.json();
        return infopremios;
    } catch (error) {
        console.log(error);
    }
}

//Insert
export const addPremios = async (registro) => {
    try {
      await fetch(`${urlAdd}/`, {
        method: "POST",
        body: JSON.stringify(registro),
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location.href = "./premios.html"
    } catch (error) {
        console.log(error);
    }
};

//Delete
export const deletePremio = async (id) =>{
    try {
        await fetch(`${urlDelete}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
            }
        });
        window.location.href = "./premios.html"
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
export async function updatePremios(data,id){
    try {
            await fetch(`${urlUpdate}/${id}`,{
            method: "PATCH",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "./premios.html"
    } catch (error) {
        console.log(error);
    }
};