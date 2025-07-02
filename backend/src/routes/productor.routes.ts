import { Router } from "express";
import {
  getAllProductores,
  createProductor,
  updateProductor,
  callProductor,
  finishProductor,
} from "../controllers/productor.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", authMiddleware, getAllProductores);
router.post("/", createProductor); // recepción, público
router.put("/:id", authMiddleware, updateProductor);
router.post("/:id/call", authMiddleware, callProductor);
router.post("/:id/finish", authMiddleware, finishProductor);

export default router;
