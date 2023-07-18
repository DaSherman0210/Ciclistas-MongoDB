import ciclistas from "../models/Ciclistas.js";
//? Para encriptar las constraseñas
import bcryptjs from "bcryptjs";

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
    try {

        const {nombre,edad,equipo,mejorTiempo} = req.body;
        const ciclista = new ciclistas({nombre,edad,equipo,mejorTiempo});

        //todo-- Validacion de nombre

        const existeCiclista = await ciclistas.findOne({nombre});
        if (existeCiclista) {
            return res.status(400).json({
                msg: "Este ciclista ya esta registrado"
            })
        }    

        //todo -- Encryptacion de la contraseña

        //? const salt = bcryptjs.genSaltSync();
        //? ciclista.contraseña = bcryptjs.hashSync(password , salt);

        await ciclista.save();
        res.json({
            "message":"post api",
            ciclista
        });
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