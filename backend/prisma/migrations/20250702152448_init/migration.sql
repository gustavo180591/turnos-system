-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('ADMIN', 'OPERADOR');

-- CreateEnum
CREATE TYPE "EstadoProductor" AS ENUM ('EN_ESPERA', 'LLAMADO_REGISTRO_APP', 'REGISTRADO_APP', 'LLAMADO_REGISTRO_INMUEBLE', 'REGISTRADO_INMUEBLE', 'FINALIZADO');

-- CreateTable
CREATE TABLE "Productor" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "dni" VARCHAR(8) NOT NULL,
    "estado" "EstadoProductor" NOT NULL DEFAULT 'EN_ESPERA',
    "boxAsignadoId" INTEGER,
    "timestampEntrada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Productor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Box" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "habilitado" BOOLEAN NOT NULL DEFAULT true,
    "operadorId" INTEGER,

    CONSTRAINT "Box_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tipo" "TipoUsuario" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Productor" ADD CONSTRAINT "Productor_boxAsignadoId_fkey" FOREIGN KEY ("boxAsignadoId") REFERENCES "Box"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Box" ADD CONSTRAINT "Box_operadorId_fkey" FOREIGN KEY ("operadorId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
