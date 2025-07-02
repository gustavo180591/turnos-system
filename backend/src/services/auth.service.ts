import { PrismaClient } from "@prisma/client";
import { comparePassword } from "../utils/password";
import { generateToken } from "../utils/jwt";

const prisma = new PrismaClient();

export const AuthService = {
  login: async (email: string, password: string) => {
    const user = await prisma.usuario.findUnique({ where: { email } });
    if (!user) throw new Error("Usuario no encontrado");
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) throw new Error("Credenciales incorrectas");
    return generateToken({ id: user.id, email: user.email, tipo: user.tipo });
  }
};
