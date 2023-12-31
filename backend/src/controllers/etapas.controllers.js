import etapas from "../models/Etapas.js";

const getEtapas = async (req,res) => {
    try {
        const etapa = await etapas.find();
        res.json(etapa);
    } catch (error) {
        console.log(error);
    }
}

const getEtapa = async (req,res) => {
    try {
        const etapa = await etapas.findOne({_id:req.params.id})
        res.json(etapa)
    } catch (error) {
        console.log(error);
    }
}

const insertEtapa = async (req,res) => {
    try {

        const {nombre,primerPuesto,segundoPuesto,tercerPuesto,kilometrosTotales,cantidadParticipantes} = req.body;
        const etapa = new etapas({nombre,primerPuesto,segundoPuesto,tercerPuesto,kilometrosTotales,cantidadParticipantes}) 

        //todo -- Validacion de etapa

        const existeEtapa = await etapas.findOne({nombre});
        if(existeEtapa){
            return res.status(400).json({
                msg:"Esta etapa ya se registro"
            })
        }

        const newEtapa = await etapa.save();
        res.json(newEtapa);
    } catch (error) {
        console.log(error);
    }
}

const deleteEtapa = async (req,res) => {
    try {
        await etapas.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
}

const updateEtapa = async (req,res) => {
    try {
        const etapa = await etapas.findOne({_id: req.params.id})

        if (req.body.nombre) {
            etapa.nombre = req.body.nombre
        }

        if (req.body.kilometrosTotales) {
            etapa.kilometrosTotales = req.body.kilometrosTotales
        }

        if (req.body.cantidadParticipantes) {
            etapa.cantidadParticipantes = req.body.cantidadParticipantes
        }

        if (req.body.primerPuesto) {
            etapa.primerPuesto = req.body.primerPuesto
        }

        if (req.body.segundoPuesto) {
            etapa.segundoPuesto = req.body.segundoPuesto
        }

        if (req.body.tercerPuesto) {
            etapa.tercerPuesto = req.body.tercerPuesto
        }

        await etapa.save();
        res.json(etapa);
    } catch (error) {
        res.status(404);
        res.send({error: "Etapa no Existe"})
    }
}

export {getEtapas,getEtapa,insertEtapa,deleteEtapa,updateEtapa};