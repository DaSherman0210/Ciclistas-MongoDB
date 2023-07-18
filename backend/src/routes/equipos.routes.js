import { Router } from "express";
import { check } from "express-validator";
import { validateDocument } from "../middlewares/validate.documents.js";
import { getEquipos , getEquipo , insertEquipo , deleteEquipo , updateEquipo} from "../controllers/equipos.controllers.js";

const router = Router();

router.get("/all",getEquipos);
router.get("/all/:id",getEquipo);
router.post("/add", [
    check('nombre','El nombre ingresado no es valido').not().isEmpty(),
    check('medallasGanadas','Las medallas ingresadas no son validas').not().isEmpty(),
    check('fechaCreacion','Esta fecha de creacion no es valida').not().isEmpty(),
    check('cantidadCiclistas','La acantidad que ingreso no es valida').not().isEmpty(),
    validateDocument
] ,insertEquipo);
router.delete("/delete/:id",deleteEquipo);
router.patch("/update/:id",updateEquipo);

export default router;