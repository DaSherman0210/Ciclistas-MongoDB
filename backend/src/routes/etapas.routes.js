import Router from "express"
import { getEtapas , getEtapa , insertEtapa , deleteEtapa, updateEtapa} from "../controllers/etapas.controllers.js";

const router = Router();

router.get("/all",getEtapas);
router.get("/all/:id",getEtapa);
router.post("/add",insertEtapa);
router.delete("/delete/:id",deleteEtapa);
router.patch("/update/:id", updateEtapa)

export default router;