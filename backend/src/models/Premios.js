import mongoose from "mongoose";

const prmeiosSchema = mongoose.Schema(
    {
        Ganador: {
            type: String,
            required: true,
            trim: true 
        },

        segundoPuesto: {
            type: String,
            required: true,
            trim: true 
        },

        tercerPuesto: {
            type: String,
            required: true,
            trim: true 
        },

        mejorTiempo: {
            type: String,
            required: true,
            trim: true 
        },

        diferenciaMinutos1roy2do: {
            type: String,
            required: true,
            trim: true 
        }
    },
    {
        timestamps: true 
    }
);

const premios = mongoose.model("premios", prmeiosSchema);

export default premios;