import equipos from "../models/Equipos.js";

const getEquipos = async (req,res) => {
    try {
        const equipo = await equipos.find();
        res.json(equipo) 
    } catch (error) {
        console.log(error);
    }
}

const getEquipo = async (req,res) => {
    try {
        const equipo = await equipos.findOne({_id:req.params.id});
        res.json(equipo);
    } catch (error) {
        console.log(error);
    }
}

const insertEquipo = async (req,res) => {
    try {
        const {nombre,medallasGanadas,fechaCreacion,cantidadCiclistas} = req.body;
        const equipo = new equipos({nombre,medallasGanadas,fechaCreacion,cantidadCiclistas});

        //todo -- Validacion del equipo

        const existeEquipo = await equipos.findOne({nombre});
        if (existeEquipo) {
            return res.status(400).json({
                msg: "Este equipo ya esta registado"
            });
        }    

        const newEquipo = await equipo.save();
        res.json(newEquipo);
    } catch (error) {
        console.log(error);
    }
}

const deleteEquipo = async (req,res) => { 
    try {
        await equipos.deleteOne({_id:req.params.id})
        res.status(204).send();
    } catch (error) {
        console.log(error);
    }
}

const updateEquipo = async (req,res) => {
    try {
        const equipo = await equipos.findOne({_id:req.params.id})

        if (req.body.nombre) {
            equipo.nombre = req.body.nombre;
        }

        if (req.body.medallasGanadas) {
            equipo.medallasGanadas = req.body.medallasGanadas;
        }

        if (req.body.fechaCreacion) {
            equipo.fechaCreacion = req.body.fechaCreacion;
        }

        if (req.body.cantidadCiclistas) {
            equipo.cantidadCiclistas = req.body.cantidadCiclistas;
        }

        await equipo.save();
        res.json(equipo);

    } catch (error) {
        console.log(error);
    }
}

export {getEquipos,getEquipo,insertEquipo,deleteEquipo,updateEquipo};