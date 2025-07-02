import http from "http";
import { Server } from "socket.io";
import app from "./app";
import { config } from "./config";
import { initSocket } from "./websocket";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

initSocket(io, prisma);

server.listen(config.port, () => {
  console.log(`Servidor corriendo en http://localhost:${config.port}`);
});
