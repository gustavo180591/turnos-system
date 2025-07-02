import { Server } from "socket.io";
import { PrismaClient } from "@prisma/client";

export function initSocket(io: Server, prisma: PrismaClient) {
  io.on("connection", (socket) => {
    console.log("Nuevo cliente conectado:", socket.id);

    socket.on("disconnect", () => {
      console.log("Cliente desconectado:", socket.id);
    });

    // Escuchar eventos personalizados si los necesitas:
    // socket.on("evento_x", (data) => { ... });

    // Ejemplo: reenviar cambios en productores a todos
    socket.on("productor:update", async () => {
      const productores = await prisma.productor.findMany();
      io.emit("productor:list", productores);
    });
  });
}
