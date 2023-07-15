import mongoose from "mongoose";

const equiposSchema = mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true,
            trim:true
        },
        medallasGanadas:{
            type:Number,
            required:true,
            trim:true
        },
        fechaCreacion:{ 
            type:String,
            required:true,
            trim:true
        },
        cantidadCiclistas:{
            type:Number,
            required:true,
            trim:true
        }
    },
    {
        timestamps:true
    }
);

const equipos = mongoose.model("equipos",equiposSchema,"equipos");

export default equipos;