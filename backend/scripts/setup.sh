#!/bin/sh
set -e

# Instalar dependencias
npm install

# Generar el cliente de Prisma
npx prisma generate

# Construir la aplicación
npm run build

echo "Setup completado exitosamente"
