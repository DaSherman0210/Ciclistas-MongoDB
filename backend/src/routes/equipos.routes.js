import { Router } from "express";
import { getEquipos , getEquipo , insertEquipo , deleteEquipo , updateEquipo} from "../controllers/equipos.controllers.js";

const router = Router();

router.get("/all",getEquipos);
router.get("/all/:id",getEquipo);
router.post("/add",insertEquipo);
router.delete("/delete/:id",deleteEquipo);
router.patch("/update/:id",updateEquipo);

export default router;