import Router from "express";
import {check} from "express-validator";
import { validateCiclistas } from "../middlewares/validate.ciclistas.js";
import { getCiclistas , getCiclista , insertCiclista , deleteCiclista , updateCiclista } from "../controllers/ciclistas.controllers.js";


const router = Router();

router.get("/all",getCiclistas);
router.get("/all/:id",getCiclista);
router.post("/add" , [
    check('nombre',"El nombre no es valido").not().isEmpty(),
    check('edad',"La edad no es valida").not().isEmpty(),
    check('equipo',"El equipo no es valido").not().isEmpty(),
    check('mejorTiempo',"El mejor tiempo digitado no es valido").not().isEmpty(),
    validateCiclistas
] ,insertCiclista);
router.delete("/delete/:id",deleteCiclista);
router.patch("/update/:id",updateCiclista);

export default router;