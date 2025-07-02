import { Router } from "express";
import { 
  getAllBox, 
  createBox, 
  updateBox, 
  deleteBox 
} from "../controllers/box.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.get("/", authMiddleware, asyncHandler(getAllBox));
router.post("/", authMiddleware, asyncHandler(createBox));
router.put("/:id", authMiddleware, asyncHandler(updateBox));
router.delete("/:id", authMiddleware, asyncHandler(deleteBox));

export default router;
