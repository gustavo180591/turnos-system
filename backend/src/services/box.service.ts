import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const BoxService = {
  getAll: async () => {
    return await prisma.box.findMany({ include: { operador: true, productores: true } });
  },
  create: async (data: any) => {
    return await prisma.box.create({ data });
  },
  update: async (id: number, data: any) => {
    return await prisma.box.update({ where: { id }, data });
  },
  delete: async (id: number) => {
    return await prisma.box.delete({ where: { id } });
  }
};
