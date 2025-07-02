import { PrismaClient, EstadoProductor } from "@prisma/client";
const prisma = new PrismaClient();

export const ProductorService = {
  getAll: async () => {
    return await prisma.productor.findMany({ include: { boxAsignado: true } });
  },
  create: async (data: any) => {
    return await prisma.productor.create({ data });
  },
  update: async (id: number, data: any) => {
    return await prisma.productor.update({ where: { id }, data });
  },
  call: async (id: number, tipoLlamado: 'REGISTRO_APP' | 'REGISTRO_INMUEBLE') => {
    let nuevoEstado: EstadoProductor;
    if (tipoLlamado === 'REGISTRO_APP') {
      nuevoEstado = EstadoProductor.LLAMADO_REGISTRO_APP;
    } else {
      nuevoEstado = EstadoProductor.LLAMADO_REGISTRO_INMUEBLE;
    }
    return await prisma.productor.update({ where: { id }, data: { estado: nuevoEstado } });
  },
  finish: async (id: number) => {
    return await prisma.productor.update({ where: { id }, data: { estado: EstadoProductor.FINALIZADO } });
  }
};
