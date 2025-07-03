import { Router } from "express";
import {
  getAllProductores,
  createProductor,
  updateProductor,
  callProductor,
  finishProductor,
  derivarProductor,
  deleteProductor,
} from "../controllers/productor.controller";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

// Rutas
router.get("/", asyncHandler(getAllProductores));
router.post("/", asyncHandler(createProductor)); // recepción, público
router.put("/:id", asyncHandler(updateProductor));
router.post("/:id/call", asyncHandler(callProductor));
router.post("/:id/finish", asyncHandler(finishProductor));
router.post("/:id/derivar", asyncHandler(derivarProductor));
router.delete("/:id", asyncHandler(deleteProductor));

export default router;
