import Router from "express";
import {check} from "express-validator";
import equipos from "../models/Equipos.js"; 
import { validateDocument } from "../middlewares/validate.documents.js";
import { getCiclistas , getCiclista , insertCiclista , deleteCiclista , updateCiclista } from "../controllers/ciclistas.controllers.js";


const router = Router();

router.get("/all",getCiclistas);
router.get("/all/:id",getCiclista);
router.post("/add" , [
    check('nombre',"El nombre no es valido").not().isEmpty(),
    check('edad',"La edad no es valida").not().isEmpty(),
    check('equipo',"El equipo no es valido").custom(async(nombre = '')=>{
        const existeEquipo = await equipos.findOne({nombre});
        if (!existeEquipo) {
            throw new Error(`El equipo ${nombre} que ingreso no se encuentra registrado en la base de datos`);
        }
    }),
    check('mejorTiempo',"El mejor tiempo digitado no es valido").not().isEmpty(),
    validateDocument
]  ,insertCiclista);
router.delete("/delete/:id",deleteCiclista);
router.patch("/update/:id",updateCiclista);

export default router;