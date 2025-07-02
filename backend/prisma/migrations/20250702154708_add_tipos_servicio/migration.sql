-- CreateEnum
CREATE TYPE "TipoServicio" AS ENUM ('REGISTRO_APP', 'REGISTRO_INMUEBLE');

-- AlterTable
ALTER TABLE "Box" ADD COLUMN     "numero" INTEGER,
ADD COLUMN     "tipo" "TipoServicio" NOT NULL DEFAULT 'REGISTRO_APP';

-- AlterTable
ALTER TABLE "Productor" ADD COLUMN     "derivadoDeId" INTEGER,
ADD COLUMN     "tipo" "TipoServicio" NOT NULL DEFAULT 'REGISTRO_APP';

-- AddForeignKey
ALTER TABLE "Productor" ADD CONSTRAINT "Productor_derivadoDeId_fkey" FOREIGN KEY ("derivadoDeId") REFERENCES "Productor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
