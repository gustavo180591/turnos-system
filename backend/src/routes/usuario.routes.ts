import { Router } from "express";
import { getAllUsuarios, createUsuario } from "../controllers/usuario.controller";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.get("/", asyncHandler(getAllUsuarios));
router.post("/", asyncHandler(createUsuario));

export default router;
