import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const conexion = await mongoose.connect(process.env.MONGO_URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const url = `CONECTANDO A LA BASE DE DATOS EN MONGO DB EN EL HOST ${conexion.connection.host} en el PUERTO ${conexion.connection.port}`
        console.log(url); 
    } catch (error) {
        console.log(error);
    }
}

export default conectarDB;