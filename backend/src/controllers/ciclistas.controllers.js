import ciclistas from "../models/Ciclistas.js";

const getCiclistas = async (req,res) => {
    try {
        const ciclista = await ciclistas.find();
        res.json(ciclista);
    } catch (error) {
        console.log(error);
    }
}

const getCiclista = async (req,res) => {
    try {
        const ciclista = await ciclistas.findOne({_id:req.params.id});
        res.json(ciclista);
    } catch (error) {
        console.log(error);
    }
}

const insertCiclista = async (req,res) => {
    const ciclista = new ciclistas(req.body);
    try {
        const newCiclista = await ciclista.save();
        res.json(newCiclista);
    } catch (error) {
        console.log(error);
    }
}

const deleteCiclista = async (req,res) => {
    try {
        await ciclistas.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
}

const updateCiclista = async (req,res) => {
    try {
        const ciclista = await ciclistas.findOne({_id:req.params.id});

        if (req.body.nombre) {
            ciclista.nombre = req.body.nombre;
        }

        if (req.body.edad) {
            ciclista.edad = req.body.edad;
        }
        
        if (req.body.equipo) {
            ciclista.equipo = req.body.equipo;
        }

        if (req.body.mejorTiempo) {
            ciclista.mejorTiempo = req.body.mejorTiempo;
        }

        await ciclista.save();
        res.json(ciclista);

    } catch (error) {
        console.log(error);
    }
}

export {getCiclistas,getCiclista,insertCiclista,deleteCiclista,updateCiclista};