import Router from "express"
import { getPremio, onePremio, addPremio, deletePremio, updatePremio } from "../controllers/premios.controllers.js";
import { check } from "express-validator";

const router = Router();

router.get("/all", getPremio);
router.get("/all/:id",onePremio);
router.post("/add", [
    check('Ganador','Este ganador ya esta declarado').not().isEmpty(),
    check('segundoPuesto','Este segundo puesto ya esta declarado').not().isEmpty(),
    check('tercerPuesto','Este tercer puesto ya esta declarado').not().isEmpty(),
    check('mejorTiempo','Este mejor tiempo ya esta declarado').not().isEmpty(),
    check('diferenciaMinutos1roy2do','Esa diferencia ya esta declarado').not().isEmpty()
] ,addPremio);
router.delete("/delete/:id",deletePremio);
router.patch("/update/:id", updatePremio)

export default router;