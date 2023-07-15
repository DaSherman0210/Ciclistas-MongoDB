import Router from "express"
import { getPremio, onePremio, addPremio, deletePremio, updatePremio } from "../controllers/premios.controllers.js";

const router = Router();

router.get("/all", getPremio);
router.get("/all/:id",onePremio);
router.post("/add",addPremio);
router.delete("/delete/:id",deletePremio);
router.patch("/upd/:id", updatePremio)

export default router;