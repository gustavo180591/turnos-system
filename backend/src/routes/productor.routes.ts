import { Router } from "express";
import {
  getAllProductores,
  createProductor,
  updateProductor,
  callProductor,
  finishProductor,
} from "../controllers/productor.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

// Rutas
router.get("/", authMiddleware, asyncHandler(getAllProductores));
router.post("/", asyncHandler(createProductor)); // recepción, público
router.put("/:id", authMiddleware, asyncHandler(updateProductor));
router.post("/:id/call", authMiddleware, asyncHandler(callProductor));
router.post("/:id/finish", authMiddleware, asyncHandler(finishProductor));

export default router;
