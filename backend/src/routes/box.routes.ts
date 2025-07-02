import { Router } from "express";
import { 
  getAllBox, 
  createBox, 
  updateBox, 
  deleteBox 
} from "../controllers/box.controller";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.get("/", asyncHandler(getAllBox));
router.post("/", asyncHandler(createBox));
router.put("/:id", asyncHandler(updateBox));
router.delete("/:id", asyncHandler(deleteBox));

export default router;
