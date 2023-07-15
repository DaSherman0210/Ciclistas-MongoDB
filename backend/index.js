import dotenv from "dotenv";
import conectarDB from "./src/config/config.js";
import Server from "./src/models/Server.js";

dotenv.config();

const server = new Server();

server.listener();

conectarDB();