FROM node:20-alpine

WORKDIR /app

# Install system dependencies for Prisma
RUN apk add --no-cache openssl python3 make g++

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Install all dependencies including devDependencies
RUN npm install --include=dev

# Generate Prisma client
RUN npx prisma generate

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Install only production dependencies
RUN npm ci --only=production

# Run Prisma migrations before starting the app
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
