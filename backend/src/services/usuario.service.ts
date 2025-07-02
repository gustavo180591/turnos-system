import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../utils/password";
const prisma = new PrismaClient();

export const UsuarioService = {
  getAll: async () => {
    return await prisma.usuario.findMany({ select: { id: true, nombre: true, email: true, tipo: true } });
  },
  create: async (data: any) => {
    const hashed = await hashPassword(data.password);
    return await prisma.usuario.create({
      data: {
        nombre: data.nombre,
        email: data.email,
        password: hashed,
        tipo: data.tipo
      }
    });
  }
};
