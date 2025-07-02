import { Router } from "express";
import { getAllBox, createBox, updateBox, deleteBox } from "../controllers/box.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", authMiddleware, getAllBox);
router.post("/", authMiddleware, createBox);
router.put("/:id", authMiddleware, updateBox);
router.delete("/:id", authMiddleware, deleteBox);

export default router;
