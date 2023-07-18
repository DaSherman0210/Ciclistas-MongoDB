import Router from "express"
import { check } from "express-validator";
import { validateDocument } from "../middlewares/validate.documents.js";
import { getEtapas , getEtapa , insertEtapa , deleteEtapa, updateEtapa} from "../controllers/etapas.controllers.js";

const router = Router();

router.get("/all",getEtapas);
router.get("/all/:id",getEtapa);
router.post("/add", [
    check('nombre','El nombre no es valido').not().isEmpty(),
    check('primerPuesto','El dato no es valido').not().isEmpty(),
    check('segundoPuesto','El segundo no es valido').not().isEmpty(),
    check('tercerPuesto','El tercero no es valido').not().isEmpty(),
    check('kilometrosTotales','Los kilometros ingresados no son validos').not().isEmpty(),
    check('cantidadParticipantes','La cantidad de participantes no son validos').not().isEmpty(),
    validateDocument
] ,insertEtapa);
router.delete("/delete/:id",deleteEtapa);
router.patch("/update/:id", updateEtapa)

export default router;