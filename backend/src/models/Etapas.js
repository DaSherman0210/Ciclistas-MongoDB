import mongoose from "mongoose";

const etapasSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true,
            trim:true
        },
        primerPuesto:{
            type:String,
            required:true,
            trim:true
        },
        segundoPuesto:{
            type:String,
            required:true,
            trim:true
        },
        tercerPuesto:{
            type:String,
            required:true,
            trim:true
        },
        kilometrosTotales:{
            type:String,
            required:true,
            trim:true
        },
        cantidadParticipantes:{
            type:String,
            required:true,
            trim:true
        }
    },
    {
        timestamps: true
    }
);

const etapas = mongoose.model("etapas",etapasSchema,"etapas");

export default etapas;