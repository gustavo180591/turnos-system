import { PrismaClient, EstadoProductor, TipoServicio } from "@prisma/client";
const prisma = new PrismaClient();

export const ProductorService = {
  getAll: async () => {
    return await prisma.productor.findMany({ 
      include: { 
        boxAsignado: true,
        derivadoDe: true,
        derivados: true
      } 
    });
  },
  create: async (data: any) => {
    return await prisma.productor.create({ 
      data,
      include: { 
        boxAsignado: true,
        derivadoDe: true,
        derivados: true
      }
    });
  },
  update: async (id: number, data: any) => {
    return await prisma.productor.update({ 
      where: { id }, 
      data,
      include: { 
        boxAsignado: true,
        derivadoDe: true,
        derivados: true
      }
    });
  },
  call: async (id: number, tipoLlamado?: 'REGISTRO_APP' | 'REGISTRO_INMUEBLE') => {
    // Obtener el productor para saber su tipo
    const productor = await prisma.productor.findUnique({ where: { id } });
    if (!productor) throw new Error('Productor no encontrado');
    
    let nuevoEstado: EstadoProductor;
    
    // Si no se especifica tipo, usar el tipo del productor
    const tipo = tipoLlamado || productor.tipo;
    
    if (tipo === 'REGISTRO_APP') {
      nuevoEstado = EstadoProductor.LLAMADO_REGISTRO_APP;
    } else {
      nuevoEstado = EstadoProductor.LLAMADO_REGISTRO_INMUEBLE;
    }
    
    return await prisma.productor.update({ 
      where: { id }, 
      data: { estado: nuevoEstado },
      include: { 
        boxAsignado: true,
        derivadoDe: true,
        derivados: true
      }
    });
  },
  finish: async (id: number) => {
    return await prisma.productor.update({ 
      where: { id }, 
      data: { estado: EstadoProductor.FINALIZADO },
      include: { 
        boxAsignado: true,
        derivadoDe: true,
        derivados: true
      }
    });
  },
  getByTipo: async (tipo: TipoServicio) => {
    return await prisma.productor.findMany({ 
      where: { tipo },
      include: { 
        boxAsignado: true,
        derivadoDe: true,
        derivados: true
      } 
    });
  },
  delete: async (id: number) => {
    // Primero verificar si existe
    const productor = await prisma.productor.findUnique({ 
      where: { id },
      include: { derivados: true }
    });
    
    if (!productor) {
      throw new Error('Productor no encontrado');
    }
    
    // Si tiene turnos derivados, actualizar sus referencias
    if (productor.derivados.length > 0) {
      await prisma.productor.updateMany({
        where: { derivadoDeId: id },
        data: { derivadoDeId: null }
      });
    }
    
    // Ahora sí eliminar el productor
    return await prisma.productor.delete({ 
      where: { id } 
    });
  }
};
