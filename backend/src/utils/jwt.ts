import jwt from "jsonwebtoken";
import { config } from "../config";

export function generateToken(payload: any) {
  return jwt.sign(payload, config.jwtSecret, { expiresIn: "8h" });
}

export function verifyToken(token: string) {
  return jwt.verify(token, config.jwtSecret);
}
