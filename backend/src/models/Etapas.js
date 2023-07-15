import mongoose from "mongoose";

const etapasSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true,
            trim:true
        },
        1erPuesto:{
            type:String,
            required:true,
            trim:true
        },
        2doPuesto:{
            type:String,
            required:true,
            trim:true
        },
        3erPuesto:{
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