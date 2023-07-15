import mongoose from "mongoose";

const ciclistasSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true,
            trim:true
        },
        edad:{
            type:Number,
            required:true,
            trim:true
        },
        equipo:{
            type:String,
            required:true,
            trim:true
        },
        mejorTiempo:{
            type:String,
            required:true,
            trim:true
        }
    },
    {
        timestamps:true
    }
);

const ciclistas = mongoose.model("ciclistas", ciclistasSchema ,"ciclistas");

export default ciclistas;