import { Router } from "express";
import boxRoutes from "./box.routes";
import productorRoutes from "./productor.routes";
import usuarioRoutes from "./usuario.routes";
import authRoutes from "./auth.routes";

const router = Router();

router.use("/box", boxRoutes);
router.use("/productor", productorRoutes);
router.use("/usuario", usuarioRoutes);
router.use("/auth", authRoutes);

export default router;
