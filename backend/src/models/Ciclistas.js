import mongoose from "mongoose";

const ciclistasSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required:[true , "El nombre es obligatorio"],
            trim:true
        },
        edad:{
            type:Number,
            required:[true , "La edad es obligatoria"],
            trim:true
        },
        equipo:{
            type:String,
            required:[true , "El nombre del equipo es necesario"],
            trim:true
        },
        mejorTiempo:{
            type:String,
            required:[true , "El mejor tiempo es requerido"],
            trim:true
        }
    },
    {
        timestamps:true
    }
);

const ciclistas = mongoose.model("ciclistas", ciclistasSchema ,"ciclistas");

export default ciclistas;