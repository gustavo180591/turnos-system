import { Router } from "express";
import { getAllUsuarios, createUsuario } from "../controllers/usuario.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.get("/", authMiddleware, asyncHandler(getAllUsuarios));
router.post("/", authMiddleware, asyncHandler(createUsuario));

export default router;
