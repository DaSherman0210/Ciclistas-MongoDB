import premios from "../models/Premios.js";

const getPremio = async (req, res) =>{
    const premio = await premios.find();
    res.json(premio);
}

const onePremio = async (req, res) =>{
    const prmeio = await premios.findOne({_id: req.params.id});
    res.json(prmeio);
}

const addPremio = async (req, res) =>{
    const premio = new premios(req.body);
    try {
        const nuevoPremio = await premio.save();
        res.json(nuevoPremio)
    } catch (error) {
        console.log(error);
    }
}

const deletePremio = async (req, res) =>{
    try {
        await premios.deleteOne({_id: req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Premio no Existente"});
    }
}

const updatePremio = async (req, res) =>{
    try {
        const premio = await premios.findOne({_id: req.params.id});

        if (req.body.Ganador) {
            premio.Ganador = req.body.Ganador
        }

        if (req.body.mejorTiempo) {
            premio.mejorTiempo = req.body.mejorTiempo
        }

        if (req.body.diferenciaMinutos1roy2do) {
            premio.diferenciaMinutos1roy2do = req.body.diferenciaMinutos1roy2do
        }

        if (req.body.segundoPuesto) {
            premio.segundoPuesto = req.body.segundoPuesto
        }

        if (req.body.tercerPuesto) {
            premio.tercerPuesto = req.body.tercerPuesto
        }

        await premio.save();
        res.json(premio);
    } catch (error) {
        res.status(404);
        res.send({error: "Premio no Existente"})
    }
}

export { getPremio, onePremio, addPremio, deletePremio, updatePremio };