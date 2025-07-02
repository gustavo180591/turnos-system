import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = await AuthService.login(req.body.email, req.body.password);
    res.json({ token });
  } catch (error) {
    next(error);
  }
};
    