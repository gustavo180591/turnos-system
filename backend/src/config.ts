import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'secret-key',
  databaseUrl: process.env.DATABASE_URL || '',
  nodeEnv: process.env.NODE_ENV || 'development',
};
