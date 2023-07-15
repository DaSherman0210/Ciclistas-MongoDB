import Router from "express";
import { getCiclistas , getCiclista , insertCiclista , deleteCiclista , updateCiclista } from "../controllers/ciclistas.controllers.js";

const router = Router();

router.get("/all",getCiclistas);
router.get("/all/:id",getCiclista);
router.post("/add",insertCiclista);
router.delete("/delete/:id",deleteCiclista);
router.patch("/update/:id",updateCiclista);

export default router;