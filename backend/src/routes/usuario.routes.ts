import { Router } from "express";
import { getAllUsuarios, createUsuario } from "../controllers/usuario.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", authMiddleware, getAllUsuarios);
router.post("/", authMiddleware, createUsuario);

export default router;
