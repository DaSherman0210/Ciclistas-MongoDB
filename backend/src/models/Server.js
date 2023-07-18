import express from "express";
import cors from "cors";
import ciclistasRoutes from "../routes/ciclistas.routes.js"
import equiposRouter from "../routes/equipos.routes.js";
import etapasRouter from "../routes/etapas.routes.js";
import premiosRouter from "../routes/premio.routes.js"

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //* Paths
        this.ciclistasPath = "/api/ciclistas";
        this.equiposPath = "/api/equipos";
        this.etapasPath = "/api/etapas";
        this.premiosPath = "/api/premios";

        //* Middleware
        this.middleware();

        //* Routes
        this.routes();
    }


    middleware(){
        //? Configuracion de cors
        this.app.use(cors());

        //? Directorio publico
        this.app.use(express.static('public'));

        //? Reconosca formato JSON
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.ciclistasPath,ciclistasRoutes);
        this.app.use(this.equiposPath,equiposRouter);
        this.app.use(this.etapasPath,etapasRouter);
        this.app.use(this.premiosPath, premiosRouter);
    }

    listener(){
        this.app.listen(this.port , ()=> {
            console.log(`Server is running in the port ${this.port}`);
        })
    }
} 

export default Server;